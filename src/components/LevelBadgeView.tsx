'use client';

import React from 'react';
import { UserProfile } from '@/types/game';
import { GlassCard } from './GlassCard';
import { Coins, Flame } from 'lucide-react';

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
    <GlassCard onClick={onProfileClick} className="p-4">
      <div className="flex items-center justify-between gap-3">
        {/* Level Emblem */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#0B0D12] text-[#F4FF57] flex flex-col items-center justify-center shadow-md shrink-0">
            <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">سطح</span>
            <span className="text-base font-black -mt-0.5 tabular-nums">{level}</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black text-slate-900">
                {profile?.displayName || profile?.name || 'استاد پانتومیم'}
              </span>
            </div>

            {/* XP Progress Bar */}
            <div className="w-28 sm:w-36 mt-1.5">
              <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                <span>پیشرفت XP</span>
                <span className="text-slate-900 font-bold tabular-nums">{xp}/{xpNeeded}</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0B0D12] to-blue-600 transition-all duration-500"
                  style={{ width: `${xpPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coins and Streak */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-50 border border-amber-200/60">
            <Coins className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-black text-slate-900 tabular-nums">{coins}</span>
          </div>

          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200/60">
            <Flame className="w-3.5 h-3.5 text-orange-500" />
            <span className="text-xs font-black text-slate-900 tabular-nums">{streak}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};
