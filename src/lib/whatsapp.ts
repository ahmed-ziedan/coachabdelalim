import { brand } from '@/config/brand';
import type { Locale } from '@/config/locales';
import type { WhatsAppContext } from '@/content/site';
import { whatsappMessages } from '@/content/site';

/**
 * Validate an E.164 phone number (digits only, 8-15 digits).
 */
export function isValidE164(number: string): boolean {
  return /^\d{8,15}$/.test(number);
}

/**
 * Get the localized prefilled message for a WhatsApp CTA context.
 */
export function getWhatsAppMessage(
  locale: Locale,
  context: WhatsAppContext,
): string {
  return whatsappMessages[context][locale];
}

/**
 * Build a WhatsApp deep link URL.
 *
 * Format: https://wa.me/<digits>?text=<encoded-message>
 * - Number must be digits only (no +, spaces, or punctuation)
 * - Message is URL-encoded with encodeURIComponent
 *
 * Returns null if the WhatsApp number is not configured or invalid.
 */
export function buildWhatsAppUrl(
  locale: Locale,
  context: WhatsAppContext,
): string | null {
  const number = brand.whatsappE164;

  if (!number || !isValidE164(number)) {
    return null;
  }

  const message = getWhatsAppMessage(locale, context);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${number}?text=${encodedMessage}`;
}
