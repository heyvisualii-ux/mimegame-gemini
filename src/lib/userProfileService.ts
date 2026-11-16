import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db, handleFirestoreError, OperationType } from './firebase';
import { GameSession, UserProfile } from '@/types/game';
import { saveProfile } from './storage';

const USERS_COLLECTION = 'users';

/**
 * Fetch user profile from Firestore by UID
 */
export async function fetchUserProfileFromFirestore(uid: string): Promise<UserProfile | null> {
  const path = `${USERS_COLLECTION}/${uid}`;
  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    const snap = await getDoc(docRef);
    if (!snap.exists()) {
      return null;
    }
    const data = snap.data() as UserProfile;
    return {
      ...data,
      name: data.displayName || data.name || 'استاد پانتومیم',
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

/**
 * Sync or create user profile in Firestore upon Google Sign-In,
 * preserving any existing local progress (XP, Coins, streak, games played).
 */
export async function syncOrCreateUserProfile(
  firebaseUser: User,
  localProgress: UserProfile
): Promise<UserProfile> {
  const uid = firebaseUser.uid;
  const path = `${USERS_COLLECTION}/${uid}`;

  try {
    const existing = await fetchUserProfileFromFirestore(uid);

    const nowIso = new Date().toISOString();
    const displayName = firebaseUser.displayName || 'بازیکن پانتومیکس';
    const email = firebaseUser.email || '';
    const photoURL = firebaseUser.photoURL || '';
    const generatedUsername = email ? email.split('@')[0].slice(0, 30) : `player_${uid.slice(0, 6)}`;

    if (!existing) {
      // First-time login: create new profile merged with local guest progress
      const newProfile: UserProfile = {
        uid,
        email,
        displayName: displayName.slice(0, 100),
        name: displayName.slice(0, 100),
        username: generatedUsername,
        photoURL: photoURL.slice(0, 1000),
        bio: 'علاقه‌مند به بازی و دورهمی پانتومیکس 🎭',
        createdAt: nowIso,
        lastLoginAt: nowIso,
        avatarId: localProgress.avatarId || 'mimeo_1',
        level: Math.max(1, localProgress.level || 1),
        xp: localProgress.xp || 0,
        coins: Math.max(100, localProgress.coins || 100),
        streak: Math.max(1, localProgress.streak || 1),
        totalGamesPlayed: localProgress.totalGamesPlayed || 0,
        totalCorrectGuesses: localProgress.totalCorrectGuesses || 0,
        wins: 0,
        losses: 0,
        totalScore: 0,
      };

      await setDoc(doc(db, USERS_COLLECTION, uid), newProfile);
      saveProfile(newProfile);
      return newProfile;
    } else {
      // Returning user: update last login and keep best progress
      const mergedProfile: UserProfile = {
        ...existing,
        email: email || existing.email,
        displayName: existing.displayName || displayName.slice(0, 100),
        name: existing.displayName || displayName.slice(0, 100),
        photoURL: photoURL || existing.photoURL || '',
        lastLoginAt: nowIso,
        // Preserve maximum between cloud and local session
        xp: Math.max(existing.xp || 0, localProgress.xp || 0),
        coins: Math.max(existing.coins || 100, localProgress.coins || 100),
        level: Math.max(existing.level || 1, localProgress.level || 1),
        totalGamesPlayed: Math.max(existing.totalGamesPlayed || 0, localProgress.totalGamesPlayed || 0),
        totalCorrectGuesses: Math.max(
          existing.totalCorrectGuesses || 0,
          localProgress.totalCorrectGuesses || 0
        ),
      };

      await updateDoc(doc(db, USERS_COLLECTION, uid), {
        lastLoginAt: nowIso,
        xp: mergedProfile.xp,
        coins: mergedProfile.coins,
        level: mergedProfile.level,
        totalGamesPlayed: mergedProfile.totalGamesPlayed,
        totalCorrectGuesses: mergedProfile.totalCorrectGuesses,
      });

      saveProfile(mergedProfile);
      return mergedProfile;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Update editable profile fields (username, displayName, bio, photoURL)
 */
export async function updateUserProfileInFirestore(
  uid: string,
  updates: Partial<UserProfile>
): Promise<UserProfile> {
  const path = `${USERS_COLLECTION}/${uid}`;

  // Validate fields per firestore security rules
  const sanitized: Partial<UserProfile> = {};

  if (updates.displayName !== undefined) {
    sanitized.displayName = updates.displayName.trim().slice(0, 100);
    sanitized.name = sanitized.displayName;
  }
  if (updates.username !== undefined) {
    sanitized.username = updates.username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '').slice(0, 50);
  }
  if (updates.bio !== undefined) {
    sanitized.bio = updates.bio.trim().slice(0, 500);
  }
  if (updates.photoURL !== undefined) {
    sanitized.photoURL = updates.photoURL.slice(0, 1000);
  }
  if (updates.avatarId !== undefined) {
    sanitized.avatarId = updates.avatarId;
  }

  try {
    const docRef = doc(db, USERS_COLLECTION, uid);
    await setDoc(docRef, sanitized, { merge: true });

    const updated = await fetchUserProfileFromFirestore(uid);
    if (!updated) {
      throw new Error('Failed to retrieve updated profile');
    }
    saveProfile(updated);
    return updated;
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

/**
 * Save user game session to subcollection users/{userId}/sessions/{sessionId}
 */
export async function saveUserGameSessionToFirestore(
  uid: string,
  session: GameSession
): Promise<void> {
  const path = `${USERS_COLLECTION}/${uid}/sessions/${session.id}`;
  try {
    const docRef = doc(db, USERS_COLLECTION, uid, 'sessions', session.id);
    await setDoc(docRef, {
      ...session,
      userId: uid,
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}
