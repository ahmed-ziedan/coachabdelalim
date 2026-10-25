import type { Localized } from '@/config/locales';

// ─── Package / Plan types ───
// Plan names, monthly prices, and included benefits shown on the landing page.

export type PackagePrice = {
  amount: number;
  currency: 'EGP';
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

/** Three coaching plans, based on the current approved package offer. */
export const packages: Package[] = [
  {
    id: 'starter',
    enabled: true,
    name: { ar: 'الباقة الفضية', en: 'Silver Package' },
    summary: {
      ar: 'بداية منظمة بخطة تدريب وتغذية ومتابعة أسبوعية.',
      en: 'A structured start with training, nutrition, and weekly follow-up.',
    },
    price: { amount: 500, currency: 'EGP', period: 'month' },
    features: [
      { label: { ar: 'نظام غذائي مخصص', en: 'Personalized nutrition plan' }, included: true },
      { label: { ar: 'نظام تمرين PDF', en: 'PDF workout plan' }, included: true },
      { label: { ar: 'متابعة أسبوعية', en: 'Weekly follow-up' }, included: true },
      { label: { ar: 'تعديل بسيط على النظام', en: 'Basic plan adjustments' }, included: true },
      { label: { ar: 'نظام تمرين متطور', en: 'Advanced workout plan' }, included: false },
      { label: { ar: 'مراجعة الفورم بالفيديو', en: 'Video form review' }, included: false },
      { label: { ar: 'متابعة يومية', en: 'Daily follow-up' }, included: false },
    ],
    ctaContext: 'package',
  },
  {
    id: 'progress',
    enabled: true,
    featured: true,
    name: { ar: 'الباقة الذهبية', en: 'Gold Package' },
    summary: {
      ar: 'متابعة أعمق ومراجعة للفورم عشان تتطور بثقة.',
      en: 'More hands-on guidance and form reviews to keep your progress on track.',
    },
    price: { amount: 700, currency: 'EGP', period: 'month' },
    features: [
      { label: { ar: 'كل مميزات Silver', en: 'Everything in Silver' }, included: true },
      { label: { ar: 'نظام تمرين متطور', en: 'Advanced workout plan' }, included: true },
      { label: { ar: 'متابعة مرتين أسبوعيًا', en: 'Twice-weekly follow-up' }, included: true },
      { label: { ar: 'مراجعة الفورم بالفيديو', en: 'Video form review' }, included: true },
      { label: { ar: 'متابعة يومية', en: 'Daily follow-up' }, included: false },
      { label: { ar: 'Check-in يومي', en: 'Daily check-in' }, included: false },
      { label: { ar: 'مكالمات خاصة', en: 'Private calls' }, included: false },
    ],
    ctaContext: 'package',
  },
  {
    id: 'complete',
    enabled: true,
    name: { ar: 'الباقة المميزة', en: 'Premium Package' },
    summary: {
      ar: 'متابعة كاملة ومباشرة بأعلى مستوى من الدعم.',
      en: 'Complete, hands-on coaching with the highest level of support.',
    },
    price: { amount: 1000, currency: 'EGP', period: 'month' },
    features: [
      { label: { ar: 'كل مميزات Gold', en: 'Everything in Gold' }, included: true },
      { label: { ar: 'متابعة يومية', en: 'Daily follow-up' }, included: true },
      { label: { ar: 'Check-in يومي', en: 'Daily check-in' }, included: true },
      { label: { ar: 'مكالمات خاصة', en: 'Private calls' }, included: true },
      { label: { ar: 'تعديل فوري للنظام', en: 'Immediate plan adjustments' }, included: true },
      { label: { ar: 'أولوية في الرد', en: 'Priority replies' }, included: true },
      { label: { ar: 'دعم كامل 24/7', en: 'Full 24/7 support' }, included: true },
    ],
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
