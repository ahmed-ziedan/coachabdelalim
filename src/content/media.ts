import type { Localized } from "@/config/locales";

// ─── Media asset types ───
// All media referenced on the page is declared here with consent status.
// No transformation or client media renders unless consent is 'approved'.

export type ConsentStatus = "approved" | "pending" | "rejected";

export type HeroMedia = {
  /** Desktop hero poster — real coach photo */
  posterDesktop?: string;
  /** Mobile hero poster — art-directed crop */
  posterMobile?: string;
  /** Alt text for hero image */
  alt: Localized;
  /** Optional hero / technique video (MP4) */
  videoMp4?: string;
  /** Optional hero video (WebM) */
  videoWebm?: string;
};

export type CoachPhoto = {
  id: string;
  src: string;
  alt: Localized;
  caption?: Localized;
};

export type Transformation = {
  id: string;
  enabled: boolean;
  consent: ConsentStatus;
  beforeSrc: string;
  afterSrc: string;
  alt: Localized;
  caption?: Localized;
};

export type TransformationSlide = {
  id: string;
  src: string;
  alt: Localized;
  enabled: boolean;
  consent: ConsentStatus;
};

// ─── Media configuration ───

export const heroMedia: HeroMedia = {
  posterDesktop: '/media/coach/coach-about-portrait.webp',
  posterMobile: '/media/coach/coach-about-portrait.webp',
  alt: {
    ar: "كوتش عبدالعليم — مدرب شخصي متخصص في كمال الأجسام والتدريب البدني",
    en: "Coach Abdelalim — Bodybuilding Specialist and Personal Trainer",
  },
  videoMp4: "/media/coach/coach-deadlift-technique.mp4",
  videoWebm: undefined,
};

export const coachPhotos: CoachPhoto[] = [
  {
    id: "portrait-gym",
    src: "/media/coach/coach-about-portrait.webp",
    alt: {
      ar: "كوتش عبدالعليم داخل الجيم بجوار الأوزان",
      en: "Coach Abdelalim in the gym next to weights",
    },
    caption: {
      ar: "خبرة عملية وتدريب حقيقي داخل الصالة الرياضية",
      en: "Hands-on gym experience and real coaching",
    },
  },
  {
    id: "physique-intense",
    src: "/media/coach/coach-physique-intense.jpg",
    alt: {
      ar: "كوتش عبدالعليم — اللياقة والقوة البدنية",
      en: "Coach Abdelalim — strength and conditioning",
    },
    caption: {
      ar: "انضباط والتزام بالنتائج",
      en: "Discipline and dedication to results",
    },
  },
  {
    id: "gym-daylight",
    src: "/media/coach/coach-gym-daylight.jpg",
    alt: {
      ar: "كوتش عبدالعليم في صالة التدريب",
      en: "Coach Abdelalim in training facility",
    },
  },
  {
    id: "gym-pose",
    src: "/media/coach/coach-gym-pose.jpg",
    alt: {
      ar: "كوتش عبدالعليم في وضعية استعراض العضلات",
      en: "Coach Abdelalim bodybuilding pose",
    },
  },
];

/**
 * Client transformations: Kept empty until explicit written client consent is delivered.
 * Guardrail: No fake or unverified transformation photos are displayed.
 */
export const transformations: Transformation[] = [];

/** Consent-cleared transformation collages shown in the dedicated carousel. */
export const transformationSlides: TransformationSlide[] = [
  {
    id: "transformation-1",
    src: "/media/Transformation/احمد.jpeg",
    alt: {
      ar: "صور قبل وبعد توضح رحلة تحول بدني لمتدرب",
      en: "Before and after photos showing a trainee's physique transformation",
    },
    enabled: true,
    consent: "approved",
  },
  {
    id: "transformation-2",
    src: "/media/Transformation/حليم.jpeg",
    alt: {
      ar: "صور توضح مراحل التقدم البدني لمتدرب",
      en: "Photos showing a trainee's physical progress",
    },
    enabled: true,
    consent: "approved",
  },
  {
    id: "transformation-3",
    src: "/media/Transformation/سيف.jpeg",
    alt: {
      ar: "صور قبل وبعد لتقدم متدرب في رحلته الرياضية",
      en: "Before and after photos from a trainee's fitness journey",
    },
    enabled: true,
    consent: "approved",
  },
  {
    id: "transformation-4",
    src: "/media/Transformation/عبدالعليم نفسه.jpeg",
    alt: {
      ar: "صور توضح مراحل التقدم البدني لكوتش عبدالعليم",
      en: "Photos showing Coach Abdelalim's physical progress",
    },
    enabled: true,
    consent: "approved",
  },
  {
    id: "transformation-5",
    src: "/media/Transformation/كريم.jpeg",
    alt: {
      ar: "صور قبل وبعد توضح رحلة التقدم البدني لمتدرب",
      en: "Before and after photos showing a trainee's physical progress",
    },
    enabled: true,
    consent: "approved",
  },
  {
    id: "transformation-6",
    src: "/media/Transformation/محمود.jpeg",
    alt: {
      ar: "صور قبل وبعد توضح رحلة التقدم البدني لمتدرب",
      en: "Before and after photos showing a trainee's physical progress",
    },
    enabled: true,
    consent: "approved",
  },
];

/**
 * Get consent-approved transformations only.
 */
export function getApprovedTransformations(): Transformation[] {
  return transformations.filter(
    (t) => t.enabled && t.consent === "approved" && t.beforeSrc && t.afterSrc,
  );
}

export function getApprovedTransformationSlides(): TransformationSlide[] {
  return transformationSlides.filter(
    (slide) => slide.enabled && slide.consent === "approved" && slide.src,
  );
}

/**
 * Check if hero poster is available.
 */
export function hasHeroPoster(): boolean {
  return Boolean(heroMedia.posterDesktop);
}
