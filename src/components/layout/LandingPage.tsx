import type { Locale } from '@/config/locales';
import { Hero } from '@/components/sections/Hero';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { CoachIntro } from '@/components/sections/CoachIntro';
import { CoachingOutcomes } from '@/components/sections/CoachingOutcomes';
import { StartSteps } from '@/components/sections/StartSteps';
import { Results } from '@/components/sections/Results';
import { Plans } from '@/components/sections/Plans';
import { FinalCta } from '@/components/sections/FinalCta';

interface LandingPageProps {
  locale: Locale;
}

export function LandingPage({ locale }: LandingPageProps) {
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
