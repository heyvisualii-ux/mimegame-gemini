'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { soundManager } from '@/lib/sound';

export type MimeoExpression = 'HAPPY' | 'CELEBRATING' | 'THINKING' | 'SURPRISED' | 'ENCOURAGING';

interface MascotMimeoProps {
  expression?: MimeoExpression;
  dialogueText?: string | null;
  size?: number;
  onMascotClick?: () => void;
  className?: string;
  showSpeechBubble?: boolean;
}

export const MascotMimeo: React.FC<MascotMimeoProps> = ({
  expression = 'HAPPY',
  dialogueText,
  size = 110,
  onMascotClick,
  className = '',
  showSpeechBubble = true,
}) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const getExpressionData = () => {
    switch (expression) {
      case 'HAPPY':
        return { emoji: '😎', color: '#F59E0B', defaultMsg: 'سلام رفقا! من پانتو هستم؛ آماده‌اید پانتومیم بزنیم؟' };
      case 'CELEBRATING':
        return { emoji: '🏆', color: '#10B981', defaultMsg: 'ایول! حدس طلایی! حرکات دستتون عالی بود!' };
      case 'THINKING':
        return { emoji: '🧐', color: '#F59E0B', defaultMsg: 'دارم یه سوژه درجه یک براتون آماده می‌کنم...' };
      case 'SURPRISED':
        return { emoji: '⏱️', color: '#EF4444', defaultMsg: 'ثانیه‌های آخر نوبته! سریع‌تر نشون بده!' };
      case 'ENCOURAGING':
        return { emoji: '💪', color: '#8B5CF6', defaultMsg: 'فدای سرت رفیق! کلمه بعدی مال خودتونه!' };
    }
  };

  const expData = getExpressionData();
  const currentMsg = dialogueText || expData.defaultMsg;

  const handleClick = () => {
    soundManager.playPop();
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 400);
    if (onMascotClick) {
      onMascotClick();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Refined Minimalist Speech Bubble */}
      {showSpeechBubble && currentMsg && (
        <div
          className="relative mb-3 max-w-[260px] sm:max-w-[300px] px-3.5 py-2 rounded-2xl backdrop-blur-md text-center shadow-lg border transition-all duration-300 animate-fadeIn"
          style={{
            backgroundColor: 'rgba(18, 12, 28, 0.85)',
            borderColor: 'rgba(245, 158, 11, 0.3)',
          }}
        >
          <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-200 leading-relaxed">
            <span className="text-sm">{expData.emoji}</span>
            <span>{currentMsg}</span>
          </div>
          {/* Subtle Pointer Arrow */}
          <div
            className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px]"
            style={{ borderTopColor: 'rgba(245, 158, 11, 0.4)' }}
          />
        </div>
      )}

      {/* Mascot Circle Frame */}
      <div
        onClick={handleClick}
        style={{ width: size, height: size }}
        className={`relative cursor-pointer transition-transform duration-300 ${
          isBouncing ? 'scale-110' : 'hover:scale-105 animate-float'
        }`}
      >
        {/* Soft Ambient Halo */}
        <div
          className="absolute inset-0 rounded-full blur-lg opacity-40 transition-opacity duration-300 pointer-events-none"
          style={{ backgroundColor: expData.color }}
        />

        {/* Character Avatar Container with Sleek Thin Border */}
        <div className="relative w-full h-full rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-amber-400/80 via-amber-200/40 to-white/20 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
            <Image
              src="/pantomix_mascot.jpg"
              alt="PantoMix Mascot"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Minimalist Floating Mood Tag */}
        <div
          className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs shadow-md border border-white/20 bg-slate-900/90"
        >
          {expData.emoji}
        </div>
      </div>
    </div>
  );
};
