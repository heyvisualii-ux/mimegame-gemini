'use client';

import React, { useState } from 'react';
import { useOnlineStatus, usePWAInstall } from '@/hooks/usePWAInstall';
import { soundManager } from '@/lib/sound';
import {
  Smartphone,
  Download,
  X,
  Copy,
  Check,
  ExternalLink,
  WifiOff,
} from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'compact' | 'card';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'compact',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);

  // Suppress button when already launched in standalone app mode
  if (isInstalled) {
    return null;
  }

  const appUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'https://ais-pre-qpkc6eg4xxlrsa73euy5of-651613534226.europe-west2.run.app';

  const handleActionClick = async () => {
    soundManager.playPop();
    if (isInstallable) {
      const accepted = await install();
      if (!accepted) {
        setShowGuideModal(true);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  const handleCopyUrl = () => {
    soundManager.playPop();
    navigator.clipboard.writeText(appUrl).catch(() => {});
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2000);
  };

  return (
    <>
      {variant === 'compact' ? (
        <button
          onClick={handleActionClick}
          title="نصب روی گوشی اندروید"
          aria-label="نصب روی گوشی اندروید"
          className="h-10 px-3 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.07)] border border-slate-900/[0.06] flex items-center gap-1.5 text-slate-900 hover:bg-slate-50 transition-all text-xs font-black"
        >
          <Download className="w-3.5 h-3.5 text-slate-900" />
          <span>نصب اپ</span>
        </button>
      ) : (
        <div className="bg-white rounded-[26px] border border-slate-900/[0.07] shadow-[0_8px_28px_rgba(15,23,42,0.05)] p-4 flex items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#F4FF57] border border-slate-900/10 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 text-[#0B0D12]" />
            </div>
            <div>
              <div className="text-xs font-black text-slate-900">
                نصب نسخه اندروید (تمام‌صفحه)
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                نصب مستقیم روی گوشی با آیکون اختصاصی بدون نوار مرورگر
              </div>
            </div>
          </div>

          <button
            onClick={handleActionClick}
            className="px-3.5 py-2.5 rounded-xl bg-[#0B0D12] hover:bg-slate-800 text-white text-xs font-black shadow-md transition-all flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>نصب</span>
          </button>
        </div>
      )}

      {showGuideModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="w-full max-w-sm bg-white rounded-[28px] border border-slate-900/[0.08] shadow-2xl p-5 space-y-4 text-right">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-2xl bg-[#F4FF57] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-[#0B0D12]" />
                </div>
                <h3 className="text-sm font-black text-slate-950">
                  {isIOS ? 'نصب پانتومیکس روی آیفون' : 'نصب پانتومیکس روی گوشی اندروید'}
                </h3>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                aria-label="بستن"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isIOS ? (
              <div className="space-y-2 text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                <p>۱. لینک برنامه را در مرورگر <strong>Safari</strong> باز کنید.</p>
                <p>۲. دکمه <strong>Share</strong> (مربع با فلش رو به بالا) را بزنید.</p>
                <p>۳. گزینه <strong>Add to Home Screen</strong> را انتخاب کنید.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2 text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                  <div className="font-black text-slate-900 mb-1">
                    روش سریع (نصب مستقیم از Chrome اندروید):
                  </div>
                  <p>۱. لینک زیر را در مرورگر <strong>Chrome</strong> گوشی اندرویدی خود باز کنید.</p>
                  <p>۲. منوی سه نقطه (⋮) بالا سمت راست را بزنید.</p>
                  <p>۳. گزینه <strong>Install app</strong> یا <strong>Add to Home screen</strong> را بزنید تا آیکون پانتومیکس مانند اپ اندروید نصب شود.</p>
                </div>

                <div className="space-y-1.5 text-[11px] text-slate-600 leading-relaxed bg-blue-50/70 p-3.5 rounded-2xl border border-blue-200/70">
                  <div className="font-black text-slate-900 flex items-center gap-1">
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                    <span>ساخت فایل APK نصبی در ۱ دقیقه:</span>
                  </div>
                  <p>
                    اگر حتماً فایل <strong>.apk</strong> می‌خواهید، لینک زیر را در سایت{' '}
                    <span dir="ltr" className="font-mono font-bold text-blue-700">
                      pwabuilder.com
                    </span>{' '}
                    وارد کرده و روی <strong>Package for Stores → Android</strong> کلیک کنید تا فایل APK آماده دانلود ساخته شود.
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-2 border border-slate-200">
                  <span
                    dir="ltr"
                    className="text-[11px] font-mono text-slate-700 truncate flex-1 px-1"
                  >
                    {appUrl}
                  </span>
                  <button
                    onClick={handleCopyUrl}
                    className="px-2.5 py-1.5 rounded-lg bg-[#0B0D12] text-white text-[11px] font-bold flex items-center gap-1 shrink-0"
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#F4FF57]" />
                        <span>کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>کپی لینک</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowGuideModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#0B0D12] hover:bg-slate-800 text-white text-xs font-black transition-all"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-[#0B0D12] px-3.5 py-1.5 text-[11px] font-bold text-white shadow-lg border border-white/10">
      <WifiOff className="w-3.5 h-3.5 text-[#F4FF57]" />
      <span>حالت آفلاین — استفاده از کلمات ذخیره‌شده</span>
    </div>
  );
};
