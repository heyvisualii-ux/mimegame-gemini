'use client';

import React from 'react';
import { Home, Sparkles, MessageSquareText, User, Play } from 'lucide-react';
import { soundManager } from '@/lib/sound';

export type ActiveTab = 'home' | 'ai-master' | 'community' | 'profile';

interface BottomNavProps {
  activeTab: ActiveTab;
  onChangeTab: (tab: ActiveTab) => void;
  onCenterPlayClick: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onChangeTab,
  onCenterPlayClick,
}) => {
  const rightTabs = [
    { id: 'home' as ActiveTab, label: 'خانه', icon: Home },
    { id: 'ai-master' as ActiveTab, label: 'هوش مصنوعی', icon: Sparkles },
  ];

  const leftTabs = [
    { id: 'community' as ActiveTab, label: 'کلمات', icon: MessageSquareText },
    { id: 'profile' as ActiveTab, label: 'پروفایل', icon: User },
  ];

  return (
    <nav
      aria-label="منوی اصلی"
      className="fixed bottom-4 left-0 right-0 z-50 px-4 pointer-events-none"
    >
      <div className="max-w-sm mx-auto flex items-center justify-center gap-3 pointer-events-auto">
        {/* Right White Capsule Pill (RTL Start) */}
        <div className="flex items-center gap-1 bg-white rounded-full p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-slate-900/[0.06]">
          {rightTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playPop();
                  onChangeTab(tab.id);
                }}
                title={tab.label}
                aria-label={tab.label}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-100 text-[#0B0D12] shadow-inner'
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-[19px] h-[19px]" strokeWidth={isActive ? 2.4 : 2} />
              </button>
            );
          })}
        </div>

        {/* Center Solid Black Circle Primary Action */}
        <button
          onClick={() => {
            soundManager.playPop();
            onCenterPlayClick();
          }}
          title="شروع سریع بازی"
          aria-label="شروع سریع بازی"
          className="w-14 h-14 rounded-full bg-[#0B0D12] hover:bg-slate-800 text-white shadow-[0_14px_30px_rgba(11,13,18,0.28)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shrink-0"
        >
          <Play className="w-5 h-5 fill-current ml-0.5" />
        </button>

        {/* Left White Capsule Pill (RTL End) */}
        <div className="flex items-center gap-1 bg-white rounded-full p-1.5 shadow-[0_10px_30px_rgba(15,23,42,0.1)] border border-slate-900/[0.06]">
          {leftTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundManager.playPop();
                  onChangeTab(tab.id);
                }}
                title={tab.label}
                aria-label={tab.label}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-100 text-[#0B0D12] shadow-inner'
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-[19px] h-[19px]" strokeWidth={isActive ? 2.4 : 2} />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
