'use client';

import React, { useState } from 'react';
import { AiGameRecommendation, Word } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { MascotMimeo } from '../MascotMimeo';
import { soundManager } from '@/lib/sound';
import { requestAiRecommendation, requestAiWords } from '@/lib/aiClient';
import {
  Sparkles,
  Brain,
  Play,
  ArrowRight,
  PenTool,
  Loader2,
  CheckCircle,
  AlertCircle,
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
  const [availableMinutes] = useState(30);

  const [isLoadingRec, setIsLoadingRec] = useState(false);
  const [recommendation, setRecommendation] = useState<AiGameRecommendation | null>(null);
  const [recError, setRecError] = useState<string | null>(null);

  const [customTopic, setCustomTopic] = useState('');
  const [isLoadingWords, setIsLoadingWords] = useState(false);
  const [generatedWordsMessage, setGeneratedWordsMessage] = useState<string | null>(null);
  const [wordsError, setWordsError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    soundManager.playPop();
    setIsLoadingRec(true);
    setRecError(null);
    try {
      const data = await requestAiRecommendation({
        playerCount,
        groupType,
        mood,
        minutes: availableMinutes,
      });
      setRecommendation(data);
      soundManager.playSuccess();
    } catch (e) {
      const msg =
        e instanceof Error
          ? e.message
          : 'خطا در تحلیل هوشمند دورهمی. لطفاً دوباره تلاش کنید.';
      setRecError(msg);
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
    setWordsError(null);
    try {
      const words = await requestAiWords({
        topic: customTopic.trim(),
        count: 5,
        difficulty: 'MEDIUM',
      });
      onCustomWordsGenerated(words);
      soundManager.playSuccess();
      setGeneratedWordsMessage(`۵ کلمه اختصاصی هوش مصنوعی برای «${customTopic.trim()}» آماده شد!`);
      setCustomTopic('');
    } catch (e) {
      const msg =
        e instanceof Error
          ? e.message
          : 'خطا در تولید کلمات اختصاصی. لطفاً دوباره تلاش کنید.';
      setWordsError(msg);
      console.error('Failed to generate words', e);
    } finally {
      setIsLoadingWords(false);
    }
  };

  return (
    <div className="space-y-4 pb-28 pt-3 animate-fadeIn max-w-sm mx-auto">
      {/* Header */}
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
          دستیار هوشمند PantoMix
        </h1>

        <div className="w-10" />
      </div>

      {/* Mascot Intro */}
      <MascotMimeo
        expression={isLoadingRec ? 'THINKING' : 'HAPPY'}
        size={88}
        dialogueText={
          isLoadingRec
            ? 'پانتو در حال تحلیل و آماده‌سازی پیشنهاد اختصاصی دورهمی...'
            : 'تعداد نفرات و جو دورهمی رو انتخاب کنید تا بهترین حالت رو بچینم!'
        }
      />

      {/* Group Parameters */}
      <GlassCard className="p-4 space-y-3.5">
        {/* Player Count */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-700 font-bold">تعداد بازیکنان:</span>
            <span className="text-[#0B0D12] font-black tabular-nums">{playerCount} نفر</span>
          </div>
          <input
            type="range"
            min={2}
            max={16}
            value={playerCount}
            onChange={(e) => setPlayerCount(Number(e.target.value))}
            className="w-full accent-[#0B0D12] h-1.5 bg-slate-200 rounded-lg cursor-pointer"
          />
        </div>

        {/* Group Type */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-700 font-bold block">نوع جمع:</span>
          <div className="grid grid-cols-4 gap-1.5">
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
                  setGroupType(g.id as 'FRIENDS' | 'FAMILY' | 'WORK' | 'KIDS');
                }}
                className={`py-2 rounded-xl text-xs font-bold transition-all ${
                  groupType === g.id
                    ? 'bg-[#0B0D12] text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mood */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-700 font-bold block">فضای بازی:</span>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'FUNNY', label: 'خنده‌دار 😂' },
              { id: 'COMPETITIVE', label: 'رقابتی 🔥' },
              { id: 'ENERGETIC', label: 'پرانرژی ⚡' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  soundManager.playPop();
                  setMood(m.id as 'FUNNY' | 'COMPETITIVE' | 'ENERGETIC');
                }}
                className={`py-2 rounded-xl text-[11px] font-bold transition-all ${
                  mood === m.id
                    ? 'bg-[#0B0D12] text-white font-black shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
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
          className="w-full h-12 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 mt-1"
        >
          {isLoadingRec ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>در حال تحلیل با هوش مصنوعی...</span>
            </>
          ) : (
            <>
              <Brain className="w-4 h-4 text-[#D9FF54]" />
              <span>تحلیل هوشمند و پیشنهاد بازی</span>
            </>
          )}
        </button>

        {recError && (
          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-between gap-2 animate-fadeIn">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{recError}</span>
            </div>
            <button
              onClick={handleAnalyze}
              className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-black shrink-0"
            >
              تلاش مجدد
            </button>
          </div>
        )}
      </GlassCard>

      {/* AI Recommendation Box */}
      {recommendation && (
        <GlassCard className="p-4 space-y-3 border-slate-900/15 animate-fadeIn">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <h3 className="text-xs font-black text-slate-900">پیشنهاد هوش مصنوعی:</h3>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
            {recommendation.mimeoGreeting}
          </p>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 block">حالت پیشنهادی:</span>
              <span className="font-black text-slate-900">{recommendation.recommendedModeTitle}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 block">تنظیمات:</span>
              <span className="font-black text-slate-900 tabular-nums">
                {recommendation.targetRounds} راند ({recommendation.roundTimerSeconds} ثانیه)
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              soundManager.playPop();
              onStartWithRecommendation(recommendation);
            }}
            className="w-full h-12 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            <span>شروع بازی با این پیشنهاد</span>
          </button>
        </GlassCard>
      )}

      {/* Custom Topic Generator */}
      <GlassCard className="p-4 space-y-2.5">
        <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800">
          <PenTool className="w-3.5 h-3.5 text-blue-600" />
          <span>تولید کلمات اختصاصی با موضوع دلخواه</span>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="مثال: دیالوگ‌های طنز، نوستالژی دهه ۶۰..."
            className="flex-1 px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-slate-900 transition-colors"
          />

          <button
            onClick={handleGenerateWords}
            disabled={!customTopic.trim() || isLoadingWords}
            className="px-4 py-2 rounded-xl bg-[#0B0D12] text-white text-xs font-bold hover:bg-slate-800 transition-all disabled:opacity-40 shrink-0"
          >
            {isLoadingWords ? <Loader2 className="w-4 h-4 animate-spin" /> : 'تولید کلمه'}
          </button>
        </div>

        {generatedWordsMessage && (
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 animate-fadeIn">
            <CheckCircle className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
            <span>{generatedWordsMessage}</span>
          </div>
        )}

        {wordsError && (
          <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-between gap-2 animate-fadeIn">
            <div className="flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{wordsError}</span>
            </div>
            <button
              onClick={handleGenerateWords}
              className="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[11px] font-black shrink-0"
            >
              تلاش مجدد
            </button>
          </div>
        )}
      </GlassCard>
    </div>
  );
};
