import { describe, it, expect } from 'vitest';
import {
  getDirection,
  isValidLocale,
  getLocalePath,
  getAlternateLocale,
  buildLocaleSwitchHref,
  defaultLocale,
  locales,
} from '@/config/locales';

describe('Locale configuration and utilities', () => {
  it('defines Arabic as the default locale', () => {
    expect(defaultLocale).toBe('ar');
    expect(locales).toEqual(['ar', 'en']);
  });

  describe('getDirection', () => {
    it('returns rtl for Arabic', () => {
      expect(getDirection('ar')).toBe('rtl');
    });

    it('returns ltr for English', () => {
      expect(getDirection('en')).toBe('ltr');
    });
  });

  describe('isValidLocale', () => {
    it('validates supported locales', () => {
      expect(isValidLocale('ar')).toBe(true);
      expect(isValidLocale('en')).toBe(true);
    });

    it('rejects unsupported locales and invalid types', () => {
      expect(isValidLocale('fr')).toBe(false);
      expect(isValidLocale('es')).toBe(false);
      expect(isValidLocale('')).toBe(false);
      expect(isValidLocale(null)).toBe(false);
      expect(isValidLocale(undefined)).toBe(false);
      expect(isValidLocale(123)).toBe(false);
    });
  });

  describe('getLocalePath', () => {
    it('maps Arabic to root /', () => {
      expect(getLocalePath('ar')).toBe('/');
    });

    it('maps English to /en', () => {
      expect(getLocalePath('en')).toBe('/en');
    });
  });

  describe('getAlternateLocale', () => {
    it('returns opposite locale', () => {
      expect(getAlternateLocale('ar')).toBe('en');
      expect(getAlternateLocale('en')).toBe('ar');
    });
  });

  describe('buildLocaleSwitchHref', () => {
    it('generates sibling route without hash', () => {
      expect(buildLocaleSwitchHref('ar')).toBe('/en');
      expect(buildLocaleSwitchHref('en')).toBe('/');
    });

    it('preserves valid hash fragments across language switch', () => {
      expect(buildLocaleSwitchHref('ar', '#plans')).toBe('/en#plans');
      expect(buildLocaleSwitchHref('en', '#plans')).toBe('/#plans');
      expect(buildLocaleSwitchHref('ar', '#about')).toBe('/en#about');
      expect(buildLocaleSwitchHref('en', '#contact')).toBe('/#contact');
    });

    it('ignores invalid hash values', () => {
      expect(buildLocaleSwitchHref('ar', 'plans')).toBe('/en');
    });
  });
});
