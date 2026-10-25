import { brand } from '@/config/brand';
import { locales } from '@/config/locales';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { heroMedia } from '@/content/media';
import { isValidE164 } from './whatsapp';

export type ValidationMode = 'development' | 'production';

export type ValidationIssue = {
  level: 'error' | 'warning';
  field: string;
  message: string;
};

/**
 * Validate all content and configuration.
 *
 * Development mode: issues are warnings (logged but don't block).
 * Production mode: required missing content causes errors (blocks build).
 */
export function validateContent(mode: ValidationMode): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const severity = (required: boolean): 'error' | 'warning' =>
    mode === 'production' && required ? 'error' : 'warning';

  // ─── WhatsApp number ───
  if (!brand.whatsappE164) {
    issues.push({
      level: severity(true),
      field: 'brand.whatsappE164',
      message: 'WhatsApp E.164 number is not configured. Every CTA will be non-functional.',
    });
  } else if (!isValidE164(brand.whatsappE164)) {
    issues.push({
      level: severity(true),
      field: 'brand.whatsappE164',
      message: `WhatsApp number "${brand.whatsappE164}" is not a valid E.164 format (8-15 digits only).`,
    });
  }

  // ─── Hero poster ───
  if (!heroMedia.posterDesktop) {
    issues.push({
      level: severity(true),
      field: 'heroMedia.posterDesktop',
      message: 'Hero desktop poster image is missing. Required for production.',
    });
  }

  if (!isValidHttpsUrl(brand.siteUrl)) {
    issues.push({
      level: severity(true),
      field: 'brand.siteUrl',
      message: 'A valid HTTPS production site URL is required for canonical metadata.',
    });
  }

  // ─── Hero alt text ───
  for (const locale of locales) {
    if (!heroMedia.alt[locale]) {
      issues.push({
        level: severity(true),
        field: `heroMedia.alt.${locale}`,
        message: `Hero image alt text is missing for locale "${locale}".`,
      });
    }
  }

  // ─── Required bilingual copy ───
  validateLocalizedField(issues, severity, 'meta.title', siteContent.meta.title);
  validateLocalizedField(issues, severity, 'meta.description', siteContent.meta.description);
  validateLocalizedField(issues, severity, 'hero.headline', siteContent.hero.headline);
  validateLocalizedField(issues, severity, 'hero.subheadline', siteContent.hero.subheadline);
  validateLocalizedField(issues, severity, 'hero.ctaPrimary', siteContent.hero.ctaPrimary);

  // ─── Social URLs ───
  for (const social of brand.socials) {
    if (!social.href || !isValidHttpsUrl(social.href)) {
      issues.push({
        level: severity(false),
        field: `socials.${social.platform}`,
        message: `Social URL for "${social.platform}" is invalid or not HTTPS. It will be hidden.`,
      });
    }
  }

  return issues;
}

function validateLocalizedField(
  issues: ValidationIssue[],
  severity: (required: boolean) => 'error' | 'warning',
  fieldName: string,
  field: Record<Locale, string>,
): void {
  for (const locale of locales) {
    if (!field[locale] || field[locale].trim() === '') {
      issues.push({
        level: severity(true),
        field: `${fieldName}.${locale}`,
        message: `Required copy "${fieldName}" is missing for locale "${locale}".`,
      });
    }
  }
}

function isValidHttpsUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Run validation and report results.
 * Returns true if no errors (warnings are OK).
 */
export function runValidation(mode: ValidationMode): boolean {
  const issues = validateContent(mode);
  const errors = issues.filter((i) => i.level === 'error');
  const warnings = issues.filter((i) => i.level === 'warning');

  if (warnings.length > 0) {
    console.warn(`\n⚠️  Content validation warnings (${warnings.length}):`);
    for (const w of warnings) {
      console.warn(`   [${w.field}] ${w.message}`);
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ Content validation errors (${errors.length}):`);
    for (const e of errors) {
      console.error(`   [${e.field}] ${e.message}`);
    }
    console.error('\nProduction build blocked. Fix the above errors before deploying.\n');
    return false;
  }

  if (issues.length === 0) {
    console.log('\n✅ Content validation passed with no issues.\n');
  } else {
    console.log(`\n✅ Content validation passed (${warnings.length} warnings, 0 errors).\n`);
  }

  return true;
}
