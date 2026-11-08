'use client';

import React, { useState } from 'react';
import { CommunityWord } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { soundManager } from '@/lib/sound';
import { Plus, ThumbsUp, ArrowRight, Sparkles, Search } from 'lucide-react';

interface CommunityViewProps {
  communityWords: CommunityWord[];
  onSubmitWord: (text: string, category: string, creatorName: string) => void;
  onUpvote: (id: string) => void;
  onBack: () => void;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  communityWords,
  onSubmitWord,
  onUpvote,
  onBack,
}) => {
  const [newText, setNewText] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('funny');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newText.trim()) return;

    soundManager.playSuccess();
    onSubmitWord(
      newText.trim(),
      selectedCategory,
      creatorName.trim() || 'کاربر ناشناس'
    );
    setNewText('');
    setCreatorName('');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 3000);
  };

  const filteredWords = communityWords.filter(
    (w) =>
      w.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.creatorName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4 pb-24 animate-fadeIn">
      {/* Header */}
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

        <h1 className="text-base sm:text-lg font-black text-pink-400 flex items-center gap-1.5">
          <span>انجمن کلمات و پیشنهادات کاربران</span>
          <span>💡</span>
        </h1>

        <div className="w-16" />
      </div>

      {/* Submit Word Card */}
      <GlassCard
        borderColor="rgba(255, 112, 67, 0.45)"
        gradientFrom="rgba(255, 112, 67, 0.2)"
        gradientTo="rgba(230, 74, 25, 0.08)"
        className="p-4 space-y-3"
      >
        <h2 className="text-sm font-extrabold text-orange-400 flex items-center gap-1.5">
          <span>افزودن کلمه یا سوژه جدید پانتومیم</span>
          <span>✍️</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2.5">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="عبارت یا سوژه پانتومیم (مثلاً: راننده اسنپ گم شده در کوچه بن‌بست)..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-orange-400/30 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:border-orange-400 transition-colors"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              placeholder="نام شما (اختیاری)..."
              className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-orange-400/30 text-white text-xs font-semibold focus:outline-none focus:border-orange-400 transition-colors"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-900/80 border border-orange-400/30 text-slate-200 text-xs font-semibold focus:outline-none focus:border-orange-400 transition-colors"
            >
              <option value="funny">خنده‌دار</option>
              <option value="cinema">سینما و تلویزیون</option>
              <option value="jobs">مشاغل</option>
              <option value="animals">حیوانات</option>
              <option value="proverbs">ضرب‌المثل</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={!newText.trim()}
            className="w-full h-11 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-40"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>ثبت در انجمن کاربران</span>
          </button>
        </form>

        {submittedFeedback && (
          <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold text-center animate-fadeIn">
            سوژه پانتومیم شما با موفقیت ثبت شد! 🎉
          </div>
        )}
      </GlassCard>

      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="جستجوی سوژه‌ها و ارسال‌کنندگان..."
          className="w-full pr-9 pl-3.5 py-2.5 rounded-xl bg-slate-900/60 border border-white/10 text-white text-xs placeholder-slate-400 focus:outline-none focus:border-pink-400 transition-colors"
        />
        <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
      </div>

      {/* Trending Header */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-extrabold text-white flex items-center gap-1.5">
          <span>محبوب‌ترین سوژه‌های پیشنهادی کاربران</span>
          <span>🔥</span>
        </h2>
        <span className="text-xs text-pink-300 font-bold">
          {filteredWords.length} کلمه
        </span>
      </div>

      {/* Community Words List */}
      <div className="space-y-2">
        {filteredWords.map((item) => (
          <GlassCard
            key={item.id}
            borderColor="rgba(38, 198, 218, 0.3)"
            gradientFrom="rgba(0, 131, 143, 0.15)"
            gradientTo="rgba(0, 96, 100, 0.05)"
            className="p-3.5 flex items-center justify-between gap-3"
          >
            <div className="flex-1 space-y-1">
              <h3 className="text-sm font-extrabold text-white leading-relaxed">
                {item.text}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-amber-200/80">
                <span>ارسال توسط: {item.creatorName}</span>
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="px-1.5 py-0.2 rounded bg-white/5 border border-white/10 text-[10px]">
                  {item.category}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onUpvote(item.id);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/40 text-amber-300 transition-all hover:scale-105 active:scale-95 shrink-0"
              title="رای به این کلمه"
            >
              <ThumbsUp className="w-4 h-4 fill-current" />
              <span className="text-xs font-black">{item.votes}</span>
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
