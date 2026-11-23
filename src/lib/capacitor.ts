import { Capacitor } from '@capacitor/core';
import firebaseConfig from '../../firebase-applet-config.json';

let googleAuthInitialized = false;

export function isCapacitorNative(): boolean {
  return typeof window !== 'undefined' && Capacitor.isNativePlatform();
}

export function getCapacitorPlatform(): string {
  return typeof window !== 'undefined' ? Capacitor.getPlatform() : 'web';
}

export async function configureAndroidSystemUI(): Promise<void> {
  if (!isCapacitorNative()) return;

  try {
    const [{ StatusBar, Style }, { SplashScreen }] = await Promise.all([
      import('@capacitor/status-bar'),
      import('@capacitor/splash-screen'),
    ]);

    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setOverlaysWebView({ overlay: false }).catch(() => {});
      await StatusBar.setBackgroundColor({ color: '#F4FF57' }).catch(() => {});
      await StatusBar.setStyle({ style: Style.Light }).catch(() => {});
    }

    await SplashScreen.hide({ fadeOutDuration: 250 }).catch(() => {});
  } catch {
    // Safe fallback if native plugin unavailable
  }
}

export async function registerAndroidBackHandler(
  onBackPressed: () => boolean
): Promise<() => void> {
  if (!isCapacitorNative()) return () => {};

  try {
    const { App } = await import('@capacitor/app');
    const listener = await App.addListener('backButton', () => {
      const handled = onBackPressed();
      if (!handled) {
        App.exitApp().catch(() => {});
      }
    });
    return () => {
      listener.remove().catch(() => {});
    };
  } catch {
    return () => {};
  }
}

export async function subscribeNativeNetworkStatus(
  onChange: (connected: boolean) => void
): Promise<() => void> {
  if (!isCapacitorNative()) return () => {};

  try {
    const { Network } = await import('@capacitor/network');
    const status = await Network.getStatus();
    onChange(status.connected);

    const listener = await Network.addListener('networkStatusChange', (nextStatus) => {
      onChange(nextStatus.connected);
    });
    return () => {
      listener.remove().catch(() => {});
    };
  } catch {
    return () => {};
  }
}

export async function nativeGoogleSignIn(): Promise<{
  idToken: string;
  accessToken?: string;
}> {
  const { GoogleAuth } = await import('@southdevs/capacitor-google-auth');
  const clientId = firebaseConfig.oAuthClientId;

  if (!googleAuthInitialized) {
    await GoogleAuth.initialize({
      clientId,
      scopes: ['profile', 'email'],
      grantOfflineAccess: true,
    });
    googleAuthInitialized = true;
  }

  const user = await GoogleAuth.signIn({
    clientId,
    serverClientId: clientId,
    scopes: ['profile', 'email'],
    grantOfflineAccess: true,
  });

  if (!user?.authentication?.idToken) {
    throw new Error('توکن احراز هویت گوگل از اندروید دریافت نشد.');
  }

  return {
    idToken: user.authentication.idToken,
    accessToken: user.authentication.accessToken,
  };
}

export async function nativeGoogleSignOut(): Promise<void> {
  if (!isCapacitorNative()) return;
  try {
    const { GoogleAuth } = await import('@southdevs/capacitor-google-auth');
    if (!googleAuthInitialized) {
      const clientId = firebaseConfig.oAuthClientId;
      await GoogleAuth.initialize({
        clientId,
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });
      googleAuthInitialized = true;
    }
    await GoogleAuth.signOut();
  } catch {
    // Ignore native sign-out error when already signed out
  }
}
