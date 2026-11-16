'use client';

import React from 'react';

interface AnimatedTimerRingProps {
  remainingSeconds: number;
  totalSeconds: number;
  size?: number;
}

export const AnimatedTimerRing: React.FC<AnimatedTimerRingProps> = ({
  remainingSeconds,
  totalSeconds,
  size = 110,
}) => {
  const strokeWidth = 9;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = totalSeconds > 0 ? remainingSeconds / totalSeconds : 0;
  const strokeDashoffset = circumference - progress * circumference;

  const isUrgent = remainingSeconds <= 10;
  const isWarning = remainingSeconds <= 25 && !isUrgent;

  const color = isUrgent ? '#E11D48' : isWarning ? '#D97706' : '#0B0D12';

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center select-none bg-white rounded-full shadow-[0_8px_24px_rgba(15,23,42,0.08)] border border-slate-900/[0.06] ${
        isUrgent ? 'animate-pulse' : ''
      }`}
    >
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(15, 23, 42, 0.08)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-linear"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span
          className="text-2xl sm:text-3xl font-black tracking-tight tabular-nums"
          style={{ color }}
        >
          {remainingSeconds}
        </span>
        <span className="text-[10px] font-bold text-slate-500 -mt-1">
          ثانیه
        </span>
      </div>
    </div>
  );
};
