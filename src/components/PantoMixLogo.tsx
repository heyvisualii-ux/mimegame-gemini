'use client';

import React from 'react';

interface PantoMixLogoProps {
  size?: 'sm' | 'md' | 'hero';
  className?: string;
}

export const PantoMixLogo: React.FC<PantoMixLogoProps> = ({
  size = 'hero',
  className = '',
}) => {
  if (size === 'hero') {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center select-none pointer-events-none ${className}`}
      >
        <span
          dir="ltr"
          className="font-display font-black uppercase tracking-[-0.04em] text-[#0B0D12] leading-[0.82] text-[3.4rem] sm:text-[3.85rem] drop-shadow-[0_2px_0_rgba(255,255,255,0.45)]"
        >
          PANTOMIX
        </span>
        <span className="font-display text-lg sm:text-xl font-black tracking-tight text-[#0B0D12]/80 -mt-1">
          پانتومیکس
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      <span
        dir="ltr"
        className={`font-display font-black uppercase tracking-tight text-[#0B0D12] ${
          size === 'sm' ? 'text-lg' : 'text-2xl'
        }`}
      >
        PANTOMIX
      </span>
    </div>
  );
};
