'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UserProfile } from '@/types/game';
import { soundManager } from '@/lib/sound';
import { X, Check, Loader2, AlertCircle, User, AtSign, FileText } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSaveProfile: (data: {
    displayName: string;
    username: string;
    bio: string;
    photoURL?: string;
  }) => Promise<void | boolean>;
}

const PRESET_AVATARS = [
  { id: 'google', label: 'حساب گوگل', url: '' },
  { id: 'panto_mascot', label: 'پانتو', url: '/pantomix_mascot.jpg' },
  { id: 'mime_icon', label: 'نقاب طلایی', url: '/mime_app_icon.jpg' },
  { id: 'portrait', label: 'کلاسیک', url: '/mimeo_portrait.jpg' },
];

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [displayName, setDisplayName] = useState(profile.displayName || profile.name || '');
  const [username, setUsername] = useState(profile.username || '');
  const [bio, setBio] = useState(profile.bio || '');
  const [selectedPhotoURL, setSelectedPhotoURL] = useState(profile.photoURL || '');
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playPop();
    setErrorMsg(null);

    const cleanName = displayName.trim();
    const cleanUser = username.trim().toLowerCase();

    if (!cleanName) {
      setErrorMsg('لطفاً نام نمایشی خود را وارد کنید.');
      return;
    }
    if (cleanUser.length < 3) {
      setErrorMsg('نام کاربری باید حداقل ۳ کاراکتر باشد.');
      return;
    }
    if (!/^[a-zA-Z0-9_-]+$/.test(cleanUser)) {
      setErrorMsg('نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد، _ و - باشد.');
      return;
    }

    setIsSaving(true);
    try {
      const result = await onSaveProfile({
        displayName: cleanName,
        username: cleanUser,
        bio: bio.trim(),
        photoURL: selectedPhotoURL || undefined,
      });
      if (result === false) {
        setErrorMsg('خطا در ذخیره تغییرات پروفایل. لطفاً دوباره تلاش کنید.');
        return;
      }
      soundManager.playSuccess();
      onClose();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'خطا در ذخیره تغییرات پروفایل.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-sm rounded-[30px] bg-white border border-slate-200 p-5 space-y-4 shadow-2xl relative text-right">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <button
            onClick={() => {
              soundManager.playPop();
              onClose();
            }}
            disabled={isSaving}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 transition-all flex items-center justify-center disabled:opacity-30"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="text-sm font-black text-slate-950">
            ویرایش اطلاعات پروفایل
          </h3>
        </div>

        {errorMsg && (
          <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span className="leading-relaxed">{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              انتخاب آواتار:
            </label>
            <div className="flex items-center gap-2 justify-center py-1">
              {PRESET_AVATARS.map((av) => {
                const imgSource = av.id === 'google' ? profile.photoURL || '/pantomix_mascot.jpg' : av.url;
                const isSelected =
                  av.id === 'google'
                    ? selectedPhotoURL === profile.photoURL
                    : selectedPhotoURL === av.url;

                return (
                  <button
                    key={av.id}
                    type="button"
                    onClick={() => {
                      soundManager.playPop();
                      setSelectedPhotoURL(av.id === 'google' ? profile.photoURL || '' : av.url);
                    }}
                    className={`relative w-12 h-12 rounded-2xl overflow-hidden p-0.5 border-2 transition-all ${
                      isSelected
                        ? 'border-[#0B0D12] scale-105 shadow-md'
                        : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                    title={av.label}
                  >
                    <div className="w-full h-full rounded-[10px] overflow-hidden relative bg-slate-100">
                      <Image
                        src={imgSource}
                        alt={av.label}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {isSelected && (
                      <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#0B0D12] text-white flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-500" />
              <span>نام نمایشی:</span>
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              maxLength={100}
              required
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-slate-900 focus:outline-none transition-all"
              placeholder="نام یا لقب شما در بازی"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <AtSign className="w-3.5 h-3.5 text-slate-500" />
              <span>نام کاربری (انگلیسی):</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              maxLength={50}
              required
              dir="ltr"
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:border-slate-900 focus:outline-none transition-all text-left"
              placeholder="username_example"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>درباره من (بیوگرافی):</span>
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              maxLength={300}
              rows={2}
              className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-slate-900 focus:outline-none transition-all resize-none"
              placeholder="یک جمله درباره علاقه خود به پانتومیم..."
            />
          </div>

          <div className="pt-2 flex items-center gap-2">
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 py-2.5 rounded-xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>در حال ذخیره...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>ذخیره تغییرات</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                soundManager.playPop();
                onClose();
              }}
              disabled={isSaving}
              className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all"
            >
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
