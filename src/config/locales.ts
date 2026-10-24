// ─── Locale definitions ───
export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export type Localized<T = string> = Record<Locale, T>;

/** Map locale to document direction */
export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/** Check if a string is a supported locale */
export function isValidLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

/** Get the public URL path for a locale */
export function getLocalePath(locale: Locale): string {
  return locale === 'ar' ? '/' : '/en';
}

/** Get the opposite locale (for language switcher) */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'ar' ? 'en' : 'ar';
}

/**
 * Build the language-switch href preserving the hash fragment.
 * Example: switching from Arabic with #plans → /en#plans
 */
export function buildLocaleSwitchHref(
  currentLocale: Locale,
  hash?: string,
): string {
  const target = getAlternateLocale(currentLocale);
  const basePath = getLocalePath(target);
  const fragment = hash && hash.startsWith('#') ? hash : '';
  return `${basePath}${fragment}`;
}
