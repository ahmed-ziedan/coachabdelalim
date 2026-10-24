import type { Metadata } from 'next';
import { LocaleLayoutShell } from '@/components/layout/LocaleLayoutShell';
import { getLocalizedMetadata } from '@/lib/seo';
import '../globals.css';

export const metadata: Metadata = getLocalizedMetadata('ar');

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleLayoutShell locale="ar">{children}</LocaleLayoutShell>;
}
