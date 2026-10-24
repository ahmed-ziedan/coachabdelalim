import { Dumbbell, Flame, Target, CheckCircle } from 'lucide-react';
import type { Locale } from '@/config/locales';
import { siteContent } from '@/content/site';

interface CoachingOutcomesProps {
  locale: Locale;
}

export function CoachingOutcomes({ locale }: CoachingOutcomesProps) {
  const content = siteContent.outcomes;

  const cardsData = [
    {
      id: 'build-muscle',
      number: '01',
      icon: Dumbbell,
      title: content.cards[0].title[locale],
      description: content.cards[0].description[locale],
      points: [
        locale === 'ar' ? 'تطبيق مبادئ الـProgressive Overload' : 'Progressive overload principles',
        locale === 'ar' ? 'تركيز على التكنيك والأداء الحركي الصحيح' : 'Emphasis on proper lifting technique',
        locale === 'ar' ? 'اختيار التمارين الأنسب لبنيتك الجسدية' : 'Exercise selection matched to your anatomy',
      ],
    },
    {
      id: 'lose-fat',
      number: '02',
      icon: Flame,
      title: content.cards[1].title[locale],
      description: content.cards[1].description[locale],
      points: [
        locale === 'ar' ? 'نزول دهون صحي ومستمر بدون حرمان قاسي' : 'Sustainable fat loss without crash dieting',
        locale === 'ar' ? 'الحفاظ على الكتلة العضلية والقوة أثناء النزول' : 'Muscle and strength retention during cuts',
        locale === 'ar' ? 'تعديل الخطة باستمرار حسب استجابة جسمك' : 'Adaptive adjustments based on your progress',
      ],
    },
    {
      id: 'train-structured',
      number: '03',
      icon: Target,
      title: content.cards[2].title[locale],
      description: content.cards[2].description[locale],
      points: [
        locale === 'ar' ? 'إزالة التشتت ومعرفة كل تمرين بدقة' : 'Eliminate guesswork with clear workout plans',
        locale === 'ar' ? 'متابعة تشجعك على الاستمرار والالتزام' : 'Direct accountability to maintain consistency',
        locale === 'ar' ? 'بداية آمنة خالية من الأخطاء والإصابات' : 'Safe starting path free of injury risks',
      ],
    },
  ];

  return (
    <section
      id="coaching"
      aria-labelledby="coaching-heading"
      className="relative border-b border-[var(--color-surface-muted)] bg-[var(--color-surface)]/40 py-20 lg:py-28 radial-glow"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
            {locale === 'ar' ? 'مسارات التدريب والمخرجات' : 'Coaching Pathways & Outcomes'}
          </span>
          <h2
            id="coaching-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {content.headline[locale]}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {locale === 'ar'
              ? 'سواء كان هدفك بناء عضلات صافية، خسارة دهون، أو التأسيس بخطة واضحة؛ برنامجك بيتصمم بالكامل حولك.'
              : 'Whether your target is building lean muscle, dropping fat, or starting with structured accountability—your program is custom-engineered around you.'}
          </p>
        </div>

        {/* 3 Outcome Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cardsData.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-page)]/90 p-8 shadow-xl transition-all duration-300 hover:border-[var(--color-action)]/40 hover:-translate-y-1"
              >
                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between border-b border-[var(--color-surface-muted)]/60 pb-6">
                    <span className="font-condensed text-3xl font-black text-[var(--color-action)]">
                      {card.number}
                    </span>
                    <div className="rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] p-3 text-[var(--color-action)] transition-colors group-hover:border-[var(--color-action)]/40">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-6 text-xl font-black text-[var(--color-text)] sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {card.description}
                  </p>

                  {/* Detail Bullet Points */}
                  <ul className="mt-6 space-y-2.5 text-xs text-[var(--color-text-muted)] border-t border-[var(--color-surface-muted)]/40 pt-6">
                    {card.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-[var(--color-action)] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--color-surface-muted)]/40 text-start">
                  <span className="font-condensed text-[11px] font-bold uppercase tracking-wider text-[var(--color-action)]">
                    {locale === 'ar' ? 'متابعة دورية مستمرة' : 'Ongoing Structured Progress'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
