export type GameModeId =
  | 'CLASSIC'
  | 'SPEED_CHALLENGE'
  | 'TEAM_BATTLE'
  | 'AI_CHALLENGE'
  | 'FAMILY'
  | 'PARTY_EXTREME';

export interface GameModeInfo {
  id: GameModeId;
  titleFa: string;
  descriptionFa: string;
  badge: string;
  colorHex: string;
  gradient: string[];
}

export type WordDifficulty = 'EASY' | 'MEDIUM' | 'HARD' | 'EXTREME';

export interface DifficultyInfo {
  id: WordDifficulty;
  titleFa: string;
  points: number;
  colorHex: string;
}

export interface Word {
  id: string;
  text: string;
  category: string;
  difficulty: WordDifficulty;
  points: number;
  hint: string;
  isCustomAi?: boolean;
}

export interface Category {
  id: string;
  titleFa: string;
  iconName: string;
  colorHex: string;
  itemCount: number;
}

export interface GameSession {
  id: string;
  mode: GameModeId;
  modeTitleFa: string;
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  winnerTeamName: string;
  durationSeconds: number;
  dateTimestamp: number;
}

export type AuthState =
  | 'GUEST'
  | 'LOGIN_IN_PROGRESS'
  | 'AUTHENTICATED'
  | 'PROFILE_LOADING'
  | 'AUTH_ERROR';

export interface UserProfile {
  // Core & Display
  name: string;
  displayName?: string;
  username?: string;
  avatarId: string;
  photoURL?: string;
  bio?: string;

  // Identity & Auth
  uid?: string;
  email?: string;
  createdAt?: string;
  lastLoginAt?: string;

  // Game Progression
  level: number;
  xp: number;
  coins: number;
  streak: number;

  // Game Statistics
  totalGamesPlayed: number;
  totalCorrectGuesses: number;
  wins?: number;
  losses?: number;
  totalScore?: number;
}

export interface Achievement {
  id: string;
  titleFa: string;
  descriptionFa: string;
  iconName: string;
  isUnlocked: boolean;
  rewardXp: number;
}

export interface CommunityWord {
  id: string;
  text: string;
  category: string;
  creatorName: string;
  votes: number;
  createdAt: number;
}

export interface AiGameRecommendation {
  recommendedModeTitle: string;
  recommendedModeId: GameModeId;
  mimeoGreeting: string;
  suggestedCategoryIds: string[];
  targetRounds: number;
  roundTimerSeconds: number;
  funTip: string;
}

export interface ScoreLogItem {
  id: string;
  points: number;
  wordText: string;
  round: number;
  timestamp: number;
}

