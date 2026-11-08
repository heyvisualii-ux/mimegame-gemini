'use client';

import React from 'react';
import { Achievement, GameSession, UserProfile } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { LevelBadgeView } from '../LevelBadgeView';
import { soundManager } from '@/lib/sound';
import {
  Gamepad2,
  CheckCircle2,
  Trophy,
  Lock,
  ArrowRight,
  History,
  Medal,
} from 'lucide-react';

interface ProfileViewProps {
  profile: UserProfile | null;
  achievements: Achievement[];
  sessions: GameSession[];
  onBack: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile,
  achievements,
  sessions,
  onBack,
}) => {
  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <button
          onClick={() => {
            soundManager.playPop();
            onBack();
          }}
          className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          <ArrowRight className="w-4 h-4 ml-0.5" />
          <span>بازگشت</span>
        </button>

        <h1 className="text-base sm:text-lg font-black text-amber-300 flex items-center gap-1.5">
          <span>پروفایل و دستاوردهای شما</span>
          <span>🏆</span>
        </h1>

        <div className="w-16" />
      </div>

      {/* Profile Header Card */}
      <LevelBadgeView profile={profile} />

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {/* Total Games */}
        <GlassCard
          borderColor="rgba(38, 198, 218, 0.4)"
          gradientFrom="rgba(0, 131, 143, 0.2)"
          gradientTo="rgba(0, 96, 100, 0.08)"
          className="p-3.5 flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center shrink-0">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-300 font-medium">تعداد بازی‌ها</div>
            <div className="text-lg font-black text-white">
              {profile?.totalGamesPlayed || 0}
            </div>
          </div>
        </GlassCard>

        {/* Correct Guesses */}
        <GlassCard
          borderColor="rgba(102, 187, 106, 0.4)"
          gradientFrom="rgba(102, 187, 106, 0.2)"
          gradientTo="rgba(0, 150, 136, 0.08)"
          className="p-3.5 flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] text-slate-300 font-medium">حدس‌های درست</div>
            <div className="text-lg font-black text-white">
              {profile?.totalCorrectGuesses || 0}
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Achievements Gallery */}
      <div className="space-y-2">
        <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5 px-1">
          <span>نشان‌ها و مدال‌های افتخار</span>
          <span>🏅</span>
        </h2>

        <div className="space-y-2">
          {achievements.map((ach) => (
            <GlassCard
              key={ach.id}
              borderColor={ach.isUnlocked ? '#FFCA28' : 'rgba(255, 255, 255, 0.12)'}
              gradientFrom={
                ach.isUnlocked
                  ? 'rgba(255, 202, 40, 0.2)'
                  : 'rgba(255, 255, 255, 0.03)'
              }
              gradientTo={
                ach.isUnlocked
                  ? 'rgba(255, 112, 67, 0.08)'
                  : 'rgba(255, 255, 255, 0.01)'
              }
              className="p-3.5 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${
                    ach.isUnlocked
                      ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-md shadow-amber-400/20'
                      : 'bg-white/5 text-slate-400 border-white/10'
                  }`}
                >
                  {ach.isUnlocked ? (
                    <Trophy className="w-5 h-5" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <h3
                    className={`text-sm font-black ${
                      ach.isUnlocked ? 'text-amber-300' : 'text-slate-300'
                    }`}
                  >
                    {ach.titleFa}
                  </h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {ach.descriptionFa}
                  </p>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-black border border-cyan-400/30 shrink-0">
                +{ach.rewardXp} XP
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Match History */}
      <div className="space-y-2 pt-1">
        <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5 px-1">
          <span>تاریخچه مسابقات اخیر</span>
          <span>📜</span>
        </h2>

        {sessions.length === 0 ? (
          <GlassCard className="p-4 text-center">
            <p className="text-xs text-slate-300">
              هنوز مسابقه‌ای ثبت نشده است. اولین بازی پانتومیم را شروع کنید!
            </p>
          </GlassCard>
        ) : (
          <div className="space-y-2">
            {sessions.slice(0, 5).map((session) => (
              <GlassCard
                key={session.id}
                borderColor="rgba(255, 202, 40, 0.25)"
                className="p-3.5 flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-white">
                    {session.team1Name} ({session.team1Score}) در برابر{' '}
                    {session.team2Name} ({session.team2Score})
                  </div>
                  <div className="text-xs text-amber-300 font-semibold mt-0.5">
                    برنده: {session.winnerTeamName}
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  {new Date(session.dateTimestamp).toLocaleDateString('fa-IR')}
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
