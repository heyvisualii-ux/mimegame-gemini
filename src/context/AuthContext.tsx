'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { UserProfile } from '@/types/game';
import { getStoredProfile, saveProfile } from '@/lib/storage';

export type AuthState =
  | 'GUEST'
  | 'LOGIN_IN_PROGRESS'
  | 'AUTHENTICATED'
  | 'PROFILE_LOADING'
  | 'AUTH_ERROR';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  authState: AuthState;
  authError: string | null;
  loginWithGoogle: () => Promise<boolean>;
  logout: () => Promise<void>;
  updateProfileData: (updates: Partial<UserProfile>) => Promise<boolean>;
  refreshProfile: () => Promise<void>;
  clearAuthError: () => void;
  setUserProfileState: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [authState, setAuthState] = useState<AuthState>('GUEST');
  const [authError, setAuthError] = useState<string | null>(null);

  // Lazy-load Firebase SDK on the client after mount so app/layout.js stays lightweight
  useEffect(() => {
    setUserProfile(getStoredProfile());

    let cancelled = false;
    let unsubscribe: (() => void) | undefined;
    let handleOnline: (() => void) | undefined;

    (async () => {
      try {
        const [{ onAuthStateChanged }, firebaseMod, profileMod] = await Promise.all([
          import('firebase/auth'),
          import('@/lib/firebase'),
          import('@/lib/userProfileService'),
        ]);

        if (cancelled) return;

        const connectionProbePromise = firebaseMod.testConnection().catch((err) => {
          console.warn('Initial connection probe:', err);
          return false;
        });

        handleOnline = () => {
          firebaseMod.testConnection().catch(() => {});
        };
        if (typeof window !== 'undefined') {
          window.addEventListener('online', handleOnline);
        }

        unsubscribe = onAuthStateChanged(
          firebaseMod.auth,
          async (firebaseUser) => {
            if (cancelled) return;
            if (firebaseUser) {
              setCurrentUser(firebaseUser);
              setAuthState('PROFILE_LOADING');
              try {
                const localProgress = getStoredProfile();
                const isReachable = await connectionProbePromise;
                if (!isReachable) {
                  throw new Error('Firestore backend currently unreachable');
                }
                const profile = await profileMod.syncOrCreateUserProfile(
                  firebaseUser,
                  localProgress
                );
                if (!cancelled) {
                  setUserProfile(profile);
                  setAuthState('AUTHENTICATED');
                  setAuthError(null);
                }
              } catch (err) {
                console.warn('Using local fallback profile:', err);
                const local = getStoredProfile();
                const fallback: UserProfile = {
                  ...local,
                  uid: firebaseUser.uid,
                  email: firebaseUser.email || '',
                  displayName: firebaseUser.displayName || local.name,
                  name: firebaseUser.displayName || local.name,
                  photoURL: firebaseUser.photoURL || '',
                };
                if (!cancelled) {
                  setUserProfile(fallback);
                  setAuthState('AUTHENTICATED');
                }
              }
            } else {
              setCurrentUser(null);
              const local = getStoredProfile();
              setUserProfile(local);
              setAuthState('GUEST');
            }
          },
          (error) => {
            console.error('onAuthStateChanged error:', error);
            if (!cancelled) {
              setAuthError('خطا در بررسی وضعیت احراز هویت');
              setAuthState('AUTH_ERROR');
            }
          }
        );
      } catch (err) {
        console.warn('Firebase deferred initialization skipped:', err);
      }
    })();

    return () => {
      cancelled = true;
      if (unsubscribe) unsubscribe();
      if (handleOnline && typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
      }
    };
  }, []);

  const loginWithGoogle = async (): Promise<boolean> => {
    setAuthState('LOGIN_IN_PROGRESS');
    setAuthError(null);
    try {
      const [{ signInWithPopup, signInWithCredential, GoogleAuthProvider }, firebaseMod, profileMod, capMod] =
        await Promise.all([
          import('firebase/auth'),
          import('@/lib/firebase'),
          import('@/lib/userProfileService'),
          import('@/lib/capacitor'),
        ]);

      let firebaseUser: User;
      if (capMod.isCapacitorNative()) {
        const { idToken } = await capMod.nativeGoogleSignIn();
        const credential = GoogleAuthProvider.credential(idToken);
        const result = await signInWithCredential(firebaseMod.auth, credential);
        firebaseUser = result.user;
      } else {
        const result = await signInWithPopup(firebaseMod.auth, firebaseMod.googleProvider);
        firebaseUser = result.user;
      }

      setCurrentUser(firebaseUser);
      setAuthState('PROFILE_LOADING');

      await firebaseMod.ensureFirestoreNetworkEnabled();
      const localProgress = getStoredProfile();
      const profile = await profileMod.syncOrCreateUserProfile(firebaseUser, localProgress);
      setUserProfile(profile);
      setAuthState('AUTHENTICATED');
      return true;
    } catch (error: unknown) {
      console.error('Google Sign-In Error:', error);
      let message = 'ورود با حساب گوگل با خطا مواجه شد. لطفاً دوباره تلاش کنید.';

      if (error && typeof error === 'object' && 'code' in error) {
        const code = (error as { code: string }).code;
        if (code === 'auth/popup-closed-by-user') {
          message = 'پنجره ورود به حساب گوگل توسط کاربر بسته شد.';
        } else if (code === 'auth/cancelled-popup-request') {
          message = 'درخواست ورود لغو شد.';
        } else if (code === 'auth/popup-blocked') {
          message = 'پاپ‌آپ ورود توسط مرورگر مسدود شد. لطفاً اجازه باز شدن پنجره را بدهید.';
        } else if (code === 'auth/network-request-failed') {
          message = 'خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.';
        }
      } else if (error instanceof Error && error.message) {
        if (error.message.toLowerCase().includes('cancel')) {
          message = 'ورود با حساب گوگل توسط کاربر لغو شد.';
        }
      }

      setAuthError(message);
      setAuthState(currentUser ? 'AUTHENTICATED' : 'GUEST');
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const [{ signOut }, firebaseMod, capMod] = await Promise.all([
        import('firebase/auth'),
        import('@/lib/firebase'),
        import('@/lib/capacitor'),
      ]);
      await capMod.nativeGoogleSignOut();
      await signOut(firebaseMod.auth);
      setCurrentUser(null);
      const local = getStoredProfile();
      setUserProfile(local);
      setAuthState('GUEST');
      setAuthError(null);
    } catch (error) {
      console.error('Logout error:', error);
      setAuthError('خطا در خروج از حساب کاربری');
    }
  };

  const updateProfileData = async (updates: Partial<UserProfile>): Promise<boolean> => {
    if (!currentUser) {
      const current = userProfile || getStoredProfile();
      const updated: UserProfile = {
        ...current,
        ...updates,
        name: updates.displayName || updates.name || current.name,
      };
      saveProfile(updated);
      setUserProfile(updated);
      return true;
    }

    try {
      const [firebaseMod, profileMod] = await Promise.all([
        import('@/lib/firebase'),
        import('@/lib/userProfileService'),
      ]);
      await firebaseMod.ensureFirestoreNetworkEnabled();
      const updated = await profileMod.updateUserProfileInFirestore(currentUser.uid, updates);
      setUserProfile(updated);
      return true;
    } catch (error) {
      console.error('Failed to update profile:', error);
      setAuthError('خطا در به‌روزرسانی مشخصات کاربری در فایربیس');
      return false;
    }
  };

  const refreshProfile = async (): Promise<void> => {
    if (!currentUser) return;
    try {
      const [firebaseMod, profileMod] = await Promise.all([
        import('@/lib/firebase'),
        import('@/lib/userProfileService'),
      ]);
      await firebaseMod.ensureFirestoreNetworkEnabled();
      const profile = await profileMod.fetchUserProfileFromFirestore(currentUser.uid);
      if (profile) {
        setUserProfile(profile);
        saveProfile(profile);
      }
    } catch (e) {
      console.error('Failed to refresh profile:', e);
    }
  };

  const clearAuthError = () => setAuthError(null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        authState,
        authError,
        loginWithGoogle,
        logout,
        updateProfileData,
        refreshProfile,
        clearAuthError,
        setUserProfileState: setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
