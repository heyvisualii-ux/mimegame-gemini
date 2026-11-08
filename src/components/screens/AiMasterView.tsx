'use client';

import React, { useState } from 'react';
import { AiGameRecommendation, Word } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { MascotMimeo } from '../MascotMimeo';
import { soundManager } from '@/lib/sound';
import {
  Sparkles,
  Brain,
  Play,
  ArrowRight,
  PenTool,
  Loader2,
  CheckCircle,
} from 'lucide-react';

interface AiMasterViewProps {
  onStartWithRecommendation: (rec: AiGameRecommendation) => void;
  onCustomWordsGenerated: (words: Word[]) => void;
  onBack: () => void;
}

export const AiMasterView: React.FC<AiMasterViewProps> = ({
  onStartWithRecommendation,
  onCustomWordsGenerated,
  onBack,
}) => {
  const [playerCount, setPlayerCount] = useState(4);
  const [groupType, setGroupType] = useState<'FRIENDS' | 'FAMILY' | 'WORK' | 'KIDS'>('FRIENDS');
  const [mood, setMood] = useState<'FUNNY' | 'COMPETITIVE' | 'ENERGETIC'>('FUNNY');
  const [availableMinutes, setAvailableMinutes] = useState(30);

  const [isLoadingRec, setIsLoadingRec] = useState(false);
  const [recommendation, setRecommendation] = useState<AiGameRecommendation | null>(null);

  const [customTopic, setCustomTopic] = useState('');
  const [isLoadingWords, setIsLoadingWords] = useState(false);
  const [generatedWordsMessage, setGeneratedWordsMessage] = useState<string | null>(null);

  const handleAnalyze = async () => {
    soundManager.playPop();
    setIsLoadingRec(true);
    try {
      const res = await fetch('/api/ai/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          playerCount,
          groupType,
          mood,
          minutes: availableMinutes,
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setRecommendation(data.data);
        soundManager.playSuccess();
      }
    } catch (e) {
      console.error('Failed to analyze group', e);
    } finally {
      setIsLoadingRec(false);
    }
  };

  const handleGenerateWords = async () => {
    if (!customTopic.trim()) return;
    soundManager.playPop();
    setIsLoadingWords(true);
    setGeneratedWordsMessage(null);
    try {
      const res = await fetch('/api/ai/words', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: customTopic,
          count: 5,
          difficulty: 'MEDIUM',
        }),
      });
      const data = await res.json();
      if (data.success && data.data) {
        onCustomWordsGenerated(data.data);
        soundManager.playSuccess();
        setGeneratedWordsMessage(`۵ کلمه اختصاصی هوش مصنوعی برای «${customTopic}» آماده شد!`);
        setCustomTopic('');
      }
    } catch (e) {
      console.error('Failed to generate words', e);
    } finally {
      setIsLoadingWords(false);
    }
  };

  return (
    <div className="space-y-4 pb-24 pt-1 animate-fadeIn max-w-sm mx-auto">
      {/* Header */}
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
          <span>دستیار هوشمند PantoMix AI</span>
          <span>🤖</span>
        </h1>

        <div className="w-14" />
      </div>

      {/* Mascot Intro */}
      <MascotMimeo
        expression={isLoadingRec ? 'THINKING' : 'HAPPY'}
        size={84}
        dialogueText={
          isLoadingRec
            ? 'پانتو در حال تحلیل و آماده‌سازی پیشنهاد اختصاصی دورهمی...'
            : 'تعداد نفرات و جو دورهمی رو انتخاب کنید تا بهترین حالت رو بچینم!'
        }
      />

      {/* Group Parameters */}
      <GlassCard className="p-4 space-y-3 border-white/[0.08]">
        {/* Player Count */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold">تعداد بازیکنان:</span>
            <span className="text-amber-400 font-black">{playerCount} نفر</span>
          </div>
          <input
            type="range"
            min={2}
            max={16}
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="w-full accent-amber-400 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
          />
        </div>

        {/* Group Type */}
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">نوع جمع:</span>
          <div className="grid grid-cols-4 gap-1">
            {[
              { id: 'FRIENDS', label: 'دوستانه' },
              { id: 'FAMILY', label: 'خانواده' },
              { id: 'WORK', label: 'همکاران' },
              { id: 'KIDS', label: 'کودکان' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  soundManager.playPop();
                  setGroupType(g.id as any);
                }}
                className={`py-1.5 rounded-lg text-xs font-bold transition-all border ${
                  groupType === g.id
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black'
                    : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mood */}
        <div className="space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">فضای بازی:</span>
          <div className="grid grid-cols-3 gap-1">
            {[
              { id: 'FUNNY', label: 'خنده‌دار 😂' },
              { id: 'COMPETITIVE', label: 'رقابتی 🔥' },
              { id: 'ENERGETIC', label: 'پرانرژی ⚡' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  soundManager.playPop();
                  setMood(m.id as any);
                }}
                className={`py-1.5 rounded-lg text-[11px] font-bold transition-all border ${
                  mood === m.id
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black'
                    : 'bg-white/[0.02] text-slate-400 border-white/[0.06] hover:bg-white/[0.05]'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={isLoadingRec}
          className="w-full h-11 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 mt-1"
        >
          {isLoadingRec ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>در حال تحلیل با Gemini...</span>
            </>
          ) : (
            <>
              <Brain className="w-4 h-4" />
              <span>تحلیل هوشمند و پیشنهاد بازی</span>
            </>
          )}
        </button>
      </GlassCard>

      {/* AI Recommendation Box */}
      {recommendation && (
        <GlassCard className="p-3.5 space-y-2.5 border-amber-400/40 animate-fadeIn bg-amber-400/[0.03]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-black text-amber-300">پیشنهاد هوش مصنوعی:</h3>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed bg-black/30 p-2.5 rounded-xl border border-white/5">
            {recommendation.mimeoGreeting}
          </p>

          <div className="grid grid-cols-2 gap-1.5 text-[11px]">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-slate-400 block">حالت پیشنهادی:</span>
              <span className="font-bold text-amber-300">{recommendation.recommendedModeTitle}</span>
            </div>
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <span className="text-slate-400 block">تنظیمات:</span>
              <span className="font-bold text-white">{recommendation.targetRounds} راند ({recommendation.roundTimerSeconds} ثانیه)</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              onStartWithRecommendation(recommendation);
            }}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            <span>شروع بازی با این پیشنهاد</span>
          </button>
        </GlassCard>
      )}

      {/* Custom Topic Generator */}
      <GlassCard className="p-3.5 space-y-2.5 border-white/[0.08]">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300">
          <PenTool className="w-3.5 h-3.5 text-amber-400" />
          <span>تولید کلمات اختصاصی با موضوع دلخواه</span>
        </div>

        <div className="flex gap-1.5">
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="مثال: دیالوگ‌های طنز، نوستالژی دهه ۶۰..."
            className="flex-1 px-3 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
          />

          <button
            onClick={handleGenerateWords}
            disabled={!customTopic.trim() || isLoadingWords}
            className="px-3.5 py-2 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold hover:bg-amber-400/25 transition-all disabled:opacity-40 shrink-0"
          >
            {isLoadingWords ? <Loader2 className="w-4 h-4 animate-spin" /> : 'تولید کلمه'}
          </button>
        </div>

        {generatedWordsMessage && (
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5 animate-fadeIn">
            <CheckCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{generatedWordsMessage}</span>
          </div>
        )}
      </GlassCard>
    </div>
  );
};
