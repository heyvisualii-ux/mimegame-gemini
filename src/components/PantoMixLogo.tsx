'use client';

import React from 'react';

interface PantoMixLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export const PantoMixLogo: React.FC<PantoMixLogoProps> = ({
  size = 'md',
  showSubtitle = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Sleek Minimalist Geometric Mask/Mix Logo Mark */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        {/* Soft Gold/Rose Ambient Glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-amber-500/30 to-pink-500/20 blur-md pointer-events-none" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-md"
        >
          <defs>
            <linearGradient id="pantomix-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
            <linearGradient id="pantomix-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Logo Rounded Shield / Tile */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="14"
            fill="#180F2A"
            stroke="url(#pantomix-gold)"
            strokeWidth="1.8"
          />

          {/* Stylized Mime Sunglasses Mask */}
          <path
            d="M13 18C13 15.5 15.5 14 18 14H21C23 14 24 16 24 18C24 16 25 14 27 14H30C32.5 14 35 15.5 35 18C35 22 32.5 25 29 25C26 25 24.5 23 24 21C23.5 23 22 25 19 25C15.5 25 13 22 13 18Z"
            fill="url(#pantomix-gold)"
            opacity="0.95"
          />

          {/* Playful Mask Smile Curve */}
          <path
            d="M16 29C19 35 29 35 32 29"
            stroke="url(#pantomix-gold)"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Dynamic "X" for PantoMix corner sparkle */}
          <path
            d="M33 9L37 13M37 9L33 13"
            stroke="url(#pantomix-accent)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col text-right">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white ${textSizes[size]}`}>
            Panto<span className="text-amber-400">Mix</span>
          </span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/15 text-amber-300 font-extrabold border border-amber-400/30">
            پانتومیکس
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[11px] text-slate-400 font-medium -mt-0.5">
            پانتومیم هوشمند و دورهمی
          </span>
        )}
      </div>
    </div>
  );
};
