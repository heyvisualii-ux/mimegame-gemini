export type UiThemeId = 'luxury' | 'retro' | 'neon' | 'playful';

export interface UiTheme {
  id: UiThemeId;
  nameFa: string;
  subtitleFa: string;
  badge: string;
  bgHex: string;
  surfaceHex: string;
  primaryAccent: string;
  secondaryAccent: string;
  borderClass: string;
  cardBgClass: string;
  accentButtonClass: string;
  glowColor: string;
}

export const UI_THEMES: Record<UiThemeId, UiTheme> = {
  luxury: {
    id: 'luxury',
    nameFa: 'لوکس و نئومینیار (Luxury Noir)',
    subtitleFa: 'خلوت‌ترین و آرام‌ترین فضا، خطوط مویی ظریف، طلای ملایم و تمرکز ۱۰۰٪ روی بازی',
    badge: 'پیشنهادی ✨',
    bgHex: '#08080C',
    surfaceHex: '#121218',
    primaryAccent: '#E5A93C',
    secondaryAccent: '#A1A1AA',
    borderClass: 'border-white/[0.08]',
    cardBgClass: 'bg-[#121218]/80 backdrop-blur-md',
    accentButtonClass: 'bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black shadow-lg shadow-amber-500/15',
    glowColor: 'rgba(229, 169, 60, 0.25)',
  },
  retro: {
    id: 'retro',
    nameFa: 'سینمای وینتیج دهه ۵۰ (Retro Disco)',
    subtitleFa: 'گرم و نوستالژیک، چرم و خردلی، کاملاً هماهنگ با عینک و تیپ کاراکتر پانتو',
    badge: 'محبوب 🎙️',
    bgHex: '#120D0A',
    surfaceHex: '#1E1510',
    primaryAccent: '#EAB308',
    secondaryAccent: '#EA580C',
    borderClass: 'border-amber-900/30',
    cardBgClass: 'bg-[#1A120D]/90 backdrop-blur-md',
    accentButtonClass: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-stone-950 font-black shadow-lg shadow-amber-900/30',
    glowColor: 'rgba(234, 179, 8, 0.2)',
  },
  neon: {
    id: 'neon',
    nameFa: 'استیج نئون و پارتی (Arcade Stage)',
    subtitleFa: 'پرهیجان، بنفش سایبر و نورافکن‌های استیج، عالی برای دورهمی‌های شبانه پر سر و صدا',
    badge: 'پارتی ⚡',
    bgHex: '#0A0316',
    surfaceHex: '#17092C',
    primaryAccent: '#F59E0B',
    secondaryAccent: '#EC4899',
    borderClass: 'border-purple-500/25',
    cardBgClass: 'bg-[#150729]/80 backdrop-blur-xl',
    accentButtonClass: 'bg-gradient-to-r from-amber-400 via-fuchsia-500 to-pink-500 text-white font-black shadow-lg shadow-fuchsia-500/25',
    glowColor: 'rgba(236, 72, 153, 0.3)',
  },
  playful: {
    id: 'playful',
    nameFa: 'استودیو پاپ و خانوادگی (Playful Studio)',
    subtitleFa: 'رنگ‌های گرم و باطراوت، کارت‌های لمسی و خوانایی بالا برای همه سنین و خانواده‌ها',
    badge: 'صمیمی 👨‍👩‍👧‍👦',
    bgHex: '#0F172A',
    surfaceHex: '#1E293B',
    primaryAccent: '#10B981',
    secondaryAccent: '#F43F5E',
    borderClass: 'border-slate-700/60',
    cardBgClass: 'bg-[#1E293B]/80 backdrop-blur-md',
    accentButtonClass: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black shadow-lg shadow-emerald-500/20',
    glowColor: 'rgba(16, 185, 129, 0.25)',
  },
};
