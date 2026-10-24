import { MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface FinalCtaProps {
  locale: Locale;
}

export function FinalCta({ locale }: FinalCtaProps) {
  const content = siteContent.finalCta;

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-x-1/2 -bottom-20 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[var(--color-action)]/8 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/90 px-6 py-16 sm:px-12 sm:py-20 text-center shadow-2xl backdrop-blur-xl">
          {/* Top Chip */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-action)]/30 bg-[var(--color-action)]/10 px-4 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-action)]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{locale === 'ar' ? 'الخطوة الأولى تبدأ هنا' : 'Your Journey Starts Here'}</span>
          </div>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="mt-6 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {content.headline[locale]}
          </h2>

          {/* Body */}
          <p className="mt-4 mx-auto max-w-xl text-base text-[var(--color-text-muted)] sm:text-lg leading-relaxed">
            {content.body[locale]}
          </p>

          {/* Main WhatsApp CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppLink
              locale={locale}
              context="footer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[var(--color-action)] px-8 py-4 text-sm font-black text-[var(--color-page)] shadow-xl shadow-[var(--color-action)]/20 transition-all hover:bg-[var(--color-action-hover)] hover:shadow-2xl hover:shadow-[var(--color-action)]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="h-4 w-4" />
              <span>{content.ctaLabel[locale]}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
            </WhatsAppLink>
          </div>

          <p className="mt-6 text-xs text-[var(--color-text-muted)]">
            {locale === 'ar'
              ? 'متاح للمتدربين من مصر وحول العالم عبر الإنترنت'
              : 'Available online for clients in Egypt and worldwide'}
          </p>
        </div>
      </div>
    </section>
  );
}
