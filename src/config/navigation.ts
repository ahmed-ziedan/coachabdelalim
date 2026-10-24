import type { Locale, Localized } from './locales';

export type NavAnchor = {
  id: string;
  label: Localized;
  hash: string;
};

export const navAnchors: NavAnchor[] = [
  {
    id: 'about',
    label: { ar: 'عن الكوتش', en: 'About' },
    hash: '#about',
  },
  {
    id: 'coaching',
    label: { ar: 'التدريب', en: 'Coaching' },
    hash: '#coaching',
  },
  {
    id: 'results',
    label: { ar: 'النتائج', en: 'Results' },
    hash: '#results',
  },
  {
    id: 'plans',
    label: { ar: 'الباقات', en: 'Plans' },
    hash: '#plans',
  },
  {
    id: 'contact',
    label: { ar: 'تواصل', en: 'Contact' },
    hash: '#contact',
  },
];

export function getNavAnchors(locale: Locale) {
  return navAnchors.map((anchor) => ({
    ...anchor,
    localizedLabel: anchor.label[locale],
  }));
}
