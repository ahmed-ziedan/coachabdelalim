import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale, getDirection } from '@/config/locales';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { brand } from '@/config/brand';
import { fontVariables } from '@/styles/fonts';
import { SkipLink } from '@/components/ui/SkipLink';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { MobileConsultationBar } from '@/components/layout/MobileConsultationBar';

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (isValidLocale(localeParam) ? localeParam : 'ar') as Locale;

  const title = siteContent.meta.title[locale];
  const description = siteContent.meta.description[locale];

  const canonicalPath = locale === 'ar' ? '/' : '/en';

  return {
    title,
    description,
    metadataBase: new URL(brand.siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: {
        ar: '/',
        en: '/en',
        'x-default': '/',
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === 'ar' ? 'ar_EG' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-page)] text-[var(--color-text)] selection:bg-[var(--color-action)] selection:text-[var(--color-page)]">
        <SkipLink locale={locale} />
        <SiteHeader locale={locale} />
        <main id="main-content" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer locale={locale} />
        <MobileConsultationBar locale={locale} />
      </body>
    </html>
  );
}
