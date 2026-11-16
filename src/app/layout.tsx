import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'PantoMix | پانتومیکس',
  description: 'PantoMix - پانتومیم هوشمند و دورهمی با هوش مصنوعی، مجری اختصاصی پانتو و چالش‌های هیجان‌انگیز.',
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
      <head>
        <meta name="theme-color" content="#F4FF57" />
        <link rel="icon" href="/mime_app_icon.jpg" />
      </head>
      <body className="bg-white text-slate-950 antialiased min-h-screen selection:bg-slate-950 selection:text-[#F4FF57]">
        <main className="relative z-10 max-w-md mx-auto min-h-screen">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
