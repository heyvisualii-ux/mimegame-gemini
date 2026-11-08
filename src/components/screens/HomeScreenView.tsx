'use client';

import React, { useState } from 'react';
import { GameModeId, UserProfile } from '@/types/game';
import { GAME_MODES } from '@/data/seedData';
import { GlassCard } from '../GlassCard';
import { MascotMimeo } from '../MascotMimeo';
import { PantoMixLogo } from '../PantoMixLogo';
import { soundManager } from '@/lib/sound';
import {
  Play,
  Sparkles,
  SlidersHorizontal,
  Theater,
  Zap,
  Users,
  Brain,
  Coins,
  ChevronLeft,
} from 'lucide-react';

interface HomeScreenViewProps {
  profile: UserProfile | null;
  selectedModeId: GameModeId;
  onSelectMode: (modeId: GameModeId) => void;
  onQuickStart: () => void;
  onOpenSetup: () => void;
  onOpenAiMaster: () => void;
  onOpenProfile: () => void;
}

export const HomeScreenView: React.FC<HomeScreenViewProps> = ({
  profile,
  selectedModeId,
  onSelectMode,
  onQuickStart,
  onOpenSetup,
  onOpenAiMaster,
  onOpenProfile,
}) => {
  const [dialogueIdx, setDialogueIdx] = useState(0);

  const pantoMessages = [
    'سلام رفقا! من «پانتو» هستم؛ امشب پانتومیم با منه! 😎',
    'روی من بزن تا بهت انرژی بدم! کی امشب قهرمان میشه؟ 🏆',
    'یادت نره: لب زدن ممنوعه، فقط زبان بدن و خلاقیت! 🎭',
    'دوست داری سوژه‌ها رو هوش مصنوعی برات بسازه؟ سر بزن به AI Master! 🤖',
  ];

  const coreModes = [
    { id: 'CLASSIC' as GameModeId, label: 'کلاسیک', icon: Theater, desc: 'پانتومیم سنتی نوبتی' },
    { id: 'SPEED_CHALLENGE' as GameModeId, label: 'سرعتی', icon: Zap, desc: 'حداکثر حدس در زمان کم' },
    { id: 'TEAM_BATTLE' as GameModeId, label: 'نبرد تیم‌ها', icon: Users, desc: 'کل‌کل ۲ تیم در جمع' },
    { id: 'AI_CHALLENGE' as GameModeId, label: 'هوش مصنوعی', icon: Brain, desc: 'سوژه‌های هوشمند' },
  ];

  const currentModeInfo = GAME_MODES.find((m) => m.id === selectedModeId) || GAME_MODES[0];

  return (
    <div className="space-y-6 pb-24 pt-2 animate-fadeIn max-w-sm mx-auto">
      {/* Secluded Minimalist Top Navigation Header */}
      <div className="flex items-center justify-between px-1">
        <PantoMixLogo size="md" showSubtitle={false} />

        <button
          onClick={() => {
            soundManager.playPop();
            onOpenProfile();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-amber-400/30 transition-all text-xs font-bold text-slate-300 hover:text-white"
        >
          <Coins className="w-3.5 h-3.5 text-amber-400" />
          <span>{profile?.coins || 100}</span>
          <span className="text-slate-500">•</span>
          <span className="text-[11px] text-amber-300 font-bold">سطح {profile?.level || 1}</span>
        </button>
      </div>

      {/* Hero Character Stage (Secluded, Calmer, Focused) */}
      <div className="flex flex-col items-center justify-center py-3 text-center space-y-3">
        <MascotMimeo
          expression="HAPPY"
          size={115}
          dialogueText={pantoMessages[dialogueIdx % pantoMessages.length]}
          onMascotClick={() => {
            setDialogueIdx((prev) => prev + 1);
          }}
        />

        <div className="space-y-1">
          <h1 className="text-2xl font-black text-white tracking-tight">
            دورهمی هوشمند با <span className="text-amber-400">PantoMix</span>
          </h1>
          <p className="text-xs text-slate-400 font-medium">
            ساده، سریع و بدون پیچیدگی با یک لمس شروع کنید
          </p>
        </div>
      </div>

      {/* Simplified, Flexible Mode Selector (Zero Clutter) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1 text-xs">
          <span className="text-slate-400 font-semibold">حالت مسابقه:</span>
          <span className="text-amber-400 font-bold">{currentModeInfo.titleFa}</span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
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
                className={`py-2 px-1 rounded-xl flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-[1.02]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-tight">{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Actions: Clean & Focused Primary CTA */}
      <div className="space-y-2.5 pt-1">
        <button
          onClick={() => {
            soundManager.playPop();
            onQuickStart();
          }}
          className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black text-base shadow-lg shadow-amber-400/20 hover:shadow-amber-400/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 border border-amber-300/50"
        >
          <Play className="w-5 h-5 fill-current ml-0.5" />
          <span>شروع بازی ({currentModeInfo.titleFa})</span>
        </button>

        {/* Secondary Flexible Controls Row */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              soundManager.playPop();
              onOpenSetup();
            }}
            className="py-3 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>تنظیمات تیم و زمان</span>
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onOpenAiMaster();
            }}
            className="py-3 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-amber-400/30 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>پیشنهاد هوش مصنوعی</span>
          </button>
        </div>
      </div>

      {/* Minimal Status Strip */}
      <GlassCard
        className="p-3 border-white/[0.06] text-center"
        gradientFrom="rgba(255, 255, 255, 0.02)"
        gradientTo="rgba(255, 255, 255, 0.01)"
      >
        <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
          <span>💡 نکته:</span>
          <span>{currentModeInfo.descriptionFa}</span>
        </p>
      </GlassCard>
    </div>
  );
};
