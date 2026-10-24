import type { Metadata } from 'next';
import { LocaleLayoutShell } from '@/components/layout/LocaleLayoutShell';
import { getLocalizedMetadata } from '@/lib/seo';
import '../globals.css';

export const metadata: Metadata = getLocalizedMetadata('en');

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleLayoutShell locale="en">{children}</LocaleLayoutShell>;
}
