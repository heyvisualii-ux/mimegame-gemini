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

  const color = isUrgent ? '#F44336' : isWarning ? '#FF9800' : '#4CAF50';

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex items-center justify-center select-none ${
        isUrgent ? 'animate-pulse' : ''
      }`}
    >
      {/* Background Glow */}
      {isUrgent && (
        <div
          className="absolute inset-2 rounded-full blur-lg opacity-40 animate-ping"
          style={{ backgroundColor: color }}
        />
      )}

      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />

        {/* Progress Circle */}
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

      {/* Numerical Countdown Display */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span
          className="text-2xl sm:text-3xl font-extrabold tracking-tight"
          style={{ color }}
        >
          {remainingSeconds}
        </span>
        <span className="text-[10px] font-medium text-slate-300 -mt-1">
          ثانیه
        </span>
      </div>
    </div>
  );
};
