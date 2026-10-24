import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface MobileConsultationBarProps {
  locale: Locale;
}

export function MobileConsultationBar({ locale }: MobileConsultationBarProps) {
  const ctaLabel = siteContent.header.ctaLabel[locale];

  return (
    <aside
      aria-label={locale === 'ar' ? 'حجز استشارة سريعة' : 'Quick consultation booking'}
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[var(--color-surface-muted)] bg-[var(--color-page)]/95 backdrop-blur-lg px-4 py-3 md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex items-center justify-between gap-3 max-w-md">
        <div className="flex flex-col text-start">
          <span className="text-[11px] font-condensed uppercase tracking-wider text-[var(--color-action)] font-bold">
            {locale === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
          </span>
          <span className="text-xs text-[var(--color-text-muted)] truncate max-w-[170px]">
            {locale === 'ar' ? 'أونلاين داخل وخارج مصر' : 'Online in Egypt & Worldwide'}
          </span>
        </div>

        <WhatsAppLink
          locale={locale}
          context="mobile_bar"
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[var(--color-action)] px-4 py-2.5 text-xs font-bold text-[var(--color-page)] shadow-lg shadow-[var(--color-action)]/10 transition-transform active:scale-95"
        >
          {ctaLabel}
        </WhatsAppLink>
      </div>
    </aside>
  );
}
