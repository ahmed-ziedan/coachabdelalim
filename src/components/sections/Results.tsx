import Image from "next/image";
import { Play, Sparkles, ShieldAlert, Award } from "lucide-react";
import type { Locale } from "@/config/locales";
import { siteContent } from "@/content/site";
import {
  coachPhotos,
  heroMedia,
  getApprovedTransformations,
} from "@/content/media";

interface ResultsProps {
  locale: Locale;
}

export function Results({ locale }: ResultsProps) {
  const content = siteContent.results;
  const approvedTransformations = getApprovedTransformations();
  const videoSrc = heroMedia.videoMp4;

  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="relative border-b border-[var(--color-surface-muted)] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
            {locale === "ar"
              ? "التدريب على أرض الواقع"
              : "Authentic Training & Technique"}
          </span>
          <h2
            id="results-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {locale === "ar"
              ? "أداء حقيقي وتقنية مظبوطة"
              : "Real Form, Real Discipline"}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {locale === "ar"
              ? "شاهد أسلوب كوتش عبدالعليم في توجيه التكنيك الصحيح وشرح الميكانيكا الحيوية لتمارين القوة."
              : "See Coach Abdelalim in action, emphasizing proper biomechanics and safe execution."}
          </p>
        </div>

        {/* Video & Media Showcase Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          {/* Main Technique Reel Video (Desktop: 7 cols) */}
          {videoSrc && (
            <div className="relative overflow-hidden rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] shadow-2xl lg:col-span-7">
              <div className="relative aspect-[9/16] max-h-[580px] w-full mx-auto bg-black flex items-center justify-center">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/media/coach/coach-gym-pose.jpg"
                  className="h-full w-full object-contain"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Caption Bar */}
              <div className="p-4 sm:p-5 border-t border-[var(--color-surface-muted)] bg-[var(--color-page)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[var(--color-action)]/10 p-2 text-[var(--color-action)]">
                    <Play className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[var(--color-text)]">
                      {locale === "ar"
                        ? "شرح تكنيك الـDeadlift بطريقة صحيحة 100%"
                        : "Deadlift Technique & Biomechanics Breakdown"}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {locale === "ar"
                        ? "تعليم الأداء السليم وتفادي أخطاء الإصابات في التمارين المركبة"
                        : "Executing compound lifts with safety and optimal motor control"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Training Gallery Column (Desktop: 5 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {coachPhotos.slice(1, 3).map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-surface)] shadow-lg"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 inset-x-3 text-start">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-condensed font-bold uppercase tracking-wider text-[var(--color-action)] backdrop-blur-md">
                      <Sparkles className="h-3 w-3" />
                      {locale === "ar" ? "انضباط رياضي" : "ATHLETIC DEDICATION"}
                    </span>
                    <p className="mt-1 text-xs font-semibold text-white">
                      {photo.alt[locale]}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Credibility Box */}
            <div className="rounded-2xl border border-[var(--color-surface-muted)] bg-[var(--color-page)] p-5 text-start">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[var(--color-action)]/10 p-2 text-[var(--color-action)]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-text)]">
                    {locale === "ar"
                      ? "التزام تام بالمصداقية والأمانة"
                      : "Commitment to Authentic Coaching"}
                  </h4>
                  <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                    {locale === "ar"
                      ? "لا ننشر تحولات غير مصرح بها أو وعود غير واقعية؛ تركيزنا على النتائج المستدامة."
                      : "We never publish unverified transformations; coaching focuses on sustainable progression."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* If client transformations with verified consent arrive later, render them here */}
        {approvedTransformations.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {approvedTransformations.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-[var(--color-surface-muted)] p-4"
              >
                <p className="text-sm font-semibold">{item.alt[locale]}</p>
              </div>
            ))}
          </div>
        )}

        {/* Mandatory Legal & Ethical Disclaimer per Brief */}
        <div className="mt-12 flex items-center justify-center gap-2 text-center text-xs text-[var(--color-text-muted)]">
          <ShieldAlert className="h-4 w-4 text-[var(--color-action)]/60 shrink-0" />
          <p>{content.disclaimer[locale]}</p>
        </div>
      </div>
    </section>
  );
}
