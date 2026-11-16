'use client';

import React, { useState } from 'react';
import { CommunityWord } from '@/types/game';
import { GlassCard } from '../GlassCard';
import { soundManager } from '@/lib/sound';
import { Plus, ThumbsUp, ArrowRight, Search } from 'lucide-react';

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
          انجمن کلمات کاربران
        </h1>

        <div className="w-10" />
      </div>

      {/* Submit Word Card */}
      <GlassCard className="p-4 space-y-3">
        <h2 className="text-sm font-black text-slate-900">
          افزودن کلمه یا سوژه جدید پانتومیم
        </h2>

        <form onSubmit={handleSubmit} className="space-y-2.5">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="عبارت یا سوژه پانتومیم (مثلاً: راننده اسنپ گم شده)..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm font-semibold focus:outline-none focus:border-slate-900 transition-colors"
          />

          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              placeholder="نام شما (اختیاری)..."
              className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:outline-none focus:border-slate-900 transition-colors"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-semibold focus:outline-none focus:border-slate-900 transition-colors"
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
            className="w-full h-11 rounded-xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-40"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>ثبت در انجمن کاربران</span>
          </button>
        </form>

        {submittedFeedback && (
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold text-center animate-fadeIn">
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
          className="w-full pr-10 pl-3.5 py-2.5 rounded-2xl bg-white border border-slate-900/[0.06] shadow-sm text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
        />
        <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
      </div>

      {/* Trending Header */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-black text-slate-900">
          سوژه‌های پیشنهادی کاربران
        </h2>
        <span className="text-xs text-slate-600 font-bold tabular-nums">
          {filteredWords.length} کلمه
        </span>
      </div>

      {/* Community Words List */}
      <div className="space-y-2.5">
        {filteredWords.map((item) => (
          <GlassCard
            key={item.id}
            className="p-3.5 flex items-center justify-between gap-3"
          >
            <div className="flex-1 space-y-1">
              <h3 className="text-sm font-black text-slate-900 leading-relaxed">
                {item.text}
              </h3>
              <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <span>{item.creatorName}</span>
                <span aria-hidden="true">·</span>
                <span>{item.category}</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playPop();
                onUpvote(item.id);
              }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-[#0B0D12] hover:text-white text-slate-900 transition-all shrink-0 tabular-nums"
              title="رای به این کلمه"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              <span className="text-xs font-black">{item.votes}</span>
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
