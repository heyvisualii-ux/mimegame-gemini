'use client';

import React from 'react';
import Image from 'next/image';
import { AuthState, GameModeId, UserProfile } from '@/types/game';
import { GAME_MODES } from '@/data/seedData';
import { MascotMimeo } from '../MascotMimeo';
import { PantoMixLogo } from '../PantoMixLogo';
import { soundManager } from '@/lib/sound';
import { useAuth } from '@/context/AuthContext';
import {
  Play,
  Sparkles,
  SlidersHorizontal,
  Theater,
  Zap,
  Users,
  Brain,
  Coins,
  LogIn,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface HomeScreenViewProps {
  profile: UserProfile | null;
  authState?: AuthState;
  selectedModeId: GameModeId;
  isMuted: boolean;
  onToggleMute: () => void;
  onSelectMode: (modeId: GameModeId) => void;
  onQuickStart: () => void;
  onOpenSetup: () => void;
  onOpenAiMaster: () => void;
  onOpenProfile: () => void;
  onOpenAuthModal?: () => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  profile: propProfile,
  selectedModeId,
  isMuted,
  onToggleMute,
  onSelectMode,
  onQuickStart,
  onOpenSetup,
  onOpenAiMaster,
  onOpenProfile,
  onOpenAuthModal,
}) => {
  const auth = useAuth();
  const profile = propProfile || auth.userProfile;
  const isAuthenticated = auth.authState === 'AUTHENTICATED' && !!auth.currentUser;

  const coreModes = [
    { id: 'CLASSIC' as GameModeId, label: 'کلاسیک', icon: Theater },
    { id: 'SPEED_CHALLENGE' as GameModeId, label: 'سرعتی', icon: Zap },
    { id: 'TEAM_BATTLE' as GameModeId, label: 'نبرد تیم‌ها', icon: Users },
    { id: 'AI_CHALLENGE' as GameModeId, label: 'هوش مصنوعی', icon: Brain },
  ];

  const currentModeInfo = GAME_MODES.find((m) => m.id === selectedModeId) || GAME_MODES[0];

  return (
    <div className="space-y-5 pb-28 pt-3 animate-fadeIn max-w-sm mx-auto">
      {/* Reference-style Clean Minimal Top Bar (Circular Avatar + Coins + Sound) */}
      <div className="flex items-center justify-between px-1">
        {isAuthenticated ? (
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenProfile();
            }}
            className="flex items-center gap-2 pl-3 pr-1.5 py-1.5 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] hover:scale-[1.02] transition-all"
            title="مشاهده حساب کاربری"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={profile?.photoURL || '/pantomix_mascot.jpg'}
                alt="پروفایل کاربر"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="max-w-[90px] truncate text-xs font-extrabold text-slate-900">
              {profile?.displayName || 'پروفایل'}
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              soundManager.playPop();
              if (onOpenAuthModal) {
                onOpenAuthModal();
              } else {
                onOpenProfile();
              }
            }}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] hover:bg-slate-50 transition-all text-xs font-extrabold text-slate-900"
            title="ورود با حساب گوگل"
          >
            <LogIn className="w-3.5 h-3.5 text-blue-600" />
            <span>ورود</span>
          </button>
        )}

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              soundManager.playPop();
              onToggleMute();
            }}
            title={isMuted ? 'فعال‌سازی صدا' : 'قطع صدا'}
            aria-label={isMuted ? 'فعال‌سازی صدا' : 'قطع صدا'}
            className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-all"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-rose-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-slate-800" />
            )}
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onOpenProfile();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] hover:bg-slate-50 transition-all text-xs font-black text-slate-900 tabular-nums"
          >
            <Coins className="w-4 h-4 text-amber-500" />
            <span>{profile?.coins || 100}</span>
          </button>
        </div>
      </div>

      {/* Hero Stage: Bold Typographic Logo Above Character + 3D Sticker + Subtitle */}
      <div className="flex flex-col items-center justify-center pt-2 pb-1 text-center">
        {/* Typographic Logo directly replacing the old message bubble */}
        <PantoMixLogo size="hero" className="relative z-0 -mb-5" />

        {/* Character Sticker Overlapping Lower Baseline of Typographic Logo */}
        <div className="relative z-10">
          <MascotMimeo
            expression="HAPPY"
            size={132}
            showSpeechBubble={false}
          />
        </div>

        {/* Exact Subtitle Text Below Character */}
        <h1 className="mt-4 text-xl font-black text-[#0B0D12] tracking-tight">
          یه پاانتومیکس بزنیم!
        </h1>
      </div>

      {/* Clean White Mode Selector Segment */}
      <div className="grid grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-white/85 backdrop-blur-sm border border-slate-900/[0.06] shadow-[0_6px_20px_rgba(15,23,42,0.05)]">
        {coreModes.map((mode) => {
          const Icon = mode.icon;
          const isSelected = selectedModeId === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => {
                soundManager.playPop();
                onSelectMode(mode.id);
              }}
              className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 whitespace-nowrap ${
                isSelected
                  ? 'bg-[#0B0D12] text-white font-black shadow-md'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/70'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-tight">{mode.label}</span>
            </button>
          );
        })}
      </div>

      {/* Primary Play CTA */}
      <button
        onClick={() => {
          soundManager.playPop();
          onQuickStart();
        }}
        className="w-full h-14 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-base shadow-[0_14px_30px_rgba(11,13,18,0.22)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
      >
        <Play className="w-5 h-5 fill-current ml-0.5" />
        <span>شروع بازی ({currentModeInfo.titleFa})</span>
      </button>

      {/* Reference-Style Numbered Feature Cards Grid (1 & 2) */}
      <div className="grid grid-cols-2 gap-3 pt-1">
        <button
          onClick={() => {
            soundManager.playPop();
            onOpenSetup();
          }}
          className="group relative bg-white rounded-[26px] p-4 text-right shadow-[0_10px_28px_rgba(15,23,42,0.06)] border border-slate-900/[0.06] hover:-translate-y-0.5 transition-all flex flex-col items-start justify-between overflow-hidden"
        >
          <div className="w-full flex items-start justify-between mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F4FF57] to-[#D9F99D] border border-slate-900/[0.06] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <SlidersHorizontal className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-display text-4xl leading-none font-black text-[#6C9BFF]/45 select-none">
              ۱
            </span>
          </div>
          <div>
            <div className="text-sm font-black text-slate-900">تنظیمات تیم و زمان</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
              انتخاب راند، سختی و نام تیم‌ها
            </div>
          </div>
        </button>

        <button
          onClick={() => {
            soundManager.playPop();
            onOpenAiMaster();
          }}
          className="group relative bg-white rounded-[26px] p-4 text-right shadow-[0_10px_28px_rgba(15,23,42,0.06)] border border-slate-900/[0.06] hover:-translate-y-0.5 transition-all flex flex-col items-start justify-between overflow-hidden"
        >
          <div className="w-full flex items-start justify-between mb-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#89B8FF] to-[#C2DCFF] border border-slate-900/[0.06] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-display text-4xl leading-none font-black text-[#6C9BFF]/45 select-none">
              ۲
            </span>
          </div>
          <div>
            <div className="text-sm font-black text-slate-900">پیشنهاد هوش مصنوعی</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
              ساخت کلمات و چالش هوشمند
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
