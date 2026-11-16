'use client';

import React, { useState } from 'react';
import { AuthState } from '@/types/game';
import { useAuth } from '@/context/AuthContext';
import { soundManager } from '@/lib/sound';
import { X, AlertCircle, ShieldCheck, Sparkles, Loader2, LogIn } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoogleLogin?: () => Promise<void | boolean>;
  authState?: AuthState;
  authError?: string | null;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onGoogleLogin: propOnGoogleLogin,
  authState: propAuthState,
  authError: propAuthError,
}) => {
  const auth = useAuth();
  const authState = propAuthState || auth.authState;
  const authError = propAuthError !== undefined ? propAuthError : auth.authError;
  const onGoogleLogin = propOnGoogleLogin || (async () => { await auth.loginWithGoogle(); });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleLoginClick = async () => {
    soundManager.playPop();
    setIsSubmitting(true);
    try {
      await onGoogleLogin();
      onClose();
    } catch {
      // Error handled by parent auth state
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = authState === 'LOGIN_IN_PROGRESS' || isSubmitting;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-sm rounded-[30px] bg-white border border-slate-200 p-6 space-y-5 shadow-2xl relative text-right">
        <button
          onClick={() => {
            soundManager.playPop();
            onClose();
          }}
          disabled={isLoading}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-all flex items-center justify-center disabled:opacity-30"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-2 pt-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-[#F4FF57] border border-slate-900/10 flex items-center justify-center shadow-sm">
            <LogIn className="w-6 h-6 text-[#0B0D12]" />
          </div>

          <h2 className="text-lg font-black text-slate-950">
            ورود به حساب کاربری PantoMix
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed max-w-[280px] mx-auto">
            با ورود به حساب گوگل، امتیازات، سکه‌ها، آمار مسابقات و رتبه شما در سرور ابری ذخیره می‌شوند.
          </p>
        </div>

        {authError && (
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span className="leading-relaxed">{authError}</span>
          </div>
        )}

        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-700 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>امنیت کامل با احراز هویت اختصاصی Firebase</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            <span>ذخیره خودکار پیشرفت‌ها و جوایز قبلی مهمان</span>
          </div>
        </div>

        <div className="space-y-2.5 pt-1">
          <button
            onClick={handleLoginClick}
            disabled={isLoading}
            className="w-full h-13 rounded-2xl bg-[#0B0D12] hover:bg-slate-800 text-white font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>در حال ورود با گوگل...</span>
              </div>
            ) : (
              <>
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>ادامه با حساب Google</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            disabled={isLoading}
            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 font-bold text-xs transition-all"
          >
            ادامه به عنوان مهمان
          </button>
        </div>
      </div>
    </div>
  );
};
