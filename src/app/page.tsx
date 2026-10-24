/**
 * Root page — not directly rendered.
 * The middleware rewrites `/` to `/ar` internally.
 * This file exists only as a fallback; the actual page is at [locale]/page.tsx.
 */
export { default } from './[locale]/page';
