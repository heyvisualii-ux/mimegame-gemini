'use client';

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
  AiGameRecommendation,
  Category,
  GameModeId,
  GameSession,
  ScoreLogItem,
  UserProfile,
  Word,
  WordDifficulty,
} from '@/types/game';
import { CATEGORIES, GAME_MODES, SEED_WORDS } from '@/data/seedData';
import {
  addCustomWords,
  addXpAndCoins,
  getAllWords,
  getStoredAchievements,
  getStoredCommunityWords,
  getStoredProfile,
  getStoredSessions,
  saveCommunityWord,
  saveSession,
  upvoteCommunityWord,
} from '@/lib/storage';
import { soundManager } from '@/lib/sound';
import { requestAiReaction } from '@/lib/aiClient';
import { registerAndroidBackHandler } from '@/lib/capacitor';
import { ActiveTab, BottomNav } from '@/components/BottomNav';
import { HomeScreenView } from '@/components/screens/HomeScreenView';
import { useAuth } from '@/context/AuthContext';

const GameSetupView = dynamic(
  () => import('@/components/screens/GameSetupView').then((m) => m.GameSetupView),
  { ssr: false }
);
const GameplayView = dynamic(
  () => import('@/components/screens/GameplayView').then((m) => m.GameplayView),
  { ssr: false }
);
const ResultsView = dynamic(
  () => import('@/components/screens/ResultsView').then((m) => m.ResultsView),
  { ssr: false }
);
const AiMasterView = dynamic(
  () => import('@/components/screens/AiMasterView').then((m) => m.AiMasterView),
  { ssr: false }
);
const CommunityView = dynamic(
  () => import('@/components/screens/CommunityView').then((m) => m.CommunityView),
  { ssr: false }
);
const ProfileView = dynamic(
  () => import('@/components/screens/ProfileView').then((m) => m.ProfileView),
  { ssr: false }
);
const AuthModal = dynamic(
  () => import('@/components/AuthModal').then((m) => m.AuthModal),
  { ssr: false }
);

type ScreenState = 'HOME' | 'SETUP' | 'GAMEPLAY' | 'RESULTS';

