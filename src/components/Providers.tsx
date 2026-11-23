'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AuthProvider } from '@/context/AuthContext';

const OfflineIndicator = dynamic(
  () => import('@/components/PWAInstallButton').then((m) => m.OfflineIndicator),
  { ssr: false }
);

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('@/lib/capacitor')
      .then(({ configureAndroidSystemUI }) => configureAndroidSystemUI())
      .catch(() => {});
  }, []);

  return (
    <AuthProvider>
      <OfflineIndicator />
      {children}
    </AuthProvider>
  );
}
