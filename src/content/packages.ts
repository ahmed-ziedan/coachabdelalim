import type { Localized } from '@/config/locales';

// ─── Package / Plan types ───
// Data-driven plan configuration. No prices or features are rendered
// until the owner provides approved data.

export type PackagePrice = {
  amount: number;
  currency: 'EGP' | 'USD';
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

/**
 * Approved packages configuration.
 * Currently empty — plans render in discovery/enquiry mode.
 * Owner must supply: name, price, currency, period, features, and availability.
 */
export const packages: Package[] = [];

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
