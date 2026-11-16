import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from './firebase';
import { UserProfile } from '@/types/game';
import { getStoredProfile, saveProfile } from './storage';

export interface ProfileUpdatePayload {
  displayName?: string;
  username?: string;
  bio?: string;
  photoURL?: string;
}

function sanitizeUsername(input: string): string {
  const cleaned = input.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  const valid = cleaned.length >= 3 ? cleaned.slice(0, 30) : `user_${Math.floor(Math.random() * 8999 + 1000)}`;
  return valid;
}

/**
 * Fetch or create user profile on Firestore
 */
export async function getOrCreateUserProfile(user: FirebaseUser): Promise<UserProfile> {
  const userDocRef = doc(db, 'users', user.uid);
  const privateDocRef = doc(db, 'users', user.uid, 'private', 'info');

  try {
    const snap = await getDoc(userDocRef);

    if (snap.exists()) {
      const data = snap.data();
      // Update last login timestamp in private doc
      try {
        await setDoc(
          privateDocRef,
          {
            uid: user.uid,
            email: user.email || '',
            lastLoginAt: new Date().toISOString(),
          },
          { merge: true }
        );
      } catch (err) {
        console.warn('Failed to update last login timestamp:', err);
      }

      const profile: UserProfile = {
        uid: user.uid,
        email: user.email || '',
        name: data.displayName || user.displayName || 'بازیکن پانتومیکس',
        displayName: data.displayName || user.displayName || 'بازیکن پانتومیکس',
        username: data.username || sanitizeUsername(user.email?.split('@')[0] || 'player'),
        photoURL: data.photoURL || user.photoURL || '/pantomix_mascot.jpg',
        avatarId: 'mascot',
        bio: data.bio || '',
        level: data.level || 1,
        xp: data.xp || 0,
        coins: data.coins || 100,
        streak: data.streak || 1,
        totalGamesPlayed: data.totalGamesPlayed || 0,
        totalCorrectGuesses: data.totalCorrectGuesses || 0,
        totalScore: data.totalScore || 0,
        wins: data.totalWins || 0,
        losses: data.totalLosses || 0,
      };

      saveProfile(profile);
      return profile;
    }

    // First time login: Migrate existing local stats if any
    const localProfile = getStoredProfile();
    const baseUsername = sanitizeUsername(user.email?.split('@')[0] || user.displayName || 'player');

    const newProfile: UserProfile = {
      uid: user.uid,
      email: user.email || '',
      name: user.displayName || 'بازیکن پانتومیکس',
      displayName: user.displayName || 'بازیکن پانتومیکس',
      username: baseUsername,
      photoURL: user.photoURL || '/pantomix_mascot.jpg',
      avatarId: 'mascot',
      bio: 'عاشق پانتومیم و دورهمی‌های شاد!',
      level: Math.max(1, localProfile.level || 1),
      xp: Math.max(0, localProfile.xp || 0),
      coins: Math.max(100, localProfile.coins || 100),
      streak: Math.max(1, localProfile.streak || 1),
      totalGamesPlayed: localProfile.totalGamesPlayed || 0,
      totalCorrectGuesses: localProfile.totalCorrectGuesses || 0,
      totalScore: (localProfile.totalCorrectGuesses || 0) * 20,
      wins: localProfile.totalGamesPlayed || 0,
      losses: 0,
    };

    // Save public profile
    await setDoc(userDocRef, {
      uid: newProfile.uid,
      displayName: newProfile.displayName,
      username: newProfile.username,
      photoURL: newProfile.photoURL,
      bio: newProfile.bio,
      level: newProfile.level,
      xp: newProfile.xp,
      coins: newProfile.coins,
      streak: newProfile.streak,
      totalGamesPlayed: newProfile.totalGamesPlayed,
      totalScore: newProfile.totalScore,
      totalWins: newProfile.wins,
      totalLosses: newProfile.losses,
      updatedAt: new Date().toISOString(),
    });

    // Save private info
    await setDoc(privateDocRef, {
      uid: user.uid,
      email: user.email || '',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    });

    saveProfile(newProfile);
    return newProfile;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
  }
}

/**
 * Sign in with Google using popup
 */
export async function loginWithGoogle(): Promise<UserProfile> {
  try {
    const cred = await signInWithPopup(auth, googleProvider);
    if (!cred.user) {
      throw new Error('ورود با حساب گوگل ناموفق بود.');
    }
    const profile = await getOrCreateUserProfile(cred.user);
    return profile;
  } catch (error: any) {
    if (error?.code === 'auth/popup-closed-by-user') {
      throw new Error('پنجره ورود توسط کاربر بسته شد.');
    }
    if (error?.code === 'auth/cancelled-popup-request') {
      throw new Error('درخواست ورود لغو شد.');
    }
    if (error?.code === 'auth/network-request-failed') {
      throw new Error('خطا در برقراری ارتباط با شبکه. لطفاً اتصال اینترنت خود را بررسی کنید.');
    }
    throw error;
  }
}

