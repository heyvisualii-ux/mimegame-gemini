'use client';

import React, { useMemo } from 'react';

interface Particle {
  id: number;
  left: number; // percentage 0 - 100
  size: number;
  shape: 'rect' | 'circle' | 'ribbon' | 'diamond';
  color: string;
  duration: number; // seconds
  delay: number; // seconds
  spinDir: number; // 1 or -1
}

const CELEBRATION_COLORS = [
  '#F59E0B', // Amber Gold
  '#FCD34D', // Light Gold
  '#10B981', // Emerald
  '#34D399', // Mint Green
  '#EC4899', // Hot Pink
  '#F43F5E', // Rose
  '#8B5CF6', // Purple
  '#38BDF8', // Sky Blue
  '#FFFFFF', // Sparkling White
];

export const CssCelebrationAnimation: React.FC<{ active?: boolean }> = ({ active = true }) => {
  // Pre-generate 48 stable random particles
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 48 }, (_, i) => {
      const shapes: Particle['shape'][] = ['rect', 'circle', 'ribbon', 'diamond'];
      return {
        id: i,
        left: Math.round(((i * 7 + 13) % 96) + 2), // well-distributed across 2% - 98%
        size: 6 + (i % 6) * 1.5,
        shape: shapes[i % shapes.length],
        color: CELEBRATION_COLORS[i % CELEBRATION_COLORS.length],
        duration: 2.4 + ((i * 17) % 20) / 10, // 2.4s to 4.4s
        delay: ((i * 11) % 25) / 10, // 0s to 2.5s
        spinDir: i % 2 === 0 ? 1 : -1,
      };
    });
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
      {/* Ambient Pulsing Radial Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full bg-gradient-to-tr from-amber-500/20 via-yellow-400/15 to-transparent blur-[80px] animate-halo-pulse" />

      {/* Rotating Ambient Sunburst Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-15 animate-spin-slow">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(251,191,36,0.4)_0%,transparent_70%)]" />
      </div>

      {/* CSS Confetti Raining Elements */}
      {particles.map((p) => {
        const isRibbon = p.shape === 'ribbon';
        const isCircle = p.shape === 'circle';
        const isDiamond = p.shape === 'diamond';

        return (
          <div
            key={p.id}
            className="absolute top-0 opacity-0"
            style={{
              left: `${p.left}%`,
              animationName: 'cssConfettiFall',
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <div
              style={{
                width: isRibbon ? `${p.size * 0.6}px` : `${p.size}px`,
                height: isRibbon ? `${p.size * 1.8}px` : `${p.size}px`,
                backgroundColor: p.color,
                borderRadius: isCircle ? '9999px' : isDiamond ? '2px' : '2px',
                transform: isDiamond ? 'rotate(45deg)' : undefined,
                boxShadow: `0 0 6px ${p.color}80`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
