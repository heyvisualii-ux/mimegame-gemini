export type MembershipTier = 'FREE' | 'PREMIUM';

export type BillingProviderStatus =
  | 'NOT_CONFIGURED'
  | 'WEB_UNSUPPORTED'
  | 'READY';

export type AdProviderStatus =
  | 'NOT_CONFIGURED'
  | 'WEB_UNSUPPORTED'
  | 'READY';

export type RewardedAdPlacement = 'BONUS_COINS' | 'AI_EXTRA_PACK';

export interface BillingProduct {
  productId: string;
  titleFa: string;
  descriptionFa: string;
  tier: MembershipTier;
  billingCycle: 'monthly' | 'lifetime';
  configuredInPlayConsole: boolean;
}

export interface MonetizationCapabilities {
  tier: MembershipTier;
  playBillingStatus: BillingProviderStatus;
  rewardedAdsStatus: AdProviderStatus;
  missingIntegrations: string[];
}

export interface PurchaseResult {
  status: 'UNAVAILABLE' | 'CANCELLED' | 'ERROR';
  message: string;
}

export interface RewardedAdResult {
  status: 'UNAVAILABLE' | 'DISMISSED' | 'ERROR';
  message: string;
}

export const MEMBERSHIP_CATALOG: BillingProduct[] = [
  {
    productId: 'com.pantomix.app.premium.monthly',
    titleFa: 'اشتراک ماهانه پانتومیکس پرو',
    descriptionFa: 'حذف تبلیغات، ساخت نامحدود کلمه با هوش مصنوعی و بسته‌های ویژه مهمانی',
    tier: 'PREMIUM',
    billingCycle: 'monthly',
    configuredInPlayConsole: false,
  },
  {
    productId: 'com.pantomix.app.premium.lifetime',
    titleFa: 'نسخه دائمی پانتومیکس پرو',
    descriptionFa: 'دسترسی همیشگی به تمامی امکانات ویژه بدون تمدید ماهانه',
    tier: 'PREMIUM',
    billingCycle: 'lifetime',
    configuredInPlayConsole: false,
  },
];

/**
 * Modular monetization boundary for Google Play Billing & Rewarded Ads.
 * Does NOT simulate successful purchases or fake ad rewards;
 * requires real Play Billing & AdMob native plugins + store console IDs.
 */
export const monetizationService = {
  getCapabilities(isNativeAndroid: boolean): MonetizationCapabilities {
    return {
      tier: 'FREE',
      playBillingStatus: isNativeAndroid ? 'NOT_CONFIGURED' : 'WEB_UNSUPPORTED',
      rewardedAdsStatus: isNativeAndroid ? 'NOT_CONFIGURED' : 'WEB_UNSUPPORTED',
      missingIntegrations: [
        'نصب پلاگین Google Play Billing (مانند @capgo/capacitor-native-purchases) و ثبت محصولات در Google Play Console',
        'نصب پلاگین تبلیغات جایزه‌ای (مانند @capacitor-community/admob) و تنظیم AdMob App ID در AndroidManifest.xml',
        'تایید رسید خرید (Server-Side Purchase Verification) روی سرور برای ارتقای امن حساب کاربری',
      ],
    };
  },

  async purchaseProduct(_productId: string): Promise<PurchaseResult> {
    return {
      status: 'UNAVAILABLE',
      message:
        'پرداخت درون‌برنامه‌ای Google Play هنوز فعال نشده است. ابتدا محصول را در Google Play Console و پلاگین Billing پیکربندی کنید.',
    };
  },

  async restorePurchases(): Promise<PurchaseResult> {
    return {
      status: 'UNAVAILABLE',
      message: 'بازیابی خریدها پس از اتصال به Google Play Billing فعال می‌شود.',
    };
  },

  async showRewardedAd(_placement: RewardedAdPlacement): Promise<RewardedAdResult> {
    return {
      status: 'UNAVAILABLE',
      message:
        'سرویس تبلیغات جایزه‌ای (AdMob) هنوز پیکربندی نشده است.',
    };
  },
};
