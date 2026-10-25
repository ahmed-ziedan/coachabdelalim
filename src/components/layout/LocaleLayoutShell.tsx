import { SkipLink } from '@/components/ui/SkipLink';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import type { Locale } from '@/config/locales';
import { getDirection } from '@/config/locales';

interface LocaleLayoutShellProps {
  locale: Locale;
  children: React.ReactNode;
}

export function LocaleLayoutShell({ locale, children }: LocaleLayoutShellProps) {
  const dir = getDirection(locale);

  return (
    <html lang={locale} dir={dir} className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-page)] text-[var(--color-text)] selection:bg-[var(--color-action)] selection:text-[var(--color-page)]">
        <SkipLink locale={locale} />
        <SiteHeader locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <FloatingWhatsAppButton locale={locale} />
      </body>
    </html>
  );
}
