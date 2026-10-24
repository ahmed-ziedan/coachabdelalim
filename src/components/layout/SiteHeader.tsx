import Link from 'next/link';
import type { Locale } from '@/config/locales';
import { getAlternateLocale, getLocalePath } from '@/config/locales';
import { getCoachName } from '@/config/brand';
import { getNavAnchors } from '@/config/navigation';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';
import { MobileMenu } from '@/components/layout/MobileMenu';

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const coachName = getCoachName(locale);
  const anchors = getNavAnchors(locale);
  const alternateLocale = getAlternateLocale(locale);
  const switchLabel = locale === 'ar' ? 'EN' : 'العربية';
  const switchHref = getLocalePath(alternateLocale);
  const homeHref = getLocalePath(locale);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-surface-muted)]/80 bg-[var(--color-page)]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wordmark / Brand link */}
        <Link
          href={homeHref}
          className="group flex flex-col text-start"
          aria-label={coachName}
        >
          <span className="text-lg font-black tracking-tight text-[var(--color-text)] transition-colors group-hover:text-[var(--color-action)]">
            {coachName}
          </span>
          <span className="text-[10px] font-condensed tracking-widest uppercase text-[var(--color-action)] font-bold">
            BODYBUILDING & FITNESS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text-muted)]"
          aria-label={locale === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
        >
          {anchors.map((item) => (
            <a
              key={item.id}
              href={item.hash}
              className="relative py-1 transition-colors hover:text-[var(--color-text)] focus-visible:text-[var(--color-action)]"
            >
              {item.localizedLabel}
            </a>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={switchHref}
            hrefLang={alternateLocale}
            className="rounded-lg border border-[var(--color-surface-muted)] px-3 py-1.5 font-condensed text-xs font-bold text-[var(--color-text)] tracking-wider transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
            aria-label={
              locale === 'ar'
                ? 'Switch language to English'
                : 'التبديل إلى اللغة العربية'
            }
          >
            {switchLabel}
          </Link>

          <WhatsAppLink
            locale={locale}
            context="hero"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--color-action)] px-4 py-2 text-xs font-bold text-[var(--color-page)] shadow-md shadow-[var(--color-action)]/10 transition-all hover:bg-[var(--color-action-hover)] hover:shadow-lg hover:shadow-[var(--color-action)]/20 active:scale-95"
          >
            {siteContent.header.ctaLabel[locale]}
          </WhatsAppLink>
        </div>

        {/* Mobile Actions: Language Switch & Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={switchHref}
            hrefLang={alternateLocale}
            className="rounded-lg border border-[var(--color-surface-muted)] px-2.5 py-1 font-condensed text-xs font-bold text-[var(--color-text)] tracking-wider"
          >
            {switchLabel}
          </Link>

          <MobileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}
