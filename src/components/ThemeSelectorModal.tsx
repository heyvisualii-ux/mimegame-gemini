'use client';

import React from 'react';
import { UI_THEMES, UiThemeId } from '@/lib/theme';
import { soundManager } from '@/lib/sound';
import { Check, Palette, X, Sparkles } from 'lucide-react';

interface ThemeSelectorModalProps {
  currentThemeId: UiThemeId;
  onSelectTheme: (themeId: UiThemeId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSelectorModal: React.FC<ThemeSelectorModalProps> = ({
  currentThemeId,
  onSelectTheme,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-sm rounded-3xl bg-[#120F1D] border border-white/10 p-5 space-y-4 shadow-2xl relative text-right">
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <h3 className="text-sm font-black text-white">
              انتخاب سبک طراحی (UI/UX)
            </h3>
            <Palette className="w-4 h-4 text-amber-400" />
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          بین ۴ سبک متفاوت دیزاین انتخاب کنید تا ظاهر، رنگ‌ها و فضای بازی بلافاصله تغییر کند:
        </p>

        {/* 4 Theme Cards */}
        <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-0.5">
          {Object.values(UI_THEMES).map((theme) => {
            const isSelected = currentThemeId === theme.id;
            return (
              <div
                key={theme.id}
                onClick={() => {
                  soundManager.playPop();
                  onSelectTheme(theme.id);
                }}
                className={`p-3.5 rounded-2xl cursor-pointer border transition-all duration-200 text-right ${
                  isSelected
                    ? 'border-amber-400 bg-white/[0.08] shadow-lg shadow-amber-500/10 scale-[1.01]'
                    : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-1.5">
                    {/* Color Swatch Dot */}
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white/20"
                      style={{ backgroundColor: theme.primaryAccent }}
                    />
                    <span className="text-xs font-black text-white">{theme.nameFa}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-white/[0.06] text-amber-300 font-bold">
                      {theme.badge}
                    </span>
                    {isSelected && (
                      <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                  {theme.subtitleFa}
                </p>

                {/* Micro Color Bar Preview */}
                <div className="flex items-center gap-1 mt-2.5">
                  <div
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: theme.bgHex, border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                  <div
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: theme.surfaceHex }}
                  />
                  <div
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: theme.primaryAccent }}
                  />
                  <div
                    className="h-1.5 flex-1 rounded-full"
                    style={{ backgroundColor: theme.secondaryAccent }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            soundManager.playPop();
            onClose();
          }}
          className="w-full py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 transition-all"
        >
          تأیید و بازگشت به بازی
        </button>
      </div>
    </div>
  );
};
