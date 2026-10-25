import { MessageSquare, Sparkles } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { getEnabledPackages } from '@/content/packages';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface PlansProps {
  locale: Locale;
}

export function Plans({ locale }: PlansProps) {
  const content = siteContent.plans;
  const plans = getEnabledPackages();

  return (
    <section
      id="plans"
      aria-labelledby="plans-heading"
      className="relative border-b border-[var(--color-surface-muted)] bg-[var(--color-surface)]/40 py-20 lg:py-28 radial-glow"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
            {locale === 'ar' ? 'خطط وباقات التدريب' : 'Coaching Plans & Pathways'}
          </span>
          <h2
            id="plans-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {content.headline[locale]}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {locale === 'ar'
              ? 'برامج مصممة خصيصاً لكل متدرب حسب هدفه، مكانه، ونوع المتابعة المطلوبة.'
              : 'Programs tailored to each client based on goals, location, and required coaching depth.'}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-3xl border bg-[var(--color-page)]/95 p-7 shadow-xl ${plan.featured ? 'border-[var(--color-action)]/60' : 'border-[var(--color-surface-muted)]'}`}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-action)]/30 bg-[var(--color-action)]/10 px-3 py-1 text-xs font-bold text-[var(--color-action)]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {locale === 'ar' ? 'اختيار مميز' : 'Featured'}
                </span>
              )}
              <h3 className="text-xl font-bold text-[var(--color-text)]">{plan.name[locale]}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-text-muted)]">{plan.summary[locale]}</p>
              <WhatsAppLink
                locale={locale}
                context={plan.ctaContext}
                detail={plan.name[locale]}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-action)] px-5 py-3 text-sm font-bold text-[var(--color-page)] transition-colors hover:bg-[var(--color-action-hover)]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{content.ctaLabel[locale]}</span>
              </WhatsAppLink>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Sparkles className="h-4 w-4 text-[var(--color-action)]" />
          <span>{locale === 'ar' ? 'ابدأ باستشارة مجانية عبر واتساب' : 'Start with a free WhatsApp consultation'}</span>
        </div>
      </div>
    </section>
  );
}
