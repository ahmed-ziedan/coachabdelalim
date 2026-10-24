import Link from "next/link";
import { MessageSquare, MapPin, Globe, Sparkles } from "lucide-react";
import type { Locale } from "@/config/locales";
import { getCoachName, brand } from "@/config/brand";
import { getAlternateLocale, getLocalePath } from "@/config/locales";
import { siteContent } from "@/content/site";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { CurrentYear } from "@/components/ui/CurrentYear";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const coachName = getCoachName(locale);
  const alternateLocale = getAlternateLocale(locale);
  const switchLabel = locale === "ar" ? "English (EN)" : "العربية (AR)";
  const switchHref = getLocalePath(alternateLocale);
  const homeHref = getLocalePath(locale);

  const validSocials = brand.socials.filter(
    (s) => s.href && s.href.startsWith("https://"),
  );

  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-surface-muted)] bg-[var(--color-surface)] py-14 text-[var(--color-text-muted)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 items-start">
          {/* Brand info (Desktop: 5 cols) */}
          <div className="flex flex-col text-start md:col-span-5">
            <Link href={homeHref} className="group">
              <span className="text-xl font-black text-[var(--color-text)] transition-colors group-hover:text-[var(--color-action)]">
                {coachName}
              </span>
              <span className="block text-[11px] font-condensed font-bold uppercase tracking-widest text-[var(--color-action)]">
                BODYBUILDING & PERSONAL TRAINING
              </span>
            </Link>

            <p className="mt-4 text-xs leading-relaxed max-w-sm text-[var(--color-text-muted)]">
              {locale === "ar"
                ? "تدريب شخصي متخصص ومتابعة فردية لبناء جسم أقوى بخطة واقعية وقابلة للاستمرار."
                : "Structured, bodybuilding-focused personal coaching helping clients build sustainable strength and physique."}
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {siteContent.footer.locationLabel[locale]}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {siteContent.footer.onlineLabel[locale]}
              </span>
            </div>
          </div>

          {/* Quick Links (Desktop: 3 cols) */}
          <div className="flex flex-col text-start md:col-span-3">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
              {locale === "ar" ? "أقسام الصفحة" : "Navigation"}
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-[var(--color-action)]"
                >
                  {locale === "ar" ? "عن الكوتش" : "About the Coach"}
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="transition-colors hover:text-[var(--color-action)]"
                >
                  {locale === "ar" ? "مسارات التدريب" : "Coaching Outcomes"}
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="transition-colors hover:text-[var(--color-action)]"
                >
                  {locale === "ar" ? "التدريب العملي" : "Real Technique"}
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="transition-colors hover:text-[var(--color-action)]"
                >
                  {locale === "ar"
                    ? "الباقات والاستشارة"
                    : "Plans & Consultation"}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Callout & Language switch (Desktop: 4 cols) */}
          <div className="flex flex-col text-start md:col-span-4">
            <span className="text-xs font-condensed font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
              {locale === "ar" ? "حجز موعد" : "Get in Touch"}
            </span>
            <p className="text-xs text-[var(--color-text-muted)] mb-4">
              {locale === "ar"
                ? "استشارة أولية مجانية عبر واتساب بدون التزام."
                : "Direct free consultation on WhatsApp with zero obligation."}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <WhatsAppLink
                locale={locale}
                context="footer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-action)] px-4 py-2.5 text-xs font-bold text-[var(--color-page)] shadow-md shadow-[var(--color-action)]/15 transition-all hover:bg-[var(--color-action-hover)]"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>{siteContent.footer.ctaLabel[locale]}</span>
              </WhatsAppLink>

              <Link
                href={switchHref}
                hrefLang={alternateLocale}
                className="rounded-xl border border-[var(--color-surface-muted)] px-3 py-2 text-xs font-condensed font-bold text-[var(--color-text)] hover:border-[var(--color-action)]"
              >
                {switchLabel}
              </Link>
            </div>

            {validSocials.length > 0 && (
              <div className="mt-4 flex items-center gap-3 text-xs">
                {validSocials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-action)]"
                  >
                    {social.label[locale]}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-[var(--color-surface-muted)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <p>
            © <CurrentYear /> {coachName}.{" "}
            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3 w-3 text-[var(--color-action)]" />
            <span className="font-condensed uppercase tracking-wider text-[11px]">
              Developed by Ahmed Ziedan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
