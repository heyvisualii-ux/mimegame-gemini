'use client';

import React, { useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { OfflineIndicator } from '@/components/PWAInstallButton';

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
