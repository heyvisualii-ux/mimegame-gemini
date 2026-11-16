import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'پانتومیکس | PantoMix',
    short_name: 'پانتومیکس',
    description:
      'بازی پانتومیم هوشمند و دورهمی با هوش مصنوعی، مجری اختصاصی و چالش‌های هیجان‌انگیز.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#FFFFFF',
    theme_color: '#F4FF57',
    lang: 'fa',
    dir: 'rtl',
    categories: ['games', 'entertainment'],
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
