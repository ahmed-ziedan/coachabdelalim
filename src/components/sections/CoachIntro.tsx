import Image from "next/image";
import { GraduationCap, Dumbbell, Sparkles, Check } from "lucide-react";
import type { Locale } from "@/config/locales";
import { siteContent } from "@/content/site";
import { brand } from "@/config/brand";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

interface CoachIntroProps {
  locale: Locale;
}

export function CoachIntro({ locale }: CoachIntroProps) {
  const content = siteContent.about;
  const facts = brand.facts;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden border-b border-[var(--color-surface-muted)] py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Column with Authentic Gym Portrait (5 cols) */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] shadow-2xl">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/media/coach/coach-hero-cinematic.jpg"
                  alt={
                    locale === "ar"
                      ? "كوتش عبدالعليم في صالة التدريب"
                      : "Coach Abdelalim in training facility"
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-top"
                />
                {/* Gradient shading */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-page)] via-transparent to-black/20"
                  aria-hidden="true"
                />

                {/* Gym Experience Badge overlay */}
                <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/10 bg-[var(--color-page)]/90 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-[var(--color-action)]/10 p-2.5 text-[var(--color-action)]">
                      <Dumbbell className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block font-condensed text-[11px] font-bold uppercase tracking-wider text-[var(--color-action)]">
                        {locale === "ar"
                          ? "خبرة ميدانية بصالات كبرى"
                          : "Major Gym Coaching"}
                      </span>
                      <span className="text-xs font-semibold text-[var(--color-text)]">
                        Heros GYM • Noamany Fitness Center
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle backlight */}
            <div
              className="pointer-events-none absolute -top-8 -inset-x-8 -z-10 h-40 bg-[var(--color-action)]/5 blur-3xl rounded-full"
              aria-hidden="true"
            />
          </div>

          {/* Text and Qualifications Column (7 cols) */}
          <div className="flex flex-col text-start lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[var(--color-surface-muted)] bg-[var(--color-surface)] px-3.5 py-1 text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-action)]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{locale === "ar" ? "عن الكوتش" : "About the Coach"}</span>
            </div>

            {/* Section Title */}
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl leading-tight"
            >
              {content.headline[locale]}
            </h2>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-text-muted)]">
              <p>
                {locale === "ar"
                  ? "أنا كوتش عبدالعليم، مدرب شخصي متخصص في الـBodybuilding. بخبرتي في التدريب الميداني وشغلي داخل Heros GYM وNoamany Fitness Center، بساعدك تبني برنامج واقعي يناسب هدفك ومستواك الحقيقي."
                  : "I'm Coach Abdelalim, a personal trainer specializing in bodybuilding. Through hands-on experience at Heros GYM and Noamany Fitness Center, I help you build a structured, realistic program tailored to your actual level and lifestyle."}
              </p>
              <p>
                {locale === "ar"
                  ? "كل متدرب له ظروفه وطريقته في الالتزام؛ علشان كده المتابعة مش قالب معلب بيتوزع على الجميع. التركيز كله على الاستمرارية والأداء الحركي السليم لتحقيق أقصى نتيجة بأمان تام."
                  : "Every trainee has unique circumstances and commitments; that's why coaching is never a one-size-fits-all template. The focus is entirely on consistency, correct movement biomechanics, and achieving peak results safely."}
              </p>
            </div>

            {/* Academic & Professional Credibility Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/70 p-3.5">
                <GraduationCap className="h-5 w-5 text-[var(--color-action)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {locale === "ar" ? "المؤهل العلمي" : "Academic Education"}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-text)]">
                    {facts.education[locale]}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/70 p-3.5">
                <Dumbbell className="h-5 w-5 text-[var(--color-action)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] font-condensed font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {locale === "ar" ? "التخصص الرئيسي" : "Core Specialty"}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-text)]">
                    {facts.specialty[locale]}
                  </span>
                </div>
              </div>
            </div>

            {/* Value checklist */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {locale === "ar"
                  ? "تصحيح أداء وتقنية التمرين"
                  : "Exercise form and technique review"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {locale === "ar"
                  ? "متابعة دورية مباشرة"
                  : "Direct accountability and check-ins"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {locale === "ar"
                  ? "خطط مرنة تناسب جدولك"
                  : "Flexible plans built for your schedule"}
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <WhatsAppLink
                locale={locale}
                context="hero"
                className="inline-flex items-center justify-center rounded-xl bg-[var(--color-action)] px-6 py-3 text-sm font-bold text-[var(--color-page)] shadow-lg shadow-[var(--color-action)]/15 transition-all hover:bg-[var(--color-action-hover)] hover:-translate-y-0.5"
              >
                {locale === "ar"
                  ? "تحدث مع الكوتش الآن"
                  : "Speak with Coach Abdelalim"}
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
