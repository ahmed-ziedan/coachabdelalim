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
   * Digits only; the public WhatsApp URL uses this value for every CTA.
   */
  whatsappE164: '201066969065',

  /** Approved social links — only links with valid https URLs will render. */
  socials: [
    {
      platform: 'instagram',
      href: 'https://www.instagram.com/3bd_elalim',
      label: { ar: 'إنستجرام', en: 'Instagram' },
    },
  ] satisfies SocialLink[],

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
   * Current Cloudflare Pages domain. Override with NEXT_PUBLIC_SITE_URL
   * when a custom production domain is ready.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://abdelalim.pages.dev',
} as const;

/**
 * Get the display name for the current locale
 */
export function getCoachName(locale: Locale): string {
  return brand.coachName[locale];
}
