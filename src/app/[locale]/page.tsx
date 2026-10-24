import { notFound } from 'next/navigation';
import { isValidLocale } from '@/config/locales';
import type { Locale } from '@/config/locales';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CoachIntro } from '@/components/sections/CoachIntro';
import { CoachingOutcomes } from '@/components/sections/CoachingOutcomes';
import { StartSteps } from '@/components/sections/StartSteps';
import { Results } from '@/components/sections/Results';
import { Plans } from '@/components/sections/Plans';
import { FinalCta } from '@/components/sections/FinalCta';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function LocalizedPage({ params }: PageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return (
    <>
      <Hero locale={locale} />
      <TrustStrip locale={locale} />
      <CoachIntro locale={locale} />
      <CoachingOutcomes locale={locale} />
      <StartSteps locale={locale} />
      <Results locale={locale} />
      <Plans locale={locale} />
      <FinalCta locale={locale} />
    </>
  );
}