export default function MimeMasterApp() {
  const auth = useAuth();
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [screenState, setScreenState] = useState<ScreenState>('HOME');
  const [isMuted, setIsMuted] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Persistent user and game state
  const [localProfile, setLocalProfile] = useState<UserProfile | null>(null);
  const profile = auth.userProfile || localProfile;
  const [achievements, setAchievements] = useState(getStoredAchievements());
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const [communityWords, setCommunityWords] = useState(getStoredCommunityWords());
  const [allWords, setAllWords] = useState<Word[]>([]);

  // Setup state
  const [selectedModeId, setSelectedModeId] = useState<GameModeId>('CLASSIC');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'cinema',
    'funny',
    'proverbs',
  ]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<WordDifficulty>('MEDIUM');

  // Gameplay state
  const [team1Name, setTeam1Name] = useState('تیم ستاره‌ها 🌟');
  const [team2Name, setTeam2Name] = useState('تیم قهرمانان 🏆');
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);
  const [team1ScoreHistory, setTeam1ScoreHistory] = useState<ScoreLogItem[]>([]);
  const [team2ScoreHistory, setTeam2ScoreHistory] = useState<ScoreLogItem[]>([]);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0); // 0 = team1, 1 = team2
  const [currentRound, setCurrentRound] = useState(1);
  const [totalRounds, setTotalRounds] = useState(3);
  const [roundDuration, setRoundDuration] = useState(90);
  const [remainingSeconds, setRemainingSeconds] = useState(90);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isCardRevealed, setIsCardRevealed] = useState(false);
  const [gameWordPool, setGameWordPool] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [comboCount, setComboCount] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [correctGuessesInSession, setCorrectGuessesInSession] = useState(0);
  const [mimeoReaction, setMimeoReaction] = useState('روی کارت بزنید تا کلمه رونمایی بشه!');

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const navStateRef = useRef({
    isAuthModalOpen: false,
    activeTab: 'home' as ActiveTab,
    screenState: 'HOME' as ScreenState,
  });

  useEffect(() => {
    navStateRef.current = { isAuthModalOpen, activeTab, screenState };
  }, [isAuthModalOpen, activeTab, screenState]);

  // Register Android hardware back button handling
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let active = true;

    registerAndroidBackHandler(() => {
      const current = navStateRef.current;
      if (current.isAuthModalOpen) {
        setIsAuthModalOpen(false);
        return true;
      }
      if (current.activeTab !== 'home') {
        setActiveTab('home');
        return true;
      }
      if (current.screenState === 'SETUP' || current.screenState === 'RESULTS') {
        setScreenState('HOME');
        return true;
      }
      if (current.screenState === 'GAMEPLAY') {
        window.dispatchEvent(new CustomEvent('pantomix:android-back'));
        return true;
      }
      return false;
    }).then((remove) => {
      if (active) {
        cleanup = remove;
      } else {
        remove();
      }
    });

    return () => {
      active = false;
      if (cleanup) cleanup();
    };
  }, []);

  // Load storage on client mount
  useEffect(() => {
    setLocalProfile(getStoredProfile());
    setAchievements(getStoredAchievements());
    setSessions(getStoredSessions());
    setCommunityWords(getStoredCommunityWords());
    setAllWords(getAllWords());
  }, []);

  // Timer Tick Effect
  useEffect(() => {
    if (isTimerRunning && screenState === 'GAMEPLAY') {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            handleTurnTimeout();
            return 0;
          }
          if (prev <= 10) {
            soundManager.playTick(true);
          } else if (prev % 5 === 0) {
            soundManager.playTick(false);
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerRunning, screenState, activeTeamIndex, currentRound, totalRounds]);

  const handleTurnTimeout = () => {
    soundManager.playSkip();
    setMimeoReaction('زمان این نوبت تموم شد! نوبت تیم بعدی رسید! ⏱️');
    setIsTimerRunning(false);

    // Switch teams or advance round
    if (activeTeamIndex === 0) {
      setActiveTeamIndex(1);
      resetTurn(roundDuration);
    } else {
      if (currentRound < totalRounds) {
        setCurrentRound((r) => r + 1);
        setActiveTeamIndex(0);
        resetTurn(roundDuration);
      } else {
        finishGame();
      }
    }
  };

  const resetTurn = (duration: number) => {
    setRemainingSeconds(duration);
    setIsCardRevealed(false);
    setShowHint(false);
    setComboCount(0);
    setCurrentWordIndex((idx) => (idx + 1) % Math.max(1, gameWordPool.length));
  };

  const currentWord = gameWordPool[currentWordIndex] || null;

  // Toggle Card Reveal
  const handleToggleReveal = () => {
    setIsCardRevealed(true);
    setIsTimerRunning(true);
    setMimeoReaction('کلمه رو دیدید! حالا با حرکات دست و زبان بدن شروع کنید! 🎭');
  };

  // Correct Guess
  const handleCorrectGuess = async () => {
    const points = currentWord?.points || 10;
    const newCombo = comboCount + 1;
    setComboCount(newCombo);
    setCorrectGuessesInSession((prev) => prev + 1);

    const logEntry: ScoreLogItem = {
      id: `score_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      points,
      wordText: currentWord?.text || 'کلمه پانتومیم',
      round: currentRound,
      timestamp: Date.now(),
    };

    if (activeTeamIndex === 0) {
      setTeam1Score((s) => s + points);
      setTeam1ScoreHistory((prev) => [logEntry, ...prev].slice(0, 3));
    } else {
      setTeam2Score((s) => s + points);
      setTeam2ScoreHistory((prev) => [logEntry, ...prev].slice(0, 3));
    }

    // Reaction commentary with timeout/offline safety
    requestAiReaction({
      isSuccess: true,
      score: (activeTeamIndex === 0 ? team1Score : team2Score) + points,
      combo: newCombo,
    }).then((reaction) => {
      if (reaction) setMimeoReaction(reaction);
    });

    // Advance to next word
    setShowHint(false);
    setCurrentWordIndex((prev) => (prev + 1) % Math.max(1, gameWordPool.length));
  };

  // Skip Word
  const handleSkipWord = async () => {
    setComboCount(0);
    setShowHint(false);

    requestAiReaction({
      isSuccess: false,
      score: activeTeamIndex === 0 ? team1Score : team2Score,
      combo: 0,
    }).then((reaction) => {
      if (reaction) setMimeoReaction(reaction);
    });

    setCurrentWordIndex((prev) => (prev + 1) % Math.max(1, gameWordPool.length));
  };

  // Finish Game & Record Stats
  const finishGame = () => {
    setIsTimerRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);

    const winnerName =
      team1Score > team2Score
        ? team1Name
        : team2Score > team1Score
        ? team2Name
        : 'مساوی';

    const earnedXp = (team1Score + team2Score) * 5 + 50;
    const earnedCoins = team1Score + team2Score + 10;

    const { profile: updatedProfile, unlockedAchievements } = addXpAndCoins(
      earnedXp,
      earnedCoins,
      correctGuessesInSession
    );
    setLocalProfile(updatedProfile);
    setAchievements(unlockedAchievements);

    const session: GameSession = {
      id: `session_${Date.now()}`,
      mode: selectedModeId,
      modeTitleFa:
        GAME_MODES.find((m) => m.id === selectedModeId)?.titleFa || 'کلاسیک',
      team1Name,
      team2Name,
      team1Score,
      team2Score,
      winnerTeamName: winnerName,
      durationSeconds: roundDuration * totalRounds * 2,
      dateTimestamp: Date.now(),
    };

    const updatedSessions = saveSession(session);
    setSessions(updatedSessions);

    // If authenticated, sync session and stats to Firestore
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      import('@/lib/userProfileService')
        .then(({ saveUserGameSessionToFirestore }) =>
          saveUserGameSessionToFirestore(uid, session)
        )
        .catch((err) => {
          console.warn('Could not save session to Firestore:', err);
        });
      auth
        .updateProfileData({
          xp: updatedProfile.xp,
          coins: updatedProfile.coins,
          level: updatedProfile.level,
          totalGamesPlayed: (profile?.totalGamesPlayed || 0) + 1,
          totalCorrectGuesses:
            (profile?.totalCorrectGuesses || 0) + correctGuessesInSession,
          wins:
            winnerName === team1Name
              ? (profile?.wins || 0) + 1
              : profile?.wins || 0,
          losses:
            winnerName === team2Name
              ? (profile?.losses || 0) + 1
              : profile?.losses || 0,
          totalScore: (profile?.totalScore || 0) + team1Score + team2Score,
        })
        .catch(() => {});
    }

    setScreenState('RESULTS');
  };

  // Start game with custom params
  const handleStartGame = (
    t1: string,
    t2: string,
    rounds: number,
    duration: number
  ) => {
    setTeam1Name(t1);
    setTeam2Name(t2);
    setTotalRounds(rounds);
    setCurrentRound(1);
    setRoundDuration(duration);
    setRemainingSeconds(duration);
    setTeam1Score(0);
    setTeam2Score(0);
    setTeam1ScoreHistory([]);
    setTeam2ScoreHistory([]);
    setActiveTeamIndex(0);
    setIsCardRevealed(false);
    setIsTimerRunning(false);
    setShowHint(false);
    setComboCount(0);
    setCorrectGuessesInSession(0);
    setMimeoReaction('بازی شروع شد! روی کارت بزنید تا کلمه اول آشکار بشه! 🎭');

    // Filter and shuffle words
    let pool = allWords.filter((w) => selectedCategories.includes(w.category));
    if (pool.length === 0) {
      pool = allWords;
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    setGameWordPool(shuffled);
    setCurrentWordIndex(0);

    setScreenState('GAMEPLAY');
    setActiveTab('home');
  };

  // Quick Start (Classic)
  const handleQuickStart = () => {
    setSelectedModeId('CLASSIC');
    handleStartGame('تیم ستاره‌ها 🌟', 'تیم قهرمانان 🏆', 3, 90);
  };

  // Start with AI Game Master recommendation
  const handleStartWithAiRecommendation = (rec: AiGameRecommendation) => {
    setSelectedModeId(rec.recommendedModeId);
    if (rec.suggestedCategoryIds?.length) {
      setSelectedCategories(rec.suggestedCategoryIds);
    }
    handleStartGame(
      'تیم ستاره‌ها 🌟',
      'تیم قهرمانان 🏆',
      rec.targetRounds || 3,
      rec.roundTimerSeconds || 90
    );
  };

  // Custom words added
  const handleCustomWordsAdded = (newWords: Word[]) => {
    const updated = addCustomWords(newWords);
    setAllWords([...updated, ...SEED_WORDS]);
  };

  // Community words submit
  const handleCommunitySubmit = (
    text: string,
    category: string,
    creatorName: string
  ) => {
    const newWord = {
      id: `cw_${Date.now()}`,
      text,
      category,
      creatorName,
      votes: 1,
      createdAt: Date.now(),
    };
    const updated = saveCommunityWord(newWord);
    setCommunityWords(updated);
  };

  // Community word upvote
  const handleCommunityUpvote = (id: string) => {
    const updated = upvoteCommunityWord(id);
    setCommunityWords(updated);
  };

  // Audio mute toggle
  const handleToggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    soundManager.setMuted(newMuted);
  };

  const selectedModeInfo =
    GAME_MODES.find((m) => m.id === selectedModeId) || GAME_MODES[0];

  const backdropGradient =
    activeTab === 'profile'
      ? 'linear-gradient(180deg, #6FA8FF 0%, #C6DFFF 42%, #FFFFFF 78%)'
      : activeTab === 'ai-master' || activeTab === 'community'
      ? 'linear-gradient(180deg, #D9FF54 0%, #EEFFB3 42%, #FFFFFF 78%)'
      : 'linear-gradient(180deg, #F4FF57 0%, #FAFFD0 42%, #FFFFFF 78%)';

  return (
    <div className="relative pb-24 min-h-screen -mx-4 px-4 bg-white text-slate-950">
      {/* Top Sunlit Pastel-to-White Reference Gradient */}
      <div
        className="fixed inset-x-0 top-0 h-[520px] pointer-events-none transition-all duration-500 z-0"
        style={{ background: backdropGradient }}
      />
      <div className="relative z-10">
        {/* Tab routing */}
        {activeTab === 'ai-master' ? (
          <AiMasterView
            onStartWithRecommendation={handleStartWithAiRecommendation}
            onCustomWordsGenerated={handleCustomWordsAdded}
            onBack={() => setActiveTab('home')}
          />
        ) : activeTab === 'community' ? (
          <CommunityView
            communityWords={communityWords}
            onSubmitWord={handleCommunitySubmit}
            onUpvote={handleCommunityUpvote}
            onBack={() => setActiveTab('home')}
          />
        ) : activeTab === 'profile' ? (
          <ProfileView
            profile={profile}
            achievements={achievements}
            sessions={sessions}
            onBack={() => setActiveTab('home')}
          />
        ) : (
          /* Home Tab Screen Router */
          <>
            {screenState === 'HOME' && (
              <HomeScreenView
                profile={profile}
                selectedModeId={selectedModeId}
                isMuted={isMuted}
                onToggleMute={handleToggleMute}
                onSelectMode={(modeId) => {
                  setSelectedModeId(modeId);
                }}
                onQuickStart={handleQuickStart}
                onOpenSetup={() => setScreenState('SETUP')}
                onOpenAiMaster={() => setActiveTab('ai-master')}
                onOpenProfile={() => setActiveTab('profile')}
                onOpenAuthModal={() => setIsAuthModalOpen(true)}
              />
            )}

          {screenState === 'SETUP' && (
            <GameSetupView
              selectedMode={selectedModeInfo}
              categories={CATEGORIES}
              selectedCategories={selectedCategories}
              selectedDifficulty={selectedDifficulty}
              onToggleCategory={(catId) => {
                setSelectedCategories((prev) =>
                  prev.includes(catId)
                    ? prev.length > 1
                      ? prev.filter((c) => c !== catId)
                      : prev
                    : [...prev, catId]
                );
              }}
              onSelectDifficulty={setSelectedDifficulty}
              onStartGame={handleStartGame}
              onBack={() => setScreenState('HOME')}
            />
          )}

          {screenState === 'GAMEPLAY' && (
            <GameplayView
              team1Name={team1Name}
              team2Name={team2Name}
              team1Score={team1Score}
              team2Score={team2Score}
              team1ScoreHistory={team1ScoreHistory}
              team2ScoreHistory={team2ScoreHistory}
              activeTeamIndex={activeTeamIndex}
              currentRound={currentRound}
              totalRounds={totalRounds}
              remainingSeconds={remainingSeconds}
              totalSeconds={roundDuration}
              isTimerRunning={isTimerRunning}
              isCardRevealed={isCardRevealed}
              currentWord={currentWord}
              comboCount={comboCount}
              mimeoReaction={mimeoReaction}
              showHint={showHint}
              onToggleReveal={handleToggleReveal}
              onCorrectGuess={handleCorrectGuess}
              onSkipWord={handleSkipWord}
              onToggleHint={() => setShowHint(!showHint)}
              onPauseGame={() => setIsTimerRunning(false)}
              onResumeGame={() => setIsTimerRunning(true)}
              onEndGameEarly={finishGame}
            />
          )}

          {screenState === 'RESULTS' && (
            <ResultsView
              team1Name={team1Name}
              team2Name={team2Name}
              team1Score={team1Score}
              team2Score={team2Score}
              onPlayAgain={() => {
                handleStartGame(
                  team1Name,
                  team2Name,
                  totalRounds,
                  roundDuration
                );
              }}
              onGoHome={() => setScreenState('HOME')}
            />
          )}
          </>
        )}
      </div>

      {/* Persistent Bottom Navigation (hidden during active gameplay turn to give maximum focus) */}
      {!(screenState === 'GAMEPLAY' && activeTab === 'home') && (
        <BottomNav
          activeTab={activeTab}
          onChangeTab={setActiveTab}
          onCenterPlayClick={() => {
            setActiveTab('home');
            handleQuickStart();
          }}
        />
      )}

      {/* Google Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
