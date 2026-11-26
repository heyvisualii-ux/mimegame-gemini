import type { CapacitorConfig } from '@capacitor/cli';
import firebaseConfig from './firebase-applet-config.json';

const serverUrl =
  process.env.CAPACITOR_SERVER_URL || 'https://game.dresmaeiliclinic.ir/';
const isLocalHttpServer = serverUrl.startsWith('http://');

const config: CapacitorConfig = {
  appId: 'com.pantomix.app',
  appName: 'PantoMix',
  webDir: 'mobile-shell',
  server: {
    url: serverUrl,
    cleartext: isLocalHttpServer,
    androidScheme: 'https',
    errorPath: 'index.html',
    allowNavigation: [
      'game.dresmaeiliclinic.ir',
      '*.dresmaeiliclinic.ir',
      'accounts.google.com',
      '*.firebaseapp.com',
      '*.googleapis.com',
      'apis.google.com',
      '*.gstatic.com',
    ],
  },
  android: {
    allowMixedContent: isLocalHttpServer,
    backgroundColor: '#FFFFFF',
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#F4FF57',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: false,
      splashImmersive: false,
    },
    StatusBar: {
      overlaysWebView: false,
      style: 'LIGHT',
      backgroundColor: '#F4FF57',
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      clientId: firebaseConfig.oAuthClientId,
      androidClientId: firebaseConfig.oAuthClientId,
      serverClientId: firebaseConfig.oAuthClientId,
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
