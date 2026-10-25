import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Globe2, Sparkles } from "lucide-react";
import type { Locale } from "@/config/locales";
import { siteContent } from "@/content/site";
import { heroMedia } from "@/content/media";
import { getCoachName } from "@/config/brand";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const content = siteContent.hero;
  const coachName = getCoachName(locale);
  const posterSrc =
    heroMedia.posterDesktop || "/media/coach/coach-about-portrait.webp";

  return (
    <section
      id="hero"
      aria-label={locale === "ar" ? "القسم الرئيسي" : "Hero section"}
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden border-b border-[var(--color-surface-muted)] py-12 lg:py-20 radial-glow-hero"
    >
      {/* Background ambient lighting accents */}
      <div
        className="pointer-events-none absolute -top-40 inset-x-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--color-action)]/5 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-16">
          {/* Text Content Column (Desktop: 7 cols) */}
          <div className="order-2 flex flex-col text-start lg:order-1 lg:col-span-7">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/80 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-action)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-action)]" />
              </span>
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
                {content.overline[locale]}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-black tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-[1.12]">
              {locale === "ar" ? (
                <>
                  خطة{" "}
                  <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-[var(--color-text)] via-[var(--color-text-muted)] to-[var(--color-action)] bg-clip-text text-transparent">
                    تناسبك. ونتيجة تستاهلها.
                  </span>
                </>
              ) : (
                <>
                  A plan that{" "}
                  <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-[var(--color-text)] via-[var(--color-text-muted)] to-[var(--color-action)] bg-clip-text text-transparent">
                    fits you. Results you deserve.
                  </span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg leading-relaxed">
              {content.subheadline[locale]}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppLink
                locale={locale}
                context="hero"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-action)] px-7 py-3.5 text-sm font-black text-[var(--color-page)] shadow-xl shadow-[var(--color-action)]/15 transition-all hover:bg-[var(--color-action-hover)] hover:shadow-2xl hover:shadow-[var(--color-action)]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{content.ctaPrimary[locale]}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
              </WhatsAppLink>

              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)]/60 px-6 py-3.5 text-sm font-bold text-[var(--color-text)] backdrop-blur-md transition-all hover:border-[var(--color-action)]/60 hover:text-[var(--color-action)] hover:-translate-y-0.5"
              >
                <span>{content.ctaSecondary[locale]}</span>
              </a>
            </div>

            {/* Availability & Reassurance */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[var(--color-surface-muted)]/60 pt-6 text-xs text-[var(--color-text-muted)]">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-[var(--color-action)] shrink-0" />
                <span>{content.availability[locale]}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-action)] shrink-0" />
                <span>
                  {locale === "ar"
                    ? "بدون التزام مسبق - استشارة أولية مجانية"
                    : "Zero commitment — Free initial consult"}
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Visual Anchor Column (Desktop: 5 cols) */}
          <div className="order-1 relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none lg:col-span-5">
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] shadow-2xl shadow-black/80">
              {/* Aspect Ratio Container for Coach Media */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={posterSrc}
                  alt={heroMedia.alt[locale]}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-102"
                />

                {/* Cinematic Vignette Overlays */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-page)] via-transparent to-black/30"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"
                  aria-hidden="true"
                />

                {/* Top Floating Badge */}
                <div className="absolute top-4 inset-x-4 flex justify-between items-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-condensed font-bold uppercase tracking-wider text-[var(--color-action)] backdrop-blur-md border border-white/10">
                    <Sparkles className="h-3 w-3" />
                    <span>BODYBUILDING SPECIALIST</span>
                  </span>
                </div>

                {/* Bottom Floating Coach Identity Card */}
                <div className="absolute bottom-4 inset-x-4 rounded-2xl border border-white/10 bg-[var(--color-page)]/85 p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-[var(--color-text)]">
                        {coachName}
                      </h2>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {locale === "ar"
                          ? "خبرة عملية • متابعة شخصية مستمرة"
                          : "Hands-on experience • Dedicated personal coaching"}
                      </p>
                    </div>
                    <div className="rounded-xl bg-[var(--color-action)]/10 border border-[var(--color-action)]/20 px-2.5 py-1 text-center shrink-0">
                      <span className="font-condensed text-xs font-black text-[var(--color-action)]">
                        100%
                      </span>
                      <span className="block text-[9px] uppercase tracking-wider text-[var(--color-action)] font-condensed">
                        {locale === "ar" ? "التزام" : "DEDICATION"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow behind card */}
            <div
              className="pointer-events-none absolute -bottom-6 -inset-x-6 -z-10 h-32 bg-[var(--color-action)]/10 blur-2xl rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
