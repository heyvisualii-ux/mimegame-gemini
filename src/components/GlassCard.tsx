'use client';

import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  borderColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  onClick,
  borderColor = 'rgba(15, 23, 42, 0.07)',
  gradientFrom = '#ffffff',
  gradientTo = '#ffffff',
  glow = false,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderColor,
        backgroundImage: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})`,
      }}
      className={`relative bg-white border rounded-[26px] p-4 sm:p-5 transition-all duration-200 ${
        onClick
          ? 'cursor-pointer hover:-translate-y-0.5 active:scale-[0.985] shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_14px_34px_rgba(15,23,42,0.1)]'
          : 'shadow-[0_8px_28px_rgba(15,23,42,0.05)]'
      } ${glow ? 'shadow-[0_16px_40px_rgba(15,23,42,0.1)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
