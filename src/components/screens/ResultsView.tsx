'use client';

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GlassCard } from '../GlassCard';
import { MascotMimeo } from '../MascotMimeo';
import { soundManager } from '@/lib/sound';
import { Trophy, RotateCcw, Home, Star, Coins, Crown } from 'lucide-react';

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
  const isTie = team1Score === team2Score;
  const isTeam1Winner = team1Score > team2Score;
  const winnerName = isTie
    ? 'هر دو تیم (مساوی!) 🎉'
    : isTeam1Winner
    ? team1Name
    : team2Name;

  const earnedXp = (team1Score + team2Score) * 5 + 50;
  const earnedCoins = team1Score + team2Score + 10;

  useEffect(() => {
    soundManager.playVictory();
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#10B981', '#8B5CF6', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }
  }, []);

  return (
    <div className="space-y-4 pb-20 pt-1 text-center animate-fadeIn max-w-sm mx-auto">
      {/* Mascot Celebratory View */}
      <div className="pt-1">
        <MascotMimeo
          expression="CELEBRATING"
          size={100}
          dialogueText={`تبریک میگم! بازی فوق‌العاده‌ای بود! ${winnerName} عالی درخشید! 🏆`}
        />
      </div>

      {/* Winner Banner */}
      <GlassCard
        borderColor="rgba(245, 158, 11, 0.4)"
        gradientFrom="rgba(245, 158, 11, 0.12)"
        gradientTo="rgba(0, 0, 0, 0.2)"
        glow={true}
        className="p-4"
      >
        <div className="flex flex-col items-center justify-center space-y-1.5">
          <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg animate-bounce">
            <Trophy className="w-6 h-6" />
          </div>

          <div className="text-[11px] font-bold text-amber-300">
            برنده مسابقه PantoMix 👑
          </div>

          <h2 className="text-xl font-black text-white">
            {winnerName}
          </h2>
        </div>
      </GlassCard>

      {/* Score Comparison */}
      <GlassCard className="p-3.5 space-y-2 border-white/[0.08]">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-1.5">
            {isTeam1Winner && <Crown className="w-3.5 h-3.5 text-amber-400" />}
            <span className={`text-xs font-bold ${isTeam1Winner ? 'text-amber-300' : 'text-slate-300'}`}>
              {team1Name}
            </span>
          </div>
          <span className="text-sm font-black text-white">{team1Score} امتیاز</span>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
          <div className="flex items-center gap-1.5">
            {!isTie && !isTeam1Winner && <Crown className="w-3.5 h-3.5 text-amber-400" />}
            <span className={`text-xs font-bold ${!isTie && !isTeam1Winner ? 'text-amber-300' : 'text-slate-300'}`}>
              {team2Name}
            </span>
          </div>
          <span className="text-sm font-black text-white">{team2Score} امتیاز</span>
        </div>
      </GlassCard>

      {/* Earned Rewards */}
      <div className="flex items-center justify-around py-2 px-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
          <Star className="w-4 h-4 fill-current text-amber-400" />
          <span>+{earnedXp} XP</span>
        </div>
        <div className="h-4 w-px bg-white/10" />
        <div className="flex items-center gap-1.5 text-xs font-black text-amber-300">
          <Coins className="w-4 h-4 text-amber-400" />
          <span>+{earnedCoins} سکه</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          onClick={() => {
            soundManager.playPop();
            onPlayAgain();
          }}
          className="h-12 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-4 h-4" />
          <span>بازی مجدد</span>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onGoHome();
          }}
          className="h-12 rounded-xl bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:bg-white/[0.08] font-bold text-xs transition-all flex items-center justify-center gap-1.5"
        >
          <Home className="w-4 h-4" />
          <span>صفحه اصلی</span>
        </button>
      </div>
    </div>
  );
};
