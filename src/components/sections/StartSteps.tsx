import { MessageSquare, CalendarCheck, Flag, ArrowRight } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';
import { WhatsAppLink } from '@/components/ui/WhatsAppLink';

interface StartStepsProps {
  locale: Locale;
}

export function StartSteps({ locale }: StartStepsProps) {
  const content = siteContent.startSteps;

  const stepsData = [
    {
      number: '01',
      icon: MessageSquare,
      title: content.steps[0].label[locale],
      desc:
        locale === 'ar'
          ? 'تواصل مباشر مع كوتش عبدالعليم بدون استمارات معقدة أو انتظار طويل.'
          : 'Direct WhatsApp conversation with Coach Abdelalim without complicated forms.',
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: content.steps[1].label[locale],
      desc:
        locale === 'ar'
          ? 'استشارة أولية مجانية نتناقش فيها في هدفك، جدولك، وإمكاناتك التدريبية.'
          : 'A free initial consultation discussing your target, routine, and training background.',
    },
    {
      number: '03',
      icon: Flag,
      title: content.steps[2].label[locale],
      desc:
        locale === 'ar'
          ? 'نحدد البرنامج الأنسب وخطوات المتابعة العملية، وتبدأ رحلتك فوراً.'
          : 'Select the optimal coaching pathway, establish accountability, and start training.',
    },
  ];

  return (
    <section
      aria-labelledby="start-steps-heading"
      className="relative border-b border-[var(--color-surface-muted)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
            {locale === 'ar' ? 'طريقة البداية' : 'How it works'}
          </span>
          <h2
            id="start-steps-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {content.headline[locale]}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {locale === 'ar'
              ? 'رحلتك بتبدأ بخطوة واحدة واضحة وبسيطة وبدون أي تعقيد.'
              : 'Your transformation begins with a simple, transparent 3-step pathway.'}
          </p>
        </div>

        {/* Steps Grid with Pathway Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stepsData.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/70 p-8 transition-all hover:border-[var(--color-action)]/30 hover:bg-[var(--color-surface)]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[var(--color-surface-muted)]/60 pb-6">
                    <span className="font-condensed text-4xl font-black text-[var(--color-action)]">
                      {step.number}
                    </span>
                    <div className="rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-page)] p-3 text-[var(--color-action)]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[var(--color-text)] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--color-surface-muted)]/40 text-start">
                  <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[var(--color-action)]">
                    {idx === 0
                      ? locale === 'ar'
                        ? 'الخطوة الأولى'
                        : 'First Step'
                      : idx === 1
                        ? locale === 'ar'
                          ? 'التقييم'
                          : 'Assessment'
                        : locale === 'ar'
                          ? 'الانطلاق'
                          : 'Execution'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct CTA below steps */}
        <div className="mt-12 text-center">
          <WhatsAppLink
            locale={locale}
            context="hero"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-action)] px-8 py-3.5 text-sm font-bold text-[var(--color-page)] shadow-lg shadow-[var(--color-action)]/15 transition-all hover:bg-[var(--color-action-hover)] hover:-translate-y-0.5"
          >
            <span>{locale === 'ar' ? 'ابدأ الخطوة الأولى الآن' : 'Take Step 01 Now'}</span>
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
