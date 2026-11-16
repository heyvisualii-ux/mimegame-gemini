'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import {
  auth,
  ensureFirestoreNetworkEnabled,
  googleProvider,
  testConnection,
} from '@/lib/firebase';
import { UserProfile } from '@/types/game';
import { getStoredProfile, saveProfile } from '@/lib/storage';
import {
  fetchUserProfileFromFirestore,
  syncOrCreateUserProfile,
  updateUserProfileInFirestore,
} from '@/lib/userProfileService';

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
  const [authState, setAuthState] = useState<AuthState>('PROFILE_LOADING');
  const [authError, setAuthError] = useState<string | null>(null);

  // Initial connection test and auth state listener
  useEffect(() => {
    const connectionProbePromise = testConnection().catch((err) => {
      console.warn('Initial connection probe:', err);
      return false;
    });

    const handleOnline = () => {
      testConnection().catch(() => {});
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('online', handleOnline);
    }

    const unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        if (firebaseUser) {
          setCurrentUser(firebaseUser);
          setAuthState('PROFILE_LOADING');
          try {
            const localProgress = getStoredProfile();
            const isReachable = await connectionProbePromise;
            if (!isReachable) {
              throw new Error('Firestore backend currently unreachable');
            }
            const profile = await syncOrCreateUserProfile(firebaseUser, localProgress);
            setUserProfile(profile);
            setAuthState('AUTHENTICATED');
            setAuthError(null);
          } catch (err) {
            console.warn('Using local fallback profile:', err);
            // Fallback to local profile with user display name
            const local = getStoredProfile();
            const fallback: UserProfile = {
              ...local,
              uid: firebaseUser.uid,
              email: firebaseUser.email || '',
              displayName: firebaseUser.displayName || local.name,
              name: firebaseUser.displayName || local.name,
              photoURL: firebaseUser.photoURL || '',
            };
            setUserProfile(fallback);
            setAuthState('AUTHENTICATED');
          }
        } else {
          setCurrentUser(null);
          // Load local profile for guest
          const local = getStoredProfile();
          setUserProfile(local);
          setAuthState('GUEST');
        }
      },
      (error) => {
        console.error('onAuthStateChanged error:', error);
        setAuthError('خطا در بررسی وضعیت احراز هویت');
        setAuthState('AUTH_ERROR');
      }
    );

    return () => {
      unsubscribe();
      if (typeof window !== 'undefined') {
        window.removeEventListener('online', handleOnline);
      }
    };
  }, []);

  const loginWithGoogle = async (): Promise<boolean> => {
    setAuthState('LOGIN_IN_PROGRESS');
    setAuthError(null);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      setCurrentUser(firebaseUser);
      setAuthState('PROFILE_LOADING');

      await ensureFirestoreNetworkEnabled();
      const localProgress = getStoredProfile();
      const profile = await syncOrCreateUserProfile(firebaseUser, localProgress);
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
      }

      setAuthError(message);
      setAuthState(currentUser ? 'AUTHENTICATED' : 'GUEST');
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
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
      // Guest mode: update locally
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
      await ensureFirestoreNetworkEnabled();
      const updated = await updateUserProfileInFirestore(currentUser.uid, updates);
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
      await ensureFirestoreNetworkEnabled();
      const profile = await fetchUserProfileFromFirestore(currentUser.uid);
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
