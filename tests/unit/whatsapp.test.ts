import { describe, it, expect, afterEach } from 'vitest';
import { isValidE164, getWhatsAppMessage, buildWhatsAppUrl } from '@/lib/whatsapp';
import { brand } from '@/config/brand';

describe('WhatsApp utilities', () => {
  describe('isValidE164', () => {
    it('accepts valid 8-15 digit phone numbers without symbols', () => {
      expect(isValidE164('201012345678')).toBe(true);
      expect(isValidE164('12345678')).toBe(true);
      expect(isValidE164('123456789012345')).toBe(true);
    });

    it('rejects numbers with plus signs, spaces, or dashes', () => {
      expect(isValidE164('+201012345678')).toBe(false);
      expect(isValidE164('20 101 234 5678')).toBe(false);
      expect(isValidE164('20-101-234-5678')).toBe(false);
    });

    it('rejects numbers that are too short or too long', () => {
      expect(isValidE164('1234567')).toBe(false); // 7 digits
      expect(isValidE164('1234567890123456')).toBe(false); // 16 digits
      expect(isValidE164('')).toBe(false);
    });

    it('rejects non-numeric strings', () => {
      expect(isValidE164('abcdefghij')).toBe(false);
    });
  });

  describe('getWhatsAppMessage', () => {
    it('returns Arabic message for hero context', () => {
      const msg = getWhatsAppMessage('ar', 'hero');
      expect(msg).toContain('أهلًا كوتش عبدالعليم');
      expect(msg).toContain('Free Consultation');
    });

    it('returns English message for hero context', () => {
      const msg = getWhatsAppMessage('en', 'hero');
      expect(msg).toContain('Hi Coach Abdelalim');
      expect(msg).toContain('free consultation');
    });

    it('returns different messages for different contexts', () => {
      const heroMsg = getWhatsAppMessage('ar', 'hero');
      const plansMsg = getWhatsAppMessage('ar', 'plans');
      const footerMsg = getWhatsAppMessage('ar', 'footer');

      expect(heroMsg).not.toBe(plansMsg);
      expect(plansMsg).not.toBe(footerMsg);
    });
  });

  describe('buildWhatsAppUrl', () => {
    const originalNumber = brand.whatsappE164;

    afterEach(() => {
      // Restore brand number
      (brand as { whatsappE164: string }).whatsappE164 = originalNumber;
    });

    it('returns null when WhatsApp number is not configured (empty string)', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '';
      expect(buildWhatsAppUrl('ar', 'hero')).toBeNull();
      expect(buildWhatsAppUrl('en', 'hero')).toBeNull();
    });

    it('returns null when WhatsApp number is invalid format', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '+20 123 456';
      expect(buildWhatsAppUrl('ar', 'hero')).toBeNull();
    });

    it('constructs correct wa.me URL with properly encoded message when number is valid', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '201012345678';
      const url = buildWhatsAppUrl('ar', 'hero');

      expect(url).not.toBeNull();
      expect(url).toMatch(/^https:\/\/wa\.me\/201012345678\?text=/);

      // Verify that Arabic characters are URL-encoded
      const urlParams = new URL(url!).searchParams;
      const text = urlParams.get('text');
      expect(text).toBe(getWhatsAppMessage('ar', 'hero'));
    });

    it('constructs correct English WhatsApp URL', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '201012345678';
      const url = buildWhatsAppUrl('en', 'plans');

      expect(url).not.toBeNull();
      expect(url).toMatch(/^https:\/\/wa\.me\/201012345678\?text=/);
      const urlParams = new URL(url!).searchParams;
      expect(urlParams.get('text')).toBe(getWhatsAppMessage('en', 'plans'));
    });
  });
});
