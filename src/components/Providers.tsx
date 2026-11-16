'use client';

import React from 'react';
import { AuthProvider } from '@/context/AuthContext';
import { OfflineIndicator } from '@/components/PWAInstallButton';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <OfflineIndicator />
      {children}
    </AuthProvider>
  );
}
