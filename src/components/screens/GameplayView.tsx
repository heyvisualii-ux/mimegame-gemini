'use client';

import React, { useState } from 'react';
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

  const mascotExpression: MimeoExpression =
    remainingSeconds <= 10
      ? 'SURPRISED'
      : comboCount >= 2
      ? 'CELEBRATING'
      : isCardRevealed
      ? 'HAPPY'
      : 'THINKING';

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)] justify-between space-y-3 pb-8 pt-1 animate-fadeIn max-w-sm mx-auto">
      {/* Sleek Top Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
        <button
          onClick={handlePauseClick}
          className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all shadow-sm"
          title="توقف بازی"
        >
          <Pause className="w-4 h-4" />
        </button>

        <div className="text-center">
          <div className="text-[11px] font-bold text-slate-400">
            راند {currentRound} از {totalRounds}
          </div>
          <div className="text-xs font-black text-amber-400">
            نوبت: {activeTeamName}
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-black">
          {activeTeamScore} امتیاز
        </div>
      </div>

      {/* Simplified Teams Score Strip with Quick Recent Points Micro-Badges */}
      <div className="grid grid-cols-2 gap-2">
        <div
          className={`p-2 rounded-xl border text-center transition-all ${
            activeTeamIndex === 0
              ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
              : 'bg-white/[0.02] border-white/[0.06] text-slate-400 opacity-70'
          }`}
        >
          <div className="text-[11px] font-bold truncate">{team1Name}</div>
          <div className="text-base font-black text-white">{team1Score}</div>
          {/* Quick Last 3 Points Badges */}
          <div className="flex items-center justify-center gap-1 mt-1 pt-1 border-t border-white/[0.06]">
            <span className="text-[9px] text-slate-400 font-medium">۳ اخیر:</span>
            {team1ScoreHistory.length === 0 ? (
              <span className="text-[9px] text-slate-500">—</span>
            ) : (
              team1ScoreHistory.map((item) => (
                <span
                  key={item.id}
                  title={`${item.wordText}: +${item.points}`}
                  className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                >
                  +{item.points}
                </span>
              ))
            )}
          </div>
        </div>

        <div
          className={`p-2 rounded-xl border text-center transition-all ${
            activeTeamIndex === 1
              ? 'bg-amber-400/10 border-amber-400/50 text-amber-300'
              : 'bg-white/[0.02] border-white/[0.06] text-slate-400 opacity-70'
          }`}
        >
          <div className="text-[11px] font-bold truncate">{team2Name}</div>
          <div className="text-base font-black text-white">{team2Score}</div>
          {/* Quick Last 3 Points Badges */}
          <div className="flex items-center justify-center gap-1 mt-1 pt-1 border-t border-white/[0.06]">
            <span className="text-[9px] text-slate-400 font-medium">۳ اخیر:</span>
            {team2ScoreHistory.length === 0 ? (
              <span className="text-[9px] text-slate-500">—</span>
            ) : (
              team2ScoreHistory.map((item) => (
                <span
                  key={item.id}
                  title={`${item.wordText}: +${item.points}`}
                  className="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                >
                  +{item.points}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Small History Log (Last 3 Points per Team) */}
      <div className="rounded-2xl bg-white/[0.02] border border-white/[0.07] px-3 py-2 space-y-1.5 text-right transition-all">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-300">
            <History className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[11px] font-black">تاریخچه ۳ امتیاز اخیر تیم‌ها</span>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              setIsHistoryExpanded(!isHistoryExpanded);
            }}
            className="flex items-center gap-1 text-[10px] text-amber-300/90 hover:text-amber-300 font-bold px-2 py-0.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] transition-all"
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
            {/* Team 1 Details */}
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="text-[10px] font-bold text-slate-400 truncate pb-1 border-b border-white/[0.04] flex items-center justify-between">
                <span className="text-slate-200 truncate">{team1Name}</span>
                <span className="text-emerald-400 text-[9px] font-mono">
                  {team1ScoreHistory.length}/۳
                </span>
              </div>
              {team1ScoreHistory.length === 0 ? (
                <div className="text-[10px] text-slate-500 py-1.5 text-center">
                  هنوز امتیازی ثبت نشده
                </div>
              ) : (
                <div className="space-y-1">
                  {team1ScoreHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.04]"
                    >
                      <span
                        className="truncate max-w-[80px] text-slate-300 font-medium"
                        title={item.wordText}
                      >
                        {item.wordText}
                      </span>
                      <span className="font-black text-emerald-400 font-mono text-[10px]">
                        +{item.points}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Team 2 Details */}
            <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1">
              <div className="text-[10px] font-bold text-slate-400 truncate pb-1 border-b border-white/[0.04] flex items-center justify-between">
                <span className="text-slate-200 truncate">{team2Name}</span>
                <span className="text-emerald-400 text-[9px] font-mono">
                  {team2ScoreHistory.length}/۳
                </span>
              </div>
              {team2ScoreHistory.length === 0 ? (
                <div className="text-[10px] text-slate-500 py-1.5 text-center">
                  هنوز امتیازی ثبت نشده
                </div>
              ) : (
                <div className="space-y-1">
                  {team2ScoreHistory.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.04]"
                    >
                      <span
                        className="truncate max-w-[80px] text-slate-300 font-medium"
                        title={item.wordText}
                      >
                        {item.wordText}
                      </span>
                      <span className="font-black text-emerald-400 font-mono text-[10px]">
                        +{item.points}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Compact preview line showing both teams' last scores */
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
            <div className="flex items-center gap-1 truncate max-w-[48%]">
              <span className="font-bold text-slate-300 truncate">{team1Name}:</span>
              {team1ScoreHistory.length === 0 ? (
                <span className="text-slate-500">—</span>
              ) : (
                team1ScoreHistory.map((item) => (
                  <span
                    key={item.id}
                    className="font-bold text-emerald-400"
                    title={item.wordText}
                  >
                    +{item.points}
                  </span>
                ))
              )}
            </div>

            <div className="flex items-center gap-1 truncate max-w-[48%] justify-end">
              <span className="font-bold text-slate-300 truncate">{team2Name}:</span>
              {team2ScoreHistory.length === 0 ? (
                <span className="text-slate-500">—</span>
              ) : (
                team2ScoreHistory.map((item) => (
                  <span
                    key={item.id}
                    className="font-bold text-emerald-400"
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

      {/* Secluded Word Card */}
      <GlassCard
        onClick={() => {
          if (!isCardRevealed) {
            soundManager.playPop();
            onToggleReveal();
          }
        }}
        borderColor={isCardRevealed ? 'rgba(245, 158, 11, 0.4)' : 'rgba(255, 255, 255, 0.1)'}
        gradientFrom={
          isCardRevealed
            ? 'rgba(245, 158, 11, 0.08)'
            : 'rgba(255, 255, 255, 0.03)'
        }
        gradientTo="rgba(0, 0, 0, 0.2)"
        className={`p-6 min-h-[200px] flex flex-col items-center justify-center text-center relative transition-all duration-300 ${
          !isCardRevealed ? 'cursor-pointer hover:border-amber-400/40' : ''
        }`}
      >
        {!isCardRevealed ? (
          <div className="flex flex-col items-center justify-center space-y-2.5 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center shadow-lg">
              <Eye className="w-7 h-7" />
            </div>

            <div className="text-lg font-black text-white">
              برای مشاهده کلمه لمس کنید 👈
            </div>

            <p className="text-[11px] text-slate-400">
              تایمر بلافاصله شروع می‌شود
            </p>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between items-center space-y-3 animate-fadeIn">
            <div className="w-full flex items-center justify-between text-xs">
              <span className="px-2 py-0.5 rounded-lg bg-amber-400/15 text-amber-300 font-extrabold border border-amber-400/30">
                +{currentWord?.points || 10} امتیاز
              </span>

              {comboCount > 1 && (
                <span className="px-2 py-0.5 rounded-lg bg-rose-500/20 text-rose-300 font-extrabold border border-rose-500/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-rose-400" />
                  <span>کامبو x{comboCount}</span>
                </span>
              )}
            </div>

            {/* Word Display */}
            <div className="py-2">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-relaxed">
                {currentWord?.text || 'کلمه پانتومیم'}
              </h2>
            </div>

            {/* Hint Box */}
            <div className="w-full pt-1">
              {showHint && currentWord?.hint ? (
                <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-200 text-xs font-bold leading-relaxed animate-fadeIn">
                  💡 راهنمایی: {currentWord.hint}
                </div>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playPop();
                    onToggleHint();
                  }}
                  className="flex items-center justify-center gap-1 text-[11px] text-slate-400 hover:text-amber-300 font-bold mx-auto transition-colors"
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
          size={95}
        />

        <div className="max-w-[200px]">
          <MascotMimeo
            expression={mascotExpression}
            dialogueText={mimeoReaction}
            size={72}
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
          className="h-13 rounded-2xl bg-white/[0.05] hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 font-black text-sm shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none"
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
          className="h-13 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 text-white font-black text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 disabled:opacity-30 disabled:pointer-events-none border border-emerald-400/40"
        >
          <Check className="w-5 h-5 stroke-[2.5]" />
          <span>درست (+امتیاز)</span>
        </button>
      </div>

      {/* Pause Modal Dialog */}
      {showPauseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-xs rounded-2xl bg-[#140D24] border border-white/10 p-5 space-y-3.5 text-center shadow-2xl">
            <h3 className="text-base font-black text-white">
              توقف بازی پانتومیم ⏸️
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              بازی موقتاً متوقف شد. برای ادامه یا خروج انتخاب کنید:
            </p>

            <div className="space-y-2 pt-1">
              <button
                onClick={handleResume}
                className="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>ادامه بازی</span>
              </button>

              <button
                onClick={handleEndEarly}
                className="w-full py-2.5 rounded-xl bg-white/[0.04] text-rose-300 font-bold text-xs border border-rose-500/20 transition-all flex items-center justify-center gap-1.5"
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
