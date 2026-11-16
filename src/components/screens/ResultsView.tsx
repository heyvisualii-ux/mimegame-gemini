'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { GlassCard } from '../GlassCard';
import { MascotMimeo } from '../MascotMimeo';
import { CssCelebrationAnimation } from '../CssCelebrationAnimation';
import { soundManager } from '@/lib/sound';
import { Trophy, RotateCcw, Home, Star, Coins, Crown, Sparkles } from 'lucide-react';

interface ResultsViewProps {
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  team1Name,
  team2Name,
  team1Score,
  team2Score,
  onPlayAgain,
  onGoHome,
}) => {
  const [showCelebration, setShowCelebration] = useState(true);
  const isTie = team1Score === team2Score;
  const isTeam1Winner = team1Score > team2Score;
  const winnerName = isTie
    ? 'هر دو تیم (مساوی!) 🎉'
    : isTeam1Winner
    ? team1Name
    : team2Name;

  const earnedXp = (team1Score + team2Score) * 5 + 50;
  const earnedCoins = team1Score + team2Score + 10;

  const triggerCelebration = () => {
    soundManager.playVictory();
    setShowCelebration(false);
    setTimeout(() => {
      setShowCelebration(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0B0D12', '#F59E0B', '#10B981', '#3B82F6'],
        });
      } catch {
        // safe fallback
      }
    }, 50);
  };

  useEffect(() => {
    triggerCelebration();
  }, []);

  return (
    <div className="relative space-y-4 pb-28 pt-3 text-center animate-fadeIn max-w-sm mx-auto">
      {/* Pure CSS Celebration Layer */}
      <CssCelebrationAnimation active={showCelebration} />

      {/* Mascot Celebratory View */}
      <div className="pt-1 relative z-10">
        <MascotMimeo
          expression="CELEBRATING"
          size={105}
          dialogueText={`تبریک میگم! ${winnerName} عالی درخشید! 🏆`}
        />
      </div>

      {/* Winner Banner with CSS Victory Glow Pulse & Shimmer */}
      <div className="relative z-10">
        <GlassCard
          borderColor="rgba(245, 158, 11, 0.45)"
          gradientFrom="#FFFFFF"
          gradientTo="#FFFDF2"
          className="p-5 relative overflow-hidden animate-victory-pulse border-2"
        >
          <div className="flex flex-col items-center justify-center space-y-2 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#F4FF57] text-[#0B0D12] flex items-center justify-center shadow-md animate-trophy-burst border border-slate-900/10">
              <Trophy className="w-7 h-7 stroke-[2.2]" />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-black text-amber-600">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>قهرمان دورهمی PantoMix</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
            </div>

            <h2 className="text-2xl font-black text-[#0B0D12] tracking-tight">
              {winnerName}
            </h2>

            <button
              onClick={() => {
                soundManager.playPop();
                triggerCelebration();
              }}
              className="mt-1 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-800 transition-all active:scale-95"
              title="اجرای مجدد انیمیشن جشن و نورافشانی"
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>شلیک مجدد جشن 🎉</span>
            </button>
          </div>
        </GlassCard>
      </div>

      {/* Score Comparison */}
      <GlassCard className="p-3.5 space-y-2 relative z-10">
        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-1.5">
            {isTeam1Winner && <Crown className="w-4 h-4 text-amber-500" />}
            <span className={`text-xs font-bold ${isTeam1Winner ? 'text-slate-950 font-black' : 'text-slate-600'}`}>
              {team1Name}
            </span>
          </div>
          <span className="text-sm font-black text-slate-950 tabular-nums">{team1Score} امتیاز</span>
        </div>

        <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-1.5">
            {!isTie && !isTeam1Winner && <Crown className="w-4 h-4 text-amber-500" />}
            <span className={`text-xs font-bold ${!isTie && !isTeam1Winner ? 'text-slate-950 font-black' : 'text-slate-600'}`}>
              {team2Name}
            </span>
          </div>
          <span className="text-sm font-black text-slate-950 tabular-nums">{team2Score} امتیاز</span>
        </div>
      </GlassCard>

      {/* Earned Rewards */}
      <div className="flex items-center justify-around py-3 px-4 rounded-2xl bg-white border border-slate-900/[0.06] shadow-sm relative z-10">
        <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 tabular-nums">
          <Star className="w-4 h-4 fill-current text-amber-500" />
          <span>+{earnedXp} XP</span>
        </div>
        <div className="h-4 w-px bg-slate-200" />
        <div className="flex items-center gap-1.5 text-xs font-black text-slate-900 tabular-nums">
          <Coins className="w-4 h-4 text-amber-500" />
          <span>+{earnedCoins} سکه</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2.5 pt-1 relative z-10">
        <button
          onClick={() => {
            soundManager.playPop();
            onPlayAgain();
          }}
          className="h-13 rounded-2xl bg-[#0B0D12] text-white font-black text-xs shadow-md hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-4 h-4" />
          <span>بازی مجدد</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onGoHome();
          }}
          className="h-13 rounded-2xl bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>صفحه اصلی</span>
        </button>
      </div>
    </div>
  );
};
