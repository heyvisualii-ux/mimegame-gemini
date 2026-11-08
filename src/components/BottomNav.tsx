'use client';

import React from 'react';
import { Home, Sparkles, Users, User, Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '@/lib/sound';

export type ActiveTab = 'home' | 'ai-master' | 'community' | 'profile';

interface BottomNavProps {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  isMuted,
  onToggleMute,
}) => {
  const tabs = [
    { id: 'home' as ActiveTab, label: 'خانه', icon: Home },
    { id: 'ai-master' as ActiveTab, label: 'AI دستیار', icon: Sparkles },
    { id: 'community' as ActiveTab, label: 'کلمات', icon: Users },
    { id: 'profile' as ActiveTab, label: 'پروفایل', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0e081c]/90 border-t border-white/[0.08] px-3 py-1.5 shadow-xl">
      <div className="max-w-sm mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                soundManager.playPop();
                onChangeTab(tab.id);
              }}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive ? 'text-amber-400 font-black' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : ''}`} />
              <span className="text-[10px] mt-0.5 tracking-tight font-bold">
                {tab.label}
              </span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-amber-400 mt-0.5" />
              )}
            </button>
          );
        })}

        {/* Quiet audio toggle */}
        <button
          onClick={onToggleMute}
          title={isMuted ? 'فعال‌سازی صدا' : 'قطع صدا'}
          className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-slate-300" />}
        </button>
      </div>
    </nav>
  );
};
