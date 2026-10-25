import { Check, Dumbbell, Gem, Medal, Minus, Sparkles, Trophy } from 'lucide-react';
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

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${plan.featured ? 'border-[var(--color-action)] bg-[linear-gradient(160deg,rgba(239,21,32,0.12),var(--color-page)_48%)] shadow-[0_20px_60px_rgba(239,21,32,0.10)]' : 'border-[var(--color-surface-muted)] bg-[var(--color-page)]/95'}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 start-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--color-action)] px-4 py-1.5 text-xs font-bold text-white shadow-lg rtl:translate-x-1/2">
                  <Sparkles className="h-3.5 w-3.5" />
                  {locale === 'ar' ? 'الأكثر طلبًا' : 'Most Popular'}
                </span>
              )}
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="shrink-0">
                  {plan.id === 'starter' ? (
                    <Medal className="h-6 w-6 text-slate-300" />
                  ) : plan.id === 'progress' ? (
                    <Trophy className="h-6 w-6 text-amber-400" />
                  ) : (
                    <Gem className="h-6 w-6 text-[var(--color-action)]" />
                  )}
                </span>
                <h3 className="font-condensed text-lg font-bold uppercase tracking-widest text-[var(--color-text)]">{plan.name[locale]}</h3>
              </div>

              {plan.price && (
                <div className="mt-5 flex items-end gap-2">
                  <span className="pb-1 text-xs font-bold text-[var(--color-action)]">EGP</span>
                  <span className="text-5xl font-black leading-none tracking-tight text-[var(--color-text)]">
                    {new Intl.NumberFormat(locale === 'ar' ? 'ar-EG' : 'en-EG').format(plan.price.amount)}
                  </span>
                  <span className="pb-1 text-xs text-[var(--color-text-muted)]">
                    {locale === 'ar' ? 'شهريًا' : 'per month'}
                  </span>
                </div>
              )}

              <p className="mt-3 min-h-10 text-sm leading-relaxed text-[var(--color-text-muted)]">{plan.summary[locale]}</p>
              <div className="my-5 h-px w-10 bg-[var(--color-action)]" />

              <ul className="flex-1 divide-y divide-[var(--color-surface-muted)]/70">
                {plan.features?.map((feature) => (
                  <li key={feature.label[locale]} className={`flex items-start gap-2.5 py-2.5 text-sm ${feature.included ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]/65'}`}>
                    {feature.included ? (
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-action)]" />
                    ) : (
                      <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                    )}
                    <span>{feature.label[locale]}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                locale={locale}
                context={plan.ctaContext}
                detail={plan.name[locale]}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-bold transition-colors ${plan.featured ? 'border-[var(--color-action)] bg-[var(--color-action)] text-[var(--color-page)] hover:bg-[var(--color-action-hover)]' : 'border-[var(--color-action)]/60 bg-transparent text-[var(--color-text)] hover:bg-[var(--color-action)] hover:text-white'}`}
              >
                <Dumbbell className="h-4 w-4" />
                <span>{locale === 'ar' ? 'ابدأ دلوقتي' : 'Get Started'}</span>
              </WhatsAppLink>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-sm text-[var(--color-text-muted)]">
          <Sparkles className="h-4 w-4 text-[var(--color-action)]" />
          <span>{locale === 'ar' ? 'كل الباقات أونلاين' : 'All plans are delivered online'}</span>
          <span aria-hidden="true">•</span>
          <span>{locale === 'ar' ? 'تواصل معايا على واتساب للتفاصيل' : 'Message me on WhatsApp for details'}</span>
        </div>
      </div>
    </section>
  );
}
