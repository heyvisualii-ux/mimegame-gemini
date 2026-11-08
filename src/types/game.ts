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

export interface UserProfile {
  name: string;
  avatarId: string;
  level: number;
  xp: number;
  coins: number;
  streak: number;
  totalGamesPlayed: number;
  totalCorrectGuesses: number;
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
