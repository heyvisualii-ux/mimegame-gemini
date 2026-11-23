import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const viewport: Viewport = {
  themeColor: '#F4FF57',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'PantoMix | پانتومیکس',
  description: 'PantoMix - پانتومیم هوشمند و دورهمی با هوش مصنوعی، مجری اختصاصی پانتو و چالش‌های هیجان‌انگیز.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'پانتومیکس',
  },
  icons: {
    icon: '/pwa-192x192.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'PantoMix | پانتومیکس',
    description: 'PantoMix - پانتومیم هوشمند و دورهمی با هوش مصنوعی و مجری اختصاصی پانتو.',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-white text-slate-950 antialiased min-h-screen selection:bg-slate-950 selection:text-[#F4FF57]">
        <main className="relative z-10 max-w-md mx-auto min-h-screen">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
