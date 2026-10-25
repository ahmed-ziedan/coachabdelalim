import type { MetadataRoute } from 'next';
import { brand } from '@/config/brand';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = brand.siteUrl.replace(/\/$/, '');

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
