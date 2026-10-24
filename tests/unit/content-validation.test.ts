import { describe, it, expect, afterEach } from 'vitest';
import { validateContent, runValidation } from '@/lib/content-validation';
import { brand } from '@/config/brand';
import { heroMedia } from '@/content/media';

describe('Content validation gate', () => {
  const originalWhatsApp = brand.whatsappE164;
  const originalHeroPoster = heroMedia.posterDesktop;

  afterEach(() => {
    (brand as { whatsappE164: string }).whatsappE164 = originalWhatsApp;
    (heroMedia as { posterDesktop?: string }).posterDesktop = originalHeroPoster;
  });

  describe('Development mode', () => {
    it('reports missing WhatsApp and hero poster as warnings, not errors', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '';
      (heroMedia as { posterDesktop?: string }).posterDesktop = undefined;

      const issues = validateContent('development');
      const errors = issues.filter((i) => i.level === 'error');
      const warnings = issues.filter((i) => i.level === 'warning');

      expect(errors.length).toBe(0);
      expect(warnings.length).toBeGreaterThan(0);
      expect(warnings.some((w) => w.field === 'brand.whatsappE164')).toBe(true);
      expect(warnings.some((w) => w.field === 'heroMedia.posterDesktop')).toBe(true);
    });

    it('runValidation succeeds in development mode with warnings', () => {
      const result = runValidation('development');
      expect(result).toBe(true);
    });
  });

  describe('Production mode', () => {
    it('reports missing WhatsApp number as error in production mode', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '';
      (heroMedia as { posterDesktop?: string }).posterDesktop = '/images/hero.webp';

      const issues = validateContent('production');
      const errors = issues.filter((i) => i.level === 'error');

      expect(errors.some((e) => e.field === 'brand.whatsappE164')).toBe(true);
    });

    it('reports missing hero poster as error in production mode', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '201012345678';
      (heroMedia as { posterDesktop?: string }).posterDesktop = undefined;

      const issues = validateContent('production');
      const errors = issues.filter((i) => i.level === 'error');

      expect(errors.some((e) => e.field === 'heroMedia.posterDesktop')).toBe(true);
    });

    it('runValidation fails in production mode when required assets are missing', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '';
      (heroMedia as { posterDesktop?: string }).posterDesktop = undefined;

      const result = runValidation('production');
      expect(result).toBe(false);
    });

    it('runValidation passes in production mode when all required assets are present', () => {
      (brand as { whatsappE164: string }).whatsappE164 = '201012345678';
      (heroMedia as { posterDesktop?: string }).posterDesktop = '/images/hero.webp';

      const issues = validateContent('production');
      const errors = issues.filter((i) => i.level === 'error');

      expect(errors.length).toBe(0);
    });
  });
});
