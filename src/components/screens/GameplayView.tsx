'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Word, ScoreLogItem } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { AnimatedTimerRing } from '../AnimatedTimerRing';
import { MascotMimeo, MimeoExpression } from '../MascotMimeo';
import { soundManager } from '@/lib/sound';
import {
  Pause,
  Eye,
  Check,
  X,
  Lightbulb,
  Play,
  LogOut,
  Flame,
  History,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface GameplayViewProps {
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  team1ScoreHistory?: ScoreLogItem[];
  team2ScoreHistory?: ScoreLogItem[];
  activeTeamIndex: number;
  currentRound: number;
  totalRounds: number;
  remainingSeconds: number;
  totalSeconds: number;
  isTimerRunning: boolean;
  isCardRevealed: boolean;
  currentWord: Word | null;
  comboCount: number;
  mimeoReaction: string;
  showHint: boolean;
  onToggleReveal: () => void;
  onCorrectGuess: () => void;
  onSkipWord: () => void;
  onToggleHint: () => void;
  onPauseGame: () => void;
  onResumeGame: () => void;
  onEndGameEarly: () => void;
}

export const GameplayView: React.FC<GameplayViewProps> = ({
  team1Name,
  team2Name,
  team1Score,
  team2Score,
  team1ScoreHistory = [],
  team2ScoreHistory = [],
  activeTeamIndex,
  currentRound,
  totalRounds,
  remainingSeconds,
  totalSeconds,
  isTimerRunning,
  isCardRevealed,
  currentWord,
  comboCount,
  mimeoReaction,
  showHint,
  onToggleReveal,
  onCorrectGuess,
  onSkipWord,
  onToggleHint,
  onPauseGame,
  onResumeGame,
  onEndGameEarly,
}) => {
  const [showPauseModal, setShowPauseModal] = useState(false);
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  const activeTeamName = activeTeamIndex === 0 ? team1Name : team2Name;
  const activeTeamScore = activeTeamIndex === 0 ? team1Score : team2Score;

  const handlePauseClick = () => {
    soundManager.playPop();
    onPauseGame();
    setShowPauseModal(true);
  };

  const handleResume = () => {
    soundManager.playPop();
    setShowPauseModal(false);
    onResumeGame();
  };

  const handleEndEarly = () => {
    soundManager.playPop();
    setShowPauseModal(false);
    onEndGameEarly();
  };

  const pauseStateRef = useRef({
    showPauseModal,
    onPauseGame,
    onResumeGame,
  });
  pauseStateRef.current = { showPauseModal, onPauseGame, onResumeGame };

  useEffect(() => {
    const onAndroidBack = () => {
      soundManager.playPop();
      if (pauseStateRef.current.showPauseModal) {
        setShowPauseModal(false);
        pauseStateRef.current.onResumeGame();
      } else {
        pauseStateRef.current.onPauseGame();
        setShowPauseModal(true);
      }
    };

    window.addEventListener('pantomix:android-back', onAndroidBack);
    return () => {
      window.removeEventListener('pantomix:android-back', onAndroidBack);
    };
  }, []);

  const mascotExpression: MimeoExpression =
    remainingSeconds <= 10
      ? 'SURPRISED'
      : comboCount >= 2
      ? 'CELEBRATING'
      : isCardRevealed
      ? 'HAPPY'
      : 'THINKING';

  return (
    <div className="flex flex-col min-h-[calc(100vh-30px)] justify-between space-y-3 pb-8 pt-3 animate-fadeIn max-w-sm mx-auto">
      {/* Sleek Top Bar */}
      <div className="flex items-center justify-between pb-1">
        <button
          onClick={handlePauseClick}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] hover:bg-slate-50 text-slate-900 transition-all flex items-center justify-center"
          title="توقف بازی"
        >
          <Pause className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="text-[11px] font-bold text-slate-600 tabular-nums">
            راند {currentRound} از {totalRounds}
          </div>
          <div className="text-sm font-black text-[#0B0D12]">
            نوبت: {activeTeamName}
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] text-slate-900 text-xs font-black tabular-nums">
          {activeTeamScore} امتیاز
        </div>
      </div>

      {/* Team Score Cards */}
      <div className="grid grid-cols-2 gap-2.5">
        <div
          className={`p-3 rounded-[22px] border text-center transition-all ${
            activeTeamIndex === 0
              ? 'bg-[#0B0D12] border-[#0B0D12] text-white shadow-lg'
              : 'bg-white border-slate-900/[0.06] text-slate-600 shadow-sm'
          }`}
        >
          <div className="text-[11px] font-bold truncate opacity-85">{team1Name}</div>
          <div className="text-xl font-black tabular-nums mt-0.5">{team1Score}</div>
          <div
            className={`flex items-center justify-center gap-1 mt-1.5 pt-1.5 border-t ${
              activeTeamIndex === 0 ? 'border-white/15' : 'border-slate-100'
            }`}
          >
            <span className="text-[9px] opacity-70 font-medium">۳ اخیر:</span>
            {team1ScoreHistory.length === 0 ? (
              <span className="text-[9px] opacity-50">—</span>
            ) : (
              team1ScoreHistory.map((item) => (
                <span
                  key={item.id}
                  title={`${item.wordText}: +${item.points}`}
                  className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-500 tabular-nums"
                >
                  +{item.points}
                </span>
              ))
            )}
          </div>
        </div>

        <div
          className={`p-3 rounded-[22px] border text-center transition-all ${
            activeTeamIndex === 1
              ? 'bg-[#0B0D12] border-[#0B0D12] text-white shadow-lg'
              : 'bg-white border-slate-900/[0.06] text-slate-600 shadow-sm'
          }`}
        >
          <div className="text-[11px] font-bold truncate opacity-85">{team2Name}</div>
          <div className="text-xl font-black tabular-nums mt-0.5">{team2Score}</div>
          <div
            className={`flex items-center justify-center gap-1 mt-1.5 pt-1.5 border-t ${
              activeTeamIndex === 1 ? 'border-white/15' : 'border-slate-100'
            }`}
          >
            <span className="text-[9px] opacity-70 font-medium">۳ اخیر:</span>
            {team2ScoreHistory.length === 0 ? (
              <span className="text-[9px] opacity-50">—</span>
            ) : (
              team2ScoreHistory.map((item) => (
                <span
                  key={item.id}
                  title={`${item.wordText}: +${item.points}`}
                  className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-500 tabular-nums"
                >
                  +{item.points}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Small History Log (Last 3 Points per Team) */}
      <div className="rounded-2xl bg-white border border-slate-900/[0.06] shadow-sm px-3 py-2 space-y-1.5 text-right transition-all">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-700">
            <History className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-black">تاریخچه ۳ امتیاز اخیر تیم‌ها</span>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              setIsHistoryExpanded(!isHistoryExpanded);
            }}
            className="flex items-center gap-1 text-[10px] text-slate-700 hover:text-slate-950 font-bold px-2 py-0.5 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all"
          >
            <span>{isHistoryExpanded ? 'بستن لاگ' : 'مشاهده کلمات'}</span>
            {isHistoryExpanded ? (
              <ChevronUp className="w-3 h-3" />
            ) : (
              <ChevronDown className="w-3 h-3" />
            )}
          </button>
        </div>

        {isHistoryExpanded ? (
          <div className="grid grid-cols-2 gap-2 pt-1 animate-fadeIn">
            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-[10px] font-bold text-slate-500 truncate pb-1 border-b border-slate-200 flex items-center justify-between">
                <span className="text-slate-800 truncate">{team1Name}</span>
                <span className="text-emerald-600 text-[9px] font-mono">
                  {team1ScoreHistory.length}/۳
                </span>
              </div>
              {team1ScoreHistory.length === 0 ? (
                <div className="text-[10px] text-slate-400 py-1.5 text-center">
                  هنوز امتیازی ثبت نشده
                </div>
              ) : (
                <div className="space-y-1">
                  {team1ScoreHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-[10px] px-1.5 py-0.5 rounded-md bg-white border border-slate-100"
                    >
                      <span
                        className="truncate max-w-[80px] text-slate-800 font-medium"
                        title={item.wordText}
                      >
                        {item.wordText}
                      </span>
                      <span className="font-black text-emerald-600 font-mono text-[10px]">
                        +{item.points}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
              <div className="text-[10px] font-bold text-slate-500 truncate pb-1 border-b border-slate-200 flex items-center justify-between">
                <span className="text-slate-800 truncate">{team2Name}</span>
                <span className="text-emerald-600 text-[9px] font-mono">
                  {team2ScoreHistory.length}/۳
                </span>
              </div>
              {team2ScoreHistory.length === 0 ? (
                <div className="text-[10px] text-slate-400 py-1.5 text-center">
                  هنوز امتیازی ثبت نشده
                </div>
              ) : (
                <div className="space-y-1">
                  {team2ScoreHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-[10px] px-1.5 py-0.5 rounded-md bg-white border border-slate-100"
                    >
                      <span
                        className="truncate max-w-[80px] text-slate-800 font-medium"
                        title={item.wordText}
                      >
                        {item.wordText}
                      </span>
                      <span className="font-black text-emerald-600 font-mono text-[10px]">
                        +{item.points}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
            <div className="flex items-center gap-1 truncate max-w-[48%]">
              <span className="font-bold text-slate-700 truncate">{team1Name}:</span>
              {team1ScoreHistory.length === 0 ? (
                <span className="text-slate-400">—</span>
              ) : (
                team1ScoreHistory.map((item) => (
                  <span
                    key={item.id}
                    className="font-bold text-emerald-600 tabular-nums"
                    title={item.wordText}
                  >
                    +{item.points}
                  </span>
                ))
              )}
            </div>

            <div className="flex items-center gap-1 truncate max-w-[48%] justify-end">
              <span className="font-bold text-slate-700 truncate">{team2Name}:</span>
              {team2ScoreHistory.length === 0 ? (
                <span className="text-slate-400">—</span>
              ) : (
                team2ScoreHistory.map((item) => (
                  <span
                    key={item.id}
                    className="font-bold text-emerald-600 tabular-nums"
                    title={item.wordText}
                  >
                    +{item.points}
                  </span>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Main Word Card */}
      <GlassCard
        onClick={() => {
          if (!isCardRevealed) {
            soundManager.playPop();
            onToggleReveal();
          }
        }}
        className={`p-6 min-h-[205px] flex flex-col items-center justify-center text-center relative transition-all duration-300 ${
          !isCardRevealed ? 'cursor-pointer hover:border-slate-900/20' : ''
        }`}
      >
        {!isCardRevealed ? (
          <div className="flex flex-col items-center justify-center space-y-2.5 animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-[#F4FF57] text-[#0B0D12] border border-slate-900/10 flex items-center justify-center shadow-sm">
              <Eye className="w-7 h-7" />
            </div>

            <div className="text-lg font-black text-slate-950">
              برای مشاهده کلمه لمس کنید 👈
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              تایمر بلافاصله شروع می‌شود
            </p>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between items-center space-y-3 animate-fadeIn">
            <div className="w-full flex items-center justify-between text-xs">
              <span className="text-xs font-black text-slate-700 tabular-nums">
                +{currentWord?.points || 10} امتیاز
              </span>

              {comboCount > 1 && (
                <span className="text-xs font-black text-rose-600 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-rose-500" />
                  <span>کامبو x{comboCount}</span>
                </span>
              )}
            </div>

            {/* Word Display */}
            <div className="py-2">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B0D12] tracking-tight leading-relaxed">
                {currentWord?.text || 'کلمه پانتومیم'}
              </h2>
            </div>

            {/* Hint Box */}
            <div className="w-full pt-1">
              {showHint && currentWord?.hint ? (
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold leading-relaxed animate-fadeIn">
                  💡 راهنمایی: {currentWord.hint}
                </div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playPop();
                    onToggleHint();
                  }}
                  className="flex items-center justify-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 font-bold mx-auto transition-colors"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>مشاهده راهنمایی کلمه</span>
                </button>
              )}
            </div>
          </div>
        )}
      </GlassCard>

      {/* Timer and Mascot Section */}
      <div className="flex items-center justify-between px-2 py-1">
        <AnimatedTimerRing
          remainingSeconds={remainingSeconds}
          totalSeconds={totalSeconds}
          size={92}
        />

        <div className="max-w-[200px]">
          <MascotMimeo
            expression={mascotExpression}
            dialogueText={mimeoReaction}
            size={68}
            showSpeechBubble={true}
          />
        </div>
      </div>

      {/* Primary Action Buttons: Skip and Correct */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        <button
          onClick={() => {
            soundManager.playSkip();
            onSkipWord();
          }}
          disabled={!isCardRevealed}
          className="h-14 rounded-2xl bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 font-black text-sm shadow-sm hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
          <span>رد کردن</span>
        </button>

        <button
          onClick={() => {
            soundManager.playSuccess();
            onCorrectGuess();
          }}
          disabled={!isCardRevealed}
          className="h-14 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-sm shadow-[0_12px_26px_rgba(11,13,18,0.22)] hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none"
        >
          <Check className="w-5 h-5 stroke-[2.5] text-[#F4FF57]" />
          <span>درست (+امتیاز)</span>
        </button>
      </div>

      {/* Pause Modal Dialog */}
      {showPauseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-xs rounded-[28px] bg-white border border-slate-200 p-5 space-y-3.5 text-center shadow-2xl">
            <h3 className="text-base font-black text-slate-950">
              توقف بازی پانتومیم ⏸️
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              بازی موقتاً متوقف شد. برای ادامه یا خروج انتخاب کنید:
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleResume}
                className="w-full py-3 rounded-xl bg-[#0B0D12] text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>ادامه بازی</span>
              </button>

              <button
                onClick={handleEndEarly}
                className="w-full py-3 rounded-xl bg-rose-50 text-rose-600 font-bold text-xs border border-rose-200 transition-all flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>پایان و مشاهده نتایج</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