/**
 * Sign out user
 */
export async function logoutUser(): Promise<void> {
  await signOut(auth);
}

/**
 * Update user editable profile fields in Firestore
 */
export async function updateUserProfile(
  uid: string,
  payload: ProfileUpdatePayload
): Promise<void> {
  const userDocRef = doc(db, 'users', uid);

  // Validation
  if (payload.username) {
    const cleanUser = payload.username.trim();
    if (cleanUser.length < 3 || cleanUser.length > 50) {
      throw new Error('نام کاربری باید بین ۳ تا ۵۰ کاراکتر باشد.');
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(cleanUser)) {
      throw new Error('نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد، _ و - باشد.');
    }
  }

  if (payload.displayName) {
    const cleanName = payload.displayName.trim();
    if (cleanName.length < 1 || cleanName.length > 100) {
      throw new Error('نام نمایشی باید بین ۱ تا ۱۰۰ کاراکتر باشد.');
    }
  }

  if (payload.bio && payload.bio.length > 300) {
    throw new Error('بیوگرافی نمی‌تواند بیشتر از ۳۰۰ کاراکتر باشد.');
  }

  try {
    const updateData: Record<string, any> = {
      updatedAt: new Date().toISOString(),
    };
    if (payload.displayName !== undefined) updateData.displayName = payload.displayName.trim();
    if (payload.username !== undefined) updateData.username = payload.username.trim();
    if (payload.bio !== undefined) updateData.bio = payload.bio.trim();
    if (payload.photoURL !== undefined) updateData.photoURL = payload.photoURL;

    await updateDoc(userDocRef, updateData);

    // Sync local storage
    const current = getStoredProfile();
    const updated: UserProfile = {
      ...current,
      displayName: payload.displayName || current.displayName,
      name: payload.displayName || current.name,
      username: payload.username || current.username,
      bio: payload.bio !== undefined ? payload.bio : current.bio,
      photoURL: payload.photoURL || current.photoURL,
    };
    saveProfile(updated);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `users/${uid}`);
  }
}

/**
 * Sync game progress after game completion to Firestore
 */
export async function syncGameResultToFirestore(
  uid: string,
  earnedXp: number,
  earnedCoins: number,
  isWin: boolean,
  sessionDetails?: {
    id: string;
    mode: string;
    modeTitleFa: string;
    team1Name: string;
    team2Name: string;
    team1Score: number;
    team2Score: number;
    winnerTeamName: string;
    durationSeconds: number;
  }
): Promise<void> {
  if (!uid) return;

  const userDocRef = doc(db, 'users', uid);

  try {
    const snap = await getDoc(userDocRef);
    if (!snap.exists()) return;

    const data = snap.data();
    const newXp = (data.xp || 0) + earnedXp;
    const newCoins = (data.coins || 0) + earnedCoins;
    const newLevel = Math.floor(newXp / 500) + 1;
    const newGames = (data.totalGamesPlayed || 0) + 1;
    const newWins = (data.totalWins || 0) + (isWin ? 1 : 0);
    const newLosses = (data.totalLosses || 0) + (isWin ? 0 : 1);
    const newTotalScore = (data.totalScore || 0) + earnedCoins;

    await updateDoc(userDocRef, {
      xp: newXp,
      coins: newCoins,
      level: newLevel,
      totalGamesPlayed: newGames,
      totalWins: newWins,
      totalLosses: newLosses,
      totalScore: newTotalScore,
      updatedAt: new Date().toISOString(),
    });

    if (sessionDetails) {
      const sessionDocRef = doc(db, 'users', uid, 'game_sessions', sessionDetails.id);
      await setDoc(sessionDocRef, {
        id: sessionDetails.id,
        userId: uid,
        mode: sessionDetails.mode,
        modeTitleFa: sessionDetails.modeTitleFa,
        team1Name: sessionDetails.team1Name,
        team2Name: sessionDetails.team2Name,
        team1Score: sessionDetails.team1Score,
        team2Score: sessionDetails.team2Score,
        winnerTeamName: sessionDetails.winnerTeamName,
        durationSeconds: sessionDetails.durationSeconds,
        createdAt: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.warn('Could not sync game session to Firestore:', error);
  }
}
