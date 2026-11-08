'use client';

import React, { useState } from 'react';
import { Category, GameModeInfo, WordDifficulty } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { soundManager } from '@/lib/sound';
import { ArrowRight, Check, Play, Shuffle } from 'lucide-react';

interface GameSetupViewProps {
  selectedMode: GameModeInfo;
  categories: Category[];
  selectedCategories: string[];
  selectedDifficulty: WordDifficulty;
  onToggleCategory: (catId: string) => void;
  onSelectDifficulty: (diff: WordDifficulty) => void;
  onStartGame: (team1: string, team2: string, rounds: number, duration: number) => void;
  onBack: () => void;
}

const FUN_TEAM_NAMES_1 = [
  'تیم ستاره‌ها 🌟',
  'تیم شاهین‌ها 🦅',
  'تیم بمب خنده 💣',
  'تیم یوزپلنگ‌ها 🐆',
];

const FUN_TEAM_NAMES_2 = [
  'تیم قهرمانان 🏆',
  'تیم سیمرغ‌ها 🦅',
  'تیم صاعقه‌ها ⚡',
  'تیم اژدهایان 🐉',
];

export const GameSetupView: React.FC<GameSetupViewProps> = ({
  selectedMode,
  categories,
  selectedCategories,
  selectedDifficulty,
  onToggleCategory,
  onSelectDifficulty,
  onStartGame,
  onBack,
}) => {
  const [team1Name, setTeam1Name] = useState('تیم ستاره‌ها 🌟');
  const [team2Name, setTeam2Name] = useState('تیم قهرمانان 🏆');
  const [roundsCount, setRoundsCount] = useState(3);
  const [timerSeconds, setTimerSeconds] = useState(90);

  const randomizeTeams = () => {
    soundManager.playPop();
    const r1 = FUN_TEAM_NAMES_1[Math.floor(Math.random() * FUN_TEAM_NAMES_1.length)];
    const r2 = FUN_TEAM_NAMES_2[Math.floor(Math.random() * FUN_TEAM_NAMES_2.length)];
    setTeam1Name(r1);
    setTeam2Name(r2);
  };

  const difficulties: { id: WordDifficulty; label: string; points: number }[] = [
    { id: 'EASY', label: 'ساده', points: 10 },
    { id: 'MEDIUM', label: 'متوسط', points: 20 },
    { id: 'HARD', label: 'سخت', points: 35 },
    { id: 'EXTREME', label: 'فوق‌سخت', points: 50 },
  ];

  return (
    <div className="space-y-4 pb-24 pt-1 animate-fadeIn max-w-sm mx-auto">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
        <button
          onClick={() => {
            soundManager.playPop();
            onBack();
          }}
          className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-bold"
        >
          <ArrowRight className="w-4 h-4 ml-0.5" />
          <span>بازگشت</span>
        </button>

        <h1 className="text-sm font-black text-white flex items-center gap-1.5">
          <span>تنظیمات {selectedMode.titleFa}</span>
          <span className="text-amber-400">PantoMix</span>
        </h1>

        <div className="w-14" />
      </div>

      {/* Team Names */}
      <GlassCard className="p-3.5 space-y-2.5 border-white/[0.08]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">نام تیم‌ها</span>
          <button
            onClick={randomizeTeams}
            className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 font-bold"
          >
            <Shuffle className="w-3 h-3" />
            <span>نام خودکار</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-amber-400 transition-colors"
          />
          <input
            type="text"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs font-bold focus:outline-none focus:border-amber-400 transition-colors"
          />
        </div>
      </GlassCard>

      {/* Time & Rounds Compact Row */}
      <GlassCard className="p-3.5 space-y-3 border-white/[0.08]">
        <div>
          <span className="text-xs font-bold text-slate-300 block mb-1.5">زمان هر نوبت</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[60, 90, 120].map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  soundManager.playPop();
                  setTimerSeconds(sec);
                }}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  timerSeconds === sec
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-sm'
                    : 'bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.06]'
                }`}
              >
                {sec} ثانیه
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-bold text-slate-300 block mb-1.5">تعداد راندها</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[2, 3, 5].map((rnd) => (
              <button
                key={rnd}
                onClick={() => {
                  soundManager.playPop();
                  setRoundsCount(rnd);
                }}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  roundsCount === rnd
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-sm'
                    : 'bg-white/[0.03] text-slate-300 border-white/[0.08] hover:bg-white/[0.06]'
                }`}
              >
                {rnd} راند
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Difficulty Selection */}
      <GlassCard className="p-3.5 space-y-2 border-white/[0.08]">
        <span className="text-xs font-bold text-slate-300 block">درجه سختی کلمات</span>
        <div className="grid grid-cols-4 gap-1.5">
          {difficulties.map((diff) => {
            const isSelected = selectedDifficulty === diff.id;
            return (
              <button
                key={diff.id}
                onClick={() => {
                  soundManager.playPop();
                  onSelectDifficulty(diff.id);
                }}
                className={`py-2 px-1 rounded-xl text-center text-xs transition-all border ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-sm'
                    : 'bg-white/[0.03] text-slate-400 border-white/[0.08] hover:bg-white/[0.06]'
                }`}
              >
                <div>{diff.label}</div>
                <div className="text-[10px] opacity-75">{diff.points}p</div>
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* Categories Simple Multi-select */}
      <GlassCard className="p-3.5 space-y-2 border-white/[0.08]">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-300">موضوعات فعال</span>
          <span className="text-amber-400 text-[11px] font-bold">
            {selectedCategories.length} موضوع انتخاب شده
          </span>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          {categories.map((cat) => {
            const isSelected = selectedCategories.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playPop();
                  onToggleCategory(cat.id);
                }}
                className={`p-2 rounded-xl text-right text-xs transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-amber-400/10 border-amber-400/40 text-amber-300 font-bold'
                    : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-300'
                }`}
              >
                <span className="truncate">{cat.titleFa}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* Start Button */}
      <button
        onClick={() => {
          soundManager.playPop();
          onStartGame(team1Name, team2Name, roundsCount, timerSeconds);
        }}
        disabled={selectedCategories.length === 0}
        className="w-full h-13 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-base shadow-lg shadow-amber-400/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-amber-300/60 disabled:opacity-40"
      >
        <Play className="w-5 h-5 fill-current ml-0.5" />
        <span>ورود به بازی</span>
      </button>
    </div>
  );
};
