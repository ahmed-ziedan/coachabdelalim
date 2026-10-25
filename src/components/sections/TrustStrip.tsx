import { Award, Dumbbell, Globe, ShieldCheck } from "lucide-react";
import type { Locale } from "@/config/locales";

interface TrustStripProps {
  locale: Locale;
}

export function TrustStrip({ locale }: TrustStripProps) {
  const trustPoints = [
    {
      metric: "03",
      unit: locale === "ar" ? "سنوات" : "Years",
      label: locale === "ar" ? "خبرة عملية موثوقة" : "Hands-on Experience",
      icon: Award,
    },
    {
      metric: "SPEC",
      unit: "Bodybuilding",
      label:
        locale === "ar"
          ? "تخصص كمال أجسام وتدريب بدني"
          : "Specialized Physique Coaching",
      icon: Dumbbell,
    },
    {
      metric: "Global",
      unit: "Online",
      label:
        locale === "ar"
          ? "متابعة أونلاين بمصر ودولياً"
          : "Worldwide Remote Support",
      icon: Globe,
    },
    {
      metric: "100%",
      unit: locale === "ar" ? "التزام" : "Dedication",
      label:
        locale === "ar" ? "متابعة فردية غير معلبة" : "Individual Client Care",
      icon: ShieldCheck,
    },
  ];

  return (
    <section
      aria-label={
        locale === "ar" ? "نقاط القوة والمصداقية" : "Trust and credibility"
      }
      className="relative z-10 border-b border-[var(--color-surface-muted)] bg-[var(--color-surface)]/60 backdrop-blur-md py-8"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-page)]/80 p-4 transition-all duration-300 hover:border-[var(--color-action)]/40 hover:bg-[var(--color-surface)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-condensed text-2xl font-black text-[var(--color-action)] tracking-tight">
                    {item.metric}
                  </span>
                  <div className="rounded-lg bg-[var(--color-surface-muted)]/80 p-2 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-action)]">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3 text-start">
                  <span className="block font-condensed text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                    {item.unit}
                  </span>
                  <span className="mt-0.5 block text-xs text-[var(--color-text-muted)] line-clamp-1">
                    {item.label}
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
