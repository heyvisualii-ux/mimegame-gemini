'use client';

import React from 'react';
import { UserProfile } from '@/types/game';
import { GlassCard } from './GlassCard';
import { Trophy, Coins, Flame, Star } from 'lucide-react';

interface LevelBadgeViewProps {
  profile: UserProfile | null;
  onProfileClick?: () => void;
}

export const LevelBadgeView: React.FC<LevelBadgeViewProps> = ({ profile, onProfileClick }) => {
  const level = profile?.level || 1;
  const xp = profile?.xp || 0;
  const xpNeeded = level * 100;
  const xpPercent = Math.min(100, Math.round((xp / xpNeeded) * 100));
  const coins = profile?.coins || 100;
  const streak = profile?.streak || 1;

  return (
    <GlassCard
      onClick={onProfileClick}
      className="p-3.5 sm:p-4 border-amber-400/30"
      gradientFrom="rgba(255, 202, 40, 0.08)"
      gradientTo="rgba(236, 64, 122, 0.04)"
    >
      <div className="flex items-center justify-between gap-3">
        {/* Level Emblem */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-slate-950 flex flex-col items-center justify-center">
              <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">سطح</span>
              <span className="text-base font-extrabold text-amber-400 -mt-0.5">{level}</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-bold text-white">{profile?.name || 'استاد پانتومیم'}</span>
              <span className="text-xs px-1.5 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/40 font-semibold">
                VIP 👑
              </span>
            </div>

            {/* XP Progress Bar */}
            <div className="w-28 sm:w-36 mt-1.5">
              <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                <span>پیشرفت XP</span>
                <span className="text-amber-300 font-bold">{xp}/{xpNeeded}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden border border-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-pink-500 transition-all duration-500"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coins and Streak Badges */}
        <div className="flex items-center gap-2">
          {/* Coins Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-400/30">
            <Coins className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-extrabold text-amber-300">{coins}</span>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-orange-500/10 border border-orange-400/30">
            <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
            <span className="text-xs font-extrabold text-orange-300">{streak} روز</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
