import { UserProfile, Achievement, GameSession, CommunityWord, Word } from '../types/game';
import { ACHIEVEMENTS, INITIAL_COMMUNITY_WORDS, SEED_WORDS } from '../data/seedData';

const PROFILE_KEY = 'mime_master_profile';
const SESSIONS_KEY = 'mime_master_sessions';
const ACHIEVEMENTS_KEY = 'mime_master_achievements';
const COMMUNITY_KEY = 'mime_master_community_words';
const CUSTOM_WORDS_KEY = 'mime_master_custom_words';

export const DEFAULT_PROFILE: UserProfile = {
  name: 'استاد پانتومیم',
  avatarId: 'mimeo_1',
  level: 1,
  xp: 0,
  coins: 100,
  streak: 1,
  totalGamesPlayed: 0,
  totalCorrectGuesses: 0,
};

export function getStoredProfile(): UserProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(DEFAULT_PROFILE));
      return DEFAULT_PROFILE;
    }
    return JSON.parse(raw);
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save profile', e);
  }
}

export function getStoredAchievements(): Achievement[] {
  if (typeof window === 'undefined') return ACHIEVEMENTS;
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!raw) {
      localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(ACHIEVEMENTS));
      return ACHIEVEMENTS;
    }
    return JSON.parse(raw);
  } catch {
    return ACHIEVEMENTS;
  }
}

export function unlockAchievement(achievementId: string): Achievement[] {
  const current = getStoredAchievements();
  let changed = false;
  const updated = current.map((a) => {
    if (a.id === achievementId && !a.isUnlocked) {
      changed = true;
      return { ...a, isUnlocked: true };
    }
    return a;
  });

  if (changed && typeof window !== 'undefined') {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function getStoredSessions(): GameSession[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSession(session: GameSession): GameSession[] {
  const sessions = getStoredSessions();
  const updated = [session, ...sessions].slice(0, 30);
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function getStoredCommunityWords(): CommunityWord[] {
  if (typeof window === 'undefined') return INITIAL_COMMUNITY_WORDS;
  try {
    const raw = localStorage.getItem(COMMUNITY_KEY);
    if (!raw) {
      localStorage.setItem(COMMUNITY_KEY, JSON.stringify(INITIAL_COMMUNITY_WORDS));
      return INITIAL_COMMUNITY_WORDS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_COMMUNITY_WORDS;
  }
}

export function saveCommunityWord(word: CommunityWord): CommunityWord[] {
  const words = getStoredCommunityWords();
  const updated = [word, ...words];
  if (typeof window !== 'undefined') {
    localStorage.setItem(COMMUNITY_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function upvoteCommunityWord(id: string): CommunityWord[] {
  const words = getStoredCommunityWords();
  const updated = words.map((w) => (w.id === id ? { ...w, votes: w.votes + 1 } : w));
  if (typeof window !== 'undefined') {
    localStorage.setItem(COMMUNITY_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function getCustomWords(): Word[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_WORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addCustomWords(newWords: Word[]): Word[] {
  const words = getCustomWords();
  const updated = [...newWords, ...words];
  if (typeof window !== 'undefined') {
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function getAllWords(): Word[] {
  const custom = getCustomWords();
  return [...custom, ...SEED_WORDS];
}

export function addXpAndCoins(
  earnedXp: number,
  earnedCoins: number,
  newGuesses = 0
): { profile: UserProfile; leveledUp: boolean; unlockedAchievements: Achievement[] } {
  const current = getStoredProfile();
  let xp = current.xp + earnedXp;
  let level = current.level;
  let xpNeeded = level * 100;
  let leveledUp = false;

  while (xp >= xpNeeded) {
    xp -= xpNeeded;
    level++;
    xpNeeded = level * 100;
    leveledUp = true;
  }

  const newProfile: UserProfile = {
    ...current,
    xp,
    level,
    coins: current.coins + earnedCoins,
    totalGamesPlayed: current.totalGamesPlayed + 1,
    totalCorrectGuesses: current.totalCorrectGuesses + newGuesses,
  };

  saveProfile(newProfile);

  // Check achievements
  let unlockedAchievements: Achievement[] = [];
  if (newProfile.totalGamesPlayed >= 1) {
    unlockedAchievements = unlockAchievement('first_win');
  }
  if (newProfile.totalGamesPlayed >= 5) {
    unlockedAchievements = unlockAchievement('party_king');
  }
  if (newProfile.totalCorrectGuesses >= 20) {
    unlockedAchievements = unlockAchievement('master_mime');
  }

  return { profile: newProfile, leveledUp, unlockedAchievements };
}
