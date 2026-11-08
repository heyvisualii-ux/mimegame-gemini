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
  borderColor = 'rgba(255, 255, 255, 0.12)',
  gradientFrom = 'rgba(255, 255, 255, 0.05)',
  gradientTo = 'rgba(255, 255, 255, 0.02)',
  glow = false,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        borderColor: borderColor,
        backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
      className={`relative backdrop-blur-xl border rounded-3xl p-4 sm:p-5 transition-all duration-300 ${
        onClick
          ? 'cursor-pointer hover:scale-[1.015] active:scale-[0.99] hover:border-amber-400/50 shadow-lg hover:shadow-amber-500/10'
          : ''
      } ${glow ? 'shadow-2xl shadow-purple-900/30' : 'shadow-md'} ${className}`}
    >
      {children}
    </div>
  );
};
