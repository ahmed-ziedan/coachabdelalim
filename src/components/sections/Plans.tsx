import { MessageSquare, Shield, Check, Sparkles } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface PlansProps {
  locale: Locale;
}

export function Plans({ locale }: PlansProps) {
  const content = siteContent.plans;

  const consultationBenefits = [
    locale === 'ar' ? 'تقييم شامل لهدفك ومستواك الحالي' : 'Comprehensive goal & fitness level assessment',
    locale === 'ar' ? 'تحديد نظام التدريب الأنسب لجدولك (أونلاين أو ميداني)' : 'Selecting optimal training format (Online or In-person)',
    locale === 'ar' ? 'إيضاح تفاصيل المتابعة وخطط الاستمرار المناسبة لك' : 'Transparent breakdown of follow-up options and pacing',
    locale === 'ar' ? 'بدون أي التزام مسبق أو رسوم للاستشارة' : '100% free consultation with zero upfront commitment',
  ];

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

        {/* Premium Enquiry Card */}
        <div className="mt-14 mx-auto max-w-3xl rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-page)]/95 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow accent */}
          <div
            className="pointer-events-none absolute -top-24 -inset-x-12 h-48 bg-[var(--color-action)]/5 blur-3xl rounded-full"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center text-center">
            {/* Pill chip */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-action)]/30 bg-[var(--color-action)]/10 px-4 py-1.5 text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-action)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{locale === 'ar' ? 'استشارة مجانية أولاً' : 'Free Consultation First'}</span>
            </div>

            {/* Core discovery headline */}
            <h3 className="mt-6 text-2xl sm:text-3xl font-black text-[var(--color-text)]">
              {content.discoveryMessage[locale]}
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
              {locale === 'ar'
                ? 'لأن كل متدرب عنده ظروف ومستوى مختلف، بنبدأ بجلسة استشارية مباشرة عبر واتساب نتعرف فيها على هدفك ونختار الخطة الأكثر فاعلية واستدامة ليك.'
                : 'Because every trainee has distinct goals and lifestyle commitments, we start with a direct WhatsApp consultation to determine the most effective, sustainable plan for you.'}
            </p>

            {/* Inclusions checklist */}
            <div className="mt-8 w-full max-w-md rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/60 p-5 text-start">
              <span className="block text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
                {locale === 'ar' ? 'ماذا تشمل الاستشارة المجانية؟' : "What's included in the free consultation?"}
              </span>
              <ul className="space-y-2.5 text-xs text-[var(--color-text-muted)]">
                {consultationBenefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[var(--color-action)] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <WhatsAppLink
                locale={locale}
                context="plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-action)] px-8 py-3.5 text-sm font-black text-[var(--color-page)] shadow-xl shadow-[var(--color-action)]/15 transition-all hover:bg-[var(--color-action-hover)] hover:shadow-2xl hover:shadow-[var(--color-action)]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{content.ctaLabel[locale]}</span>
              </WhatsAppLink>

              <div className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                <Shield className="h-3.5 w-3.5 text-[var(--color-action)]" />
                <span>
                  {locale === 'ar' ? 'تواصل مباشر مع الكوتش' : 'Direct coach conversation'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
