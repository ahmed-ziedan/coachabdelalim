"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Pause,
  Play,
} from "lucide-react";
import type { Locale } from "@/config/locales";
import { getApprovedTransformationSlides } from "@/content/media";

interface TransformationCarouselProps {
  locale: Locale;
}

const AUTO_ADVANCE_MS = 6000;

export function TransformationCarousel({ locale }: TransformationCarouselProps) {
  const slides = getApprovedTransformationSlides();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isArabic = locale === "ar";

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || slides.length < 2) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, [slides.length]);

  useEffect(() => {
    if (slides.length < 2 || isPaused || isHovered || !isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isHovered, isPaused, isVisible, slides.length]);

  if (slides.length === 0) return null;

  const previousIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextIndex = (activeIndex + 1) % slides.length;
  const PreviousIcon = isArabic ? ChevronRight : ChevronLeft;
  const NextIcon = isArabic ? ChevronLeft : ChevronRight;

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      id="transformations"
      aria-labelledby="transformations-heading"
      className="relative border-b border-[var(--color-surface-muted)] bg-[var(--color-surface)]/30 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
            {isArabic ? "قصص نجاح" : "Real Progress"}
          </span>
          <h2
            id="transformations-heading"
            className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl"
          >
            {isArabic ? "رحلات تغيير حقيقية" : "Real Transformation Journeys"}
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-muted)]">
            {isArabic
              ? "كل رحلة مختلفة، والنتيجة تبدأ بخطة مناسبة واستمرارية في التدريب."
              : "Every journey is different. Progress starts with a suitable plan and consistent training."}
          </p>
        </div>

        <div
          className="mx-auto mt-12 max-w-5xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className="grid overflow-hidden rounded-3xl border border-[var(--color-surface-muted)] bg-[var(--color-page)] shadow-2xl lg:grid-cols-[1.05fr_0.95fr]"
            role="group"
            aria-roledescription={isArabic ? "شريحة" : "slide"}
            aria-label={`${activeIndex + 1} ${isArabic ? "من" : "of"} ${slides.length}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-surface)] lg:aspect-auto lg:min-h-[420px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"}`}
                  aria-hidden={index !== activeIndex}
                >
                  <Image
                    src={slide.src}
                    alt={index === activeIndex ? slide.alt[locale] : ""}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain p-2 sm:p-4"
                  />
                </div>
              ))}
              <span className="absolute start-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:start-6 sm:top-6">
                <Dumbbell className="h-3.5 w-3.5 text-[var(--color-action)]" />
                {isArabic ? "قبل وبعد" : "Before & After"}
              </span>
            </div>

            <div className="flex flex-col justify-center p-6 text-start sm:p-9 lg:p-10">
              <span className="font-condensed text-xs font-bold uppercase tracking-widest text-[var(--color-action)]">
                {isArabic ? "رحلة تدريب" : "A Coaching Journey"}
              </span>
              <h3 className="mt-3 text-2xl font-black leading-snug text-[var(--color-text)] sm:text-3xl">
                {isArabic
                  ? "التغيير الحقيقي بيتبني خطوة بخطوة"
                  : "Real change is built one step at a time"}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                {isArabic
                  ? "صور من رحلات تدريب مختلفة، بتفاصيلها وظروفها الخاصة. مفيش طريق واحد يناسب الكل."
                  : "A look at different training journeys, each with its own circumstances. There is no one-size-fits-all path."}
              </p>
              <p className="mt-5 border-s-2 border-[var(--color-action)] ps-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
                {isArabic
                  ? "النتائج تختلف حسب الالتزام، نقطة البداية، والظروف الفردية."
                  : "Results vary based on commitment, starting point, and individual circumstances."}
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(previousIndex)}
                aria-label={isArabic ? "الصورة السابقة" : "Previous transformation"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-surface-muted)] bg-[var(--color-page)] text-[var(--color-text)] transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
              >
                <PreviousIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(nextIndex)}
                aria-label={isArabic ? "الصورة التالية" : "Next transformation"}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-surface-muted)] bg-[var(--color-page)] text-[var(--color-text)] transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
              >
                <NextIcon className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                aria-label={
                  isPaused
                    ? isArabic
                      ? "تشغيل العرض التلقائي"
                      : "Resume automatic rotation"
                    : isArabic
                      ? "إيقاف العرض التلقائي مؤقتًا"
                      : "Pause automatic rotation"
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-surface-muted)] bg-[var(--color-page)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-action)] hover:text-[var(--color-action)]"
              >
                {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5" role="group" aria-label={isArabic ? "اختيار صورة" : "Choose a transformation"}>
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${isArabic ? "الصورة" : "Slide"} ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[var(--color-action)]" : "w-2.5 bg-[var(--color-surface-muted)] hover:bg-[var(--color-text-muted)]"}`}
                />
              ))}
            </div>

            <span className="min-w-12 text-end font-condensed text-sm font-bold tabular-nums text-[var(--color-text-muted)]" aria-hidden="true">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
