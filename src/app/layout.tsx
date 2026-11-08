import type { Metadata } from 'next';
import './globals.css';

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
        <meta name="theme-color" content="#0c0517" />
        <link rel="icon" href="/mime_app_icon.jpg" />
      </head>
      <body className="bg-[#0c0517] text-white antialiased min-h-screen selection:bg-amber-400 selection:text-slate-950">
        {/* Background glow and subtle luxury party gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 right-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[120px]" />
          <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]" />
          <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        </div>

        <main className="relative z-10 max-w-md mx-auto min-h-screen px-4 pt-4">
          {children}
        </main>
      </body>
    </html>
  );
}
