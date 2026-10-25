import type { MetadataRoute } from 'next';
import { brand } from '@/config/brand';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brand.siteUrl.replace(/\/$/, '');

  return [
    {
      url: `${baseUrl}/`,
      alternates: { languages: { ar: `${baseUrl}/`, en: `${baseUrl}/en/` } },
    },
    {
      url: `${baseUrl}/en/`,
      alternates: { languages: { ar: `${baseUrl}/`, en: `${baseUrl}/en/` } },
    },
  ];
}
