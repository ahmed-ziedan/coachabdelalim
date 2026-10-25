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

// ─── Media configuration ───

export const heroMedia: HeroMedia = {
  posterDesktop: '/media/coach/coach-about-portrait.jpg',
  posterMobile: '/media/coach/coach-about-portrait.jpg',
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
    src: "/media/coach/coach-about-portrait.jpg",
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

/**
 * Get consent-approved transformations only.
 */
export function getApprovedTransformations(): Transformation[] {
  return transformations.filter(
    (t) => t.enabled && t.consent === "approved" && t.beforeSrc && t.afterSrc,
  );
}

/**
 * Check if hero poster is available.
 */
export function hasHeroPoster(): boolean {
  return Boolean(heroMedia.posterDesktop);
}
