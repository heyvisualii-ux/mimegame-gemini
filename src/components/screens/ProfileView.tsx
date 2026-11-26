'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Achievement, AuthState, GameSession, UserProfile } from '@/types/game';
import { useAuth } from '@/context/AuthContext';
import { GlassCard } from '../GlassCard';
import { LevelBadgeView } from '../LevelBadgeView';
import { EditProfileModal } from '../EditProfileModal';
import { AuthModal } from '../AuthModal';
import { PWAInstallButton } from '../PWAInstallButton';
import { soundManager } from '@/lib/sound';
import { isCapacitorNative } from '@/lib/capacitor';
import { monetizationService } from '@/lib/monetization';
import {
  Trophy,
  Lock,
  ArrowRight,
  LogOut,
  LogIn,
  Edit3,
  Mail,
  ShieldCheck,
  TrendingUp,
  Award,
  Clock,
  Copy,
  Check,
  Crown,
} from 'lucide-react';

interface ProfileViewProps {
  profile?: UserProfile | null;
  achievements?: Achievement[];
  sessions?: GameSession[];
  authState?: AuthState;
  authError?: string | null;
  onGoogleLogin?: () => Promise<void | boolean>;
  onLogout?: () => Promise<void>;
  onUpdateProfile?: (data: {
    displayName: string;
    username: string;
    bio: string;
    photoURL?: string;
  }) => Promise<void | boolean>;
  onBack: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  profile: propProfile,
  achievements = [],
  sessions = [],
  authState: propAuthState,
  authError: propAuthError,
  onGoogleLogin: propOnGoogleLogin,
  onLogout: propOnLogout,
  onUpdateProfile: propOnUpdateProfile,
  onBack,
}) => {
  const auth = useAuth();
  const profile = propProfile !== undefined ? propProfile : auth.userProfile;
  const authState = propAuthState || auth.authState;
  const authError = propAuthError !== undefined ? propAuthError : auth.authError;
  const onGoogleLogin = propOnGoogleLogin || auth.loginWithGoogle;
  const onLogout = propOnLogout || auth.logout;
  const onUpdateProfile = propOnUpdateProfile || auth.updateProfileData;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [copiedUid, setCopiedUid] = useState(false);
  const [isNativeAndroid, setIsNativeAndroid] = useState(false);

  useEffect(() => {
    setIsNativeAndroid(isCapacitorNative());
  }, []);

  const isAuthenticated = authState === 'AUTHENTICATED' && !!profile?.uid;
  const avatarUrl = profile?.photoURL || '/pantomix_mascot.jpg';

  const handleCopyUid = () => {
    if (profile?.uid) {
      soundManager.playPop();
      navigator.clipboard.writeText(profile.uid);
      setCopiedUid(true);
      setTimeout(() => setCopiedUid(false), 2000);
    }
  };

  const handleLogoutClick = async () => {
    soundManager.playPop();
    await onLogout();
  };

  return (
    <div className="space-y-5 pb-28 pt-3 animate-fadeIn max-w-sm mx-auto">
      {/* Top Bar modeled on Reference Middle Screen (Circular Back, Centered Title, Circular Edit) */}
      <div className="flex items-center justify-between px-1">
        <button
          onClick={() => {
            soundManager.playPop();
            onBack();
          }}
          className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.08)] border border-slate-900/[0.06] hover:bg-slate-50 text-slate-900 transition-all flex items-center justify-center"
          aria-label="بازگشت"
        >
          <ArrowRight className="w-4 h-4" />
        </button>

        <h1 className="text-sm font-black text-slate-900">
          پروفایل و حساب کاربری
        </h1>

        {isAuthenticated ? (
          <button
            onClick={() => {
              soundManager.playPop();
              setIsEditModalOpen(true);
            }}
            className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(15,23,42,0.08)] border border-slate-900/[0.06] hover:bg-slate-50 text-slate-900 transition-all flex items-center justify-center"
            title="ویرایش مشخصات"
          >
            <Edit3 className="w-4 h-4" />
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>

      {/* Reference-Style Hero Identity Block (Display Name + Center Sticker Avatar + Side Stats) */}
      <div className="flex flex-col items-center text-center pt-1 pb-2">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0B0D12] tracking-tight -mb-3 relative z-0">
          {isAuthenticated ? (profile?.displayName || profile?.name) : 'حساب مهمان'}
        </h2>

        <div className="relative z-10 flex items-center justify-center gap-5 w-full mt-2">
          <div className="text-center min-w-[64px]">
            <div className="text-lg font-black text-[#0B0D12] tabular-nums">
              {profile?.totalGamesPlayed || 0}
            </div>
            <div className="text-[11px] font-bold text-slate-600">بازی‌ها</div>
          </div>

          <div className="relative w-28 h-28 rounded-[30px] overflow-hidden border-[5px] border-white bg-[#26130B] shadow-[0_18px_40px_rgba(15,23,42,0.18)] shrink-0">
            <Image
              src={avatarUrl}
              alt={profile?.displayName || 'Avatar'}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center min-w-[64px]">
            <div className="text-lg font-black text-[#0B0D12] tabular-nums">
              {profile?.totalCorrectGuesses || 0}
            </div>
            <div className="text-[11px] font-bold text-slate-600">حدس درست</div>
          </div>
        </div>

        {isAuthenticated ? (
          <div className="mt-3 space-y-1">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700" dir="ltr">
              <span className="font-mono">@{profile?.username || 'player'}</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            </div>
            {profile?.email && (
              <div className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{profile.email}</span>
              </div>
            )}
            {profile?.bio && (
              <p className="text-xs text-slate-700 max-w-[260px] mx-auto pt-1 leading-relaxed">
                {profile.bio}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-4 w-full">
            <GlassCard className="p-4 flex items-center justify-between gap-3 text-right">
              <div className="space-y-0.5">
                <div className="text-xs font-black text-slate-900">
                  ذخیره محلی (مهمان)
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  برای همگام‌سازی ابری و ذخیره رکوردها با گوگل وارد شوید.
                </p>
              </div>
              <button
                onClick={() => {
                  soundManager.playPop();
                  setIsAuthModalOpen(true);
                }}
                className="px-3.5 py-2.5 rounded-xl bg-[#0B0D12] hover:bg-slate-800 text-white font-black text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
              >
                <LogIn className="w-3.5 h-3.5 text-blue-400" />
                <span>ورود با گوگل</span>
              </button>
            </GlassCard>
          </div>
        )}
      </div>

      {/* Authenticated Account Controls (UID Copy + Logout) */}
      {isAuthenticated && (
        <GlassCard className="p-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-600">
            <span className="font-mono font-bold">UID:</span>
            <span className="font-mono truncate max-w-[120px]" dir="ltr">
              {profile?.uid?.slice(0, 12)}...
            </span>
            <button
              onClick={handleCopyUid}
              className="p-1 text-slate-500 hover:text-slate-900 transition-colors"
              title="کپی شناسه کاربری"
            >
              {copiedUid ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <button
            onClick={handleLogoutClick}
            className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 text-xs font-bold transition-all flex items-center gap-1"
            title="خروج از حساب گوگل"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>خروج</span>
          </button>
        </GlassCard>
      )}

      {/* Android / iOS Install Card */}
      <PWAInstallButton variant="card" />

      {/* Modular Membership & Play Billing Readiness Card */}
      {(() => {
        const caps = monetizationService.getCapabilities(isNativeAndroid);
        return (
          <GlassCard className="p-3.5 flex items-center justify-between gap-3 text-right">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Crown className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <div className="text-xs font-black text-slate-900">
                  عضویت فعلی: نسخه رایگان (Free)
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {caps.playBillingStatus === 'NOT_CONFIGURED'
                    ? 'زیرساخت Google Play Billing و تبلیغات جایزه‌ای آماده اتصال به کنسول گوگل‌پلی است.'
                    : 'خرید اشتراک پرو و تبلیغات جایزه‌ای از طریق نسخه اندروید گوگل‌پلی فعال می‌شود.'}
                </div>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-black shrink-0">
              {caps.tier}
            </span>
          </GlassCard>
        );
      })()}

      {/* Level and XP Card */}
      <LevelBadgeView profile={profile} />

      {/* Game Statistics Grid */}
      <div className="space-y-2">
        <h2 className="text-xs font-black text-slate-800 flex items-center gap-1.5 px-1">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
          <span>آمار و سوابق مسابقات</span>
        </h2>

        <div className="grid grid-cols-3 gap-2 text-center">
          <GlassCard className="p-3 space-y-0.5">
            <div className="text-[10px] font-bold text-slate-500">کل بازی‌ها</div>
            <div className="text-base font-black text-slate-900 tabular-nums">
              {profile?.totalGamesPlayed || 0}
            </div>
          </GlassCard>

          <GlassCard className="p-3 space-y-0.5">
            <div className="text-[10px] font-bold text-slate-500">حدس درست</div>
            <div className="text-base font-black text-emerald-600 tabular-nums">
              {profile?.totalCorrectGuesses || 0}
            </div>
          </GlassCard>

          <GlassCard className="p-3 space-y-0.5">
            <div className="text-[10px] font-bold text-slate-500">مجموع امتیاز</div>
            <div className="text-base font-black text-blue-600 tabular-nums">
              {profile?.totalScore || (profile?.totalCorrectGuesses || 0) * 20}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Achievements Gallery */}
      <div className="space-y-2 pt-1">
        <h2 className="text-xs font-black text-slate-800 flex items-center gap-1.5 px-1">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>نشان‌ها و مدال‌های افتخار</span>
        </h2>

        <div className="space-y-2">
          {achievements.map((ach) => (
            <GlassCard
              key={ach.id}
              borderColor={ach.isUnlocked ? 'rgba(245, 158, 11, 0.45)' : 'rgba(15, 23, 42, 0.06)'}
              className="p-3.5 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 flex-1 text-right">
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                    ach.isUnlocked
                      ? 'bg-[#F4FF57] text-[#0B0D12] border border-slate-900/10 shadow-sm'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {ach.isUnlocked ? <Trophy className="w-5 h-5" /> : <Lock className="w-4 h-4" />}
                </div>

                <div className="space-y-0.5">
                  <h3 className={`text-xs font-black ${ach.isUnlocked ? 'text-slate-950' : 'text-slate-600'}`}>
                    {ach.titleFa}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {ach.descriptionFa}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-black text-blue-600 shrink-0 tabular-nums">
                +{ach.rewardXp} XP
              </span>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Match History */}
      <div className="space-y-2 pt-1">
        <h2 className="text-xs font-black text-slate-800 flex items-center gap-1.5 px-1">
          <Clock className="w-3.5 h-3.5 text-slate-600" />
          <span>تاریخچه مسابقات اخیر</span>
        </h2>

        {sessions.length === 0 ? (
          <GlassCard className="p-4 text-center">
            <p className="text-xs text-slate-500">
              هنوز مسابقه‌ای ثبت نشده است. اولین بازی پانتومیم را شروع کنید!
            </p>
          </GlassCard>
        ) : (
          <div className="space-y-2">
            {sessions.slice(0, 5).map((session) => (
              <GlassCard key={session.id} className="p-3.5 flex items-center justify-between text-right">
                <div>
                  <div className="text-xs font-black text-slate-900">
                    {session.team1Name} ({session.team1Score}) در برابر{' '}
                    {session.team2Name} ({session.team2Score})
                  </div>
                  <div className="text-[11px] text-blue-600 font-bold mt-0.5">
                    برنده: {session.winnerTeamName}
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 tabular-nums">
                  {new Date(session.dateTimestamp).toLocaleDateString('fa-IR')}
                </div>
              </GlassCard>
            ))}
          </div>
        )}
      </div>

      {/* Edit Profile Modal */}
      {profile && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          profile={profile}
          onSaveProfile={(data) => onUpdateProfile(data)}
        />
      )}

      {/* Google Sign-In Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onGoogleLogin={onGoogleLogin}
        authState={authState}
        authError={authError}
      />
    </div>
  );
};
