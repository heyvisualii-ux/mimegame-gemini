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
        return { emoji: '😎', defaultMsg: 'سلام رفقا! من پانتو هستم؛ آماده‌اید پانتومیم بزنیم؟' };
      case 'CELEBRATING':
        return { emoji: '🏆', defaultMsg: 'ایول! حدس طلایی! حرکات دستتون عالی بود!' };
      case 'THINKING':
        return { emoji: '🧐', defaultMsg: 'دارم یه سوژه درجه یک براتون آماده می‌کنم...' };
      case 'SURPRISED':
        return { emoji: '⏱️', defaultMsg: 'ثانیه‌های آخر نوبته! سریع‌تر نشون بده!' };
      case 'ENCOURAGING':
        return { emoji: '💪', defaultMsg: 'فدای سرت رفیق! کلمه بعدی مال خودتونه!' };
    }
  };

  const expData = getExpressionData();
  const currentMsg = dialogueText || expData.defaultMsg;

  const handleClick = () => {
    soundManager.playPop();
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 350);
    if (onMascotClick) {
      onMascotClick();
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* Optional Clean Speech Bubble (Disabled on Home Hero per user request) */}
      {showSpeechBubble && currentMsg && (
        <div className="relative mb-3 max-w-[260px] sm:max-w-[290px] px-4 py-2 rounded-2xl bg-white text-center shadow-[0_10px_28px_rgba(15,23,42,0.08)] border border-slate-900/[0.07] transition-all duration-300 animate-fadeIn">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-800 leading-relaxed">
            <span className="text-sm">{expData.emoji}</span>
            <span>{currentMsg}</span>
          </div>
          <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-r border-b border-slate-900/[0.07]" />
        </div>
      )}

      {/* 3D Sticker Character Portrait */}
      <div
        onClick={handleClick}
        style={{ width: size, height: size }}
        className={`relative cursor-pointer transition-transform duration-300 ${
          isBouncing ? 'scale-105' : 'hover:scale-[1.03] animate-float'
        }`}
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden border-[5px] border-white bg-[#26130B] shadow-[0_18px_40px_rgba(15,23,42,0.18)] relative">
          <Image
            src="/pantomix_mascot.jpg"
            alt="کاراکتر پانتومیکس"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  );
};
