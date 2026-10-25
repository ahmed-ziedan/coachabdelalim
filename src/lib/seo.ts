import type { Metadata } from 'next';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { brand } from '@/config/brand';

/**
 * Generate static metadata for a given locale.
 */
export function getLocalizedMetadata(locale: Locale): Metadata {
  const title = siteContent.meta.title[locale];
  const description = siteContent.meta.description[locale];
  const canonicalPath = locale === 'ar' ? '/' : '/en/';

  return {
    title,
    description,
    metadataBase: new URL(brand.siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: {
        ar: '/',
        en: '/en/',
        'x-default': '/',
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/media/coach/coach-about-portrait.webp',
          alt: 'Coach Abdelalim',
        },
      ],
    },
  };
}
