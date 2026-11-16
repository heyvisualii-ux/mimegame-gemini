import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  initializeFirestore,
  getFirestore,
  doc,
  getDocFromServer,
  disableNetwork,
  enableNetwork,
  Firestore,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// CRITICAL: The app requires firebaseConfig.firestoreDatabaseId.
// Browser-only transport settings must only be passed on the client (never during Node SSR).
let firestoreInstance: Firestore;
try {
  if (typeof window !== 'undefined') {
    firestoreInstance = initializeFirestore(
      app,
      {
        experimentalAutoDetectLongPolling: true,
        ignoreUndefinedProperties: true,
      },
      firebaseConfig.firestoreDatabaseId
    );
  } else {
    firestoreInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
  }
} catch {
  firestoreInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
}

export const db = firestoreInstance;
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map((provider) => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export async function ensureFirestoreNetworkEnabled(): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    await enableNetwork(db);
  } catch {
    // Ignore if already enabled or offline
  }
}

// Connection test per skill directive
export async function testConnection(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) {
    await disableNetwork(db).catch(() => {});
    return false;
  }

  try {
    // Fast pre-flight reachability check so blocked/filtered networks do not leave
    // Firestore's internal 10-second WatchStream timer dangling in the background.
    const controller = new AbortController();
    const abortTimer = setTimeout(() => controller.abort(), 3500);
    const probeUrl = `https://firestore.googleapis.com/v1/projects/${firebaseConfig.projectId}/databases/${firebaseConfig.firestoreDatabaseId}/documents/test/connection?key=${firebaseConfig.apiKey}`;
    try {
      await fetch(probeUrl, { method: 'GET', signal: controller.signal });
    } finally {
      clearTimeout(abortTimer);
    }

    await enableNetwork(db).catch(() => {});

    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('the client is offline or timed out')), 4000)
    );
    await Promise.race([
      getDocFromServer(doc(db, 'test', 'connection')),
      timeoutPromise,
    ]);
    return true;
  } catch (error) {
    // Cancel pending WatchStream retries if backend is unreachable so the 10s SDK error isn't emitted
    await disableNetwork(db).catch(() => {});
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or waiting for network');
    }
    return false;
  }
}

export const testFirestoreConnection = testConnection;
