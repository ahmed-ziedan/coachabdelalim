import { IBM_Plex_Sans_Arabic, Barlow_Condensed, Inter } from 'next/font/google';

/**
 * Arabic UI & Headings font: IBM Plex Sans Arabic
 * Primary fallback font as specified in PROJECT_BRIEF § 4 Typography:
 * "If the rights cannot be confirmed, fall back to IBM Plex Sans Arabic or Tajawal"
 */
export const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

/**
 * Latin condensed athletic display font: Barlow Condensed
 * Used for all-caps package labels, oversized numerals, tiny overlines, metrics.
 */
export const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-condensed',
  display: 'swap',
});

/**
 * English paragraph & clean UI font: Inter
 */
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

/**
 * Combined font variables to attach to html/body.
 */
export const fontVariables = `${ibmPlexArabic.variable} ${barlowCondensed.variable} ${inter.variable}`;
