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
    <div className="space-y-4 pb-28 pt-3 animate-fadeIn max-w-sm mx-auto">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-1">
        <button
          onClick={() => {
            soundManager.playPop();
            onBack();
          }}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] hover:bg-slate-50 text-slate-900 transition-all flex items-center justify-center"
          aria-label="بازگشت"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        <h1 className="text-lg font-black text-[#0B0D12]">
          تنظیمات {selectedMode.titleFa}
        </h1>

        <div className="w-10" />
      </div>

      {/* Team Names */}
      <GlassCard className="p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-slate-800">نام تیم‌ها</span>
          <button
            onClick={randomizeTeams}
            className="flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-700 font-bold"
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
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-900 transition-colors"
          />
          <input
            type="text"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:outline-none focus:border-slate-900 transition-colors"
          />
        </div>
      </GlassCard>

      {/* Time & Rounds Compact Row */}
      <GlassCard className="p-4 space-y-3">
        <div>
          <span className="text-xs font-extrabold text-slate-800 block mb-1.5">زمان هر نوبت</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[60, 90, 120].map((sec) => (
              <button
                key={sec}
                onClick={() => {
                  soundManager.playPop();
                  setTimerSeconds(sec);
                }}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  timerSeconds === sec
                    ? 'bg-[#0B0D12] text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {sec} ثانیه
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-extrabold text-slate-800 block mb-1.5">تعداد راندها</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[2, 3, 5].map((rnd) => (
              <button
                key={rnd}
                onClick={() => {
                  soundManager.playPop();
                  setRoundsCount(rnd);
                }}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  roundsCount === rnd
                    ? 'bg-[#0B0D12] text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {rnd} راند
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* Difficulty Selection */}
      <GlassCard className="p-4 space-y-2">
        <span className="text-xs font-extrabold text-slate-800 block">درجه سختی کلمات</span>
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
                className={`py-2 px-1 rounded-xl text-center text-xs transition-all ${
                  isSelected
                    ? 'bg-[#0B0D12] text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                <div>{diff.label}</div>
                <div className="text-[10px] opacity-75 tabular-nums">{diff.points}p</div>
              </button>
            );
          })}
        </div>
      </GlassCard>

      {/* Categories Multi-select */}
      <GlassCard className="p-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-extrabold text-slate-800">موضوعات فعال</span>
          <span className="text-slate-500 text-[11px] font-bold">
            {selectedCategories.length} موضوع
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
                className={`p-2.5 rounded-xl text-right text-xs transition-all border flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#F4FF57]/55 border-slate-900/20 text-slate-950 font-black'
                    : 'bg-slate-50 border-slate-200/80 text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="truncate">{cat.titleFa}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-slate-900 shrink-0" />}
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
        className="w-full h-14 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-base shadow-[0_14px_30px_rgba(11,13,18,0.22)] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-40"
      >
        <Play className="w-5 h-5 fill-current ml-0.5" />
        <span>ورود به بازی</span>
      </button>
    </div>
  );
};
