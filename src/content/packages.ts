import type { Localized } from '@/config/locales';

// ─── Package / Plan types ───
// Edit plan names and summaries here. Add approved prices and features later.

export type PackagePrice = {
  amount: number;
  currency: 'EGP' | 'USD';
  period: 'month' | 'one_time';
};

export type PackageFeature = {
  label: Localized;
  included: boolean;
};

export type Package = {
  id: string;
  enabled: boolean;
  featured?: boolean;
  name: Localized;
  summary: Localized;
  price?: PackagePrice;
  features?: PackageFeature[];
  ctaContext: 'package';
};

/**
 * Three editable enquiry plans. Prices and service details stay hidden until approved.
 */
export const packages: Package[] = [
  {
    id: 'starter',
    enabled: true,
    name: { ar: 'الخطة الأساسية', en: 'Starter Plan' },
    summary: {
      ar: 'تعرّف على تفاصيل الخطة وحدد مدى مناسبتها لهدفك.',
      en: 'Explore the plan details and see how they fit your goals.',
    },
    ctaContext: 'package',
  },
  {
    id: 'progress',
    enabled: true,
    featured: true,
    name: { ar: 'خطة التطور', en: 'Progress Plan' },
    summary: {
      ar: 'تواصل لمعرفة التفاصيل واختيار الأنسب لاحتياجك.',
      en: 'Get in touch to learn more and find the right fit.',
    },
    ctaContext: 'package',
  },
  {
    id: 'complete',
    enabled: true,
    name: { ar: 'الخطة الشاملة', en: 'Complete Plan' },
    summary: {
      ar: 'ناقش هدفك مع الكوتش واعرف تفاصيل الخطة.',
      en: 'Discuss your goals with the coach and learn what the plan includes.',
    },
    ctaContext: 'package',
  },
];

/**
 * Check if any packages are approved and ready to display with pricing.
 */
export function hasApprovedPackages(): boolean {
  return packages.some(
    (pkg) => pkg.enabled && pkg.price != null && pkg.features != null,
  );
}

/**
 * Get enabled packages for display.
 */
export function getEnabledPackages(): Package[] {
  return packages.filter((pkg) => pkg.enabled);
}
