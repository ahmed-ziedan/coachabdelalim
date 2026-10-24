import type { Locale, Localized } from './locales';

// ─── Social link type ───
export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok';

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: Localized;
};

// ─── Brand configuration ───
// This is the ONLY place business contact data lives.
// Do not hardcode WhatsApp numbers, social URLs, or names in components.

export const brand = {
  coachName: {
    ar: 'كوتش عبدالعليم',
    en: 'Coach Abdelalim',
  } satisfies Localized,

  /** The full legal/display name */
  fullName: {
    ar: 'كوتش عبدالعليم',
    en: 'Coach Abdelalim',
  } satisfies Localized,

  /**
   * WhatsApp E.164 number — digits only, no +, no spaces.
   * MUST be provided before production. Empty string triggers dev warning.
   * Example: '201234567890'
   */
  whatsappE164: '',

  /** Approved social links — only links with valid https URLs will render. */
  socials: [] as SocialLink[],

  /** Coach facts that may be referenced in copy */
  facts: {
    yearsExperience: 3,
    specialty: {
      ar: 'Bodybuilding والتدريب الشخصي',
      en: 'Bodybuilding & Personal Training',
    } satisfies Localized,
    education: {
      ar: 'كلية التربية الرياضية، جامعة السادات',
      en: 'Faculty of Physical Education, Elsadat University',
    } satisfies Localized,
    location: {
      ar: 'مصر',
      en: 'Egypt',
    } satisfies Localized,
    gyms: ['Heros GYM', 'Noamany Fitness Center'] as const,
  },

  /**
   * Production domain — set via NEXT_PUBLIC_SITE_URL env var.
   * Used for canonical URLs, sitemap, and OG metadata only.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;

/**
 * Get the display name for the current locale
 */
export function getCoachName(locale: Locale): string {
  return brand.coachName[locale];
}
