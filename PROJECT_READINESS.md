# Coach Abdelalim — Project Readiness Checklist

> **Purpose:** Track all required owner-provided inputs and assets before production launch.  
> **Status:** Phase 0 — Initial audit completed.  
> **Last updated:** 24 October 2026

## Status legend

| Symbol | Meaning |
| --- | --- |
| ✅ | Available and confirmed |
| ⏳ | Pending — owner action required |
| 🔨 | Safe to build around now (non-blocking for Phase 1) |
| 🚫 | Blocks production deploy |

## Required inputs

| # | Input | Status | Blocks production? | Notes |
| --- | --- | --- | --- | --- |
| 1 | **WhatsApp E.164 number** | ⏳ 🔨 | 🚫 Yes | Every conversion CTA requires a validated number. Phase 1 uses a typed config placeholder with dev-mode warning. Production build will fail without it. |
| 2 | **Instagram URL** | ⏳ 🔨 | No (hidden if absent) | Footer social link. Icon hidden until real URL is supplied. |
| 3 | **Facebook URL** | ⏳ 🔨 | No (hidden if absent) | Footer social link. Icon hidden until real URL is supplied. |
| 4 | **TikTok URL** | ⏳ 🔨 | No (hidden if absent) | Footer social link. Icon hidden until real URL is supplied. |
| 5 | **Approved logo / wordmark** | ⏳ 🔨 | No | Text wordmark used as temporary solution in header. Phase 1 uses text-only wordmark. |
| 6 | **Hero source media** (photo/video) | ✅ | No | Integrated: `coach-hero-cinematic.jpg` used as hero anchor, `coach-deadlift-technique.mp4` integrated in training showcase. |
| 7 | **Gym logo files** (Heros GYM, Noamany Fitness Center) | ⏳ 🔨 | No | Not rendered until files and written permission are received. Gym names used as text only. |
| 8 | **Gym logo usage permission** | ⏳ 🔨 | No | Written confirmation required before displaying any gym logo. |
| 9 | **Transformation media** (before/after) | ⏳ 🔨 | No | Client results gallery hidden until consent-approved assets arrive. Authentic coach training media showcased instead. |
| 10 | **Transformation client consent** | ⏳ 🔨 | No | Each asset needs documented `approved` consent status. Section hidden if none approved. |
| 11 | **Final package data** (names, prices, currency, period, features, exclusions) | ⏳ 🔨 | No | Plans section renders in enquiry/discovery mode until approved data is provided. No prices, features, or fake data shown. |
| 12 | **Font files** (Thmanyah Sans / Thmanyah Serif Display) | ⏳ 🔨 | No | IBM Plex Sans Arabic and Barlow Condensed integrated via next/font; Thmanyah web files can be swapped when delivered. |
| 13 | **Font licence confirmation** | ⏳ 🔨 | No | Web-delivery interpretation of the Thmanyah licence must be confirmed before production font loading. Fallback active. |
| 14 | **Latin display font choice** (Barlow Condensed vs Bebas Neue) | ✅ | No | Barlow Condensed integrated for condensed athletic numerals and labels. |
| 15 | **Production domain** | ⏳ 🔨 | 🚫 Yes | Required for canonical URLs, sitemap, hreflang, and OG metadata. Set via `NEXT_PUBLIC_SITE_URL` env var. |
| 16 | **Coach professional photos** (high-res originals) | ✅ | No | High-res gym portraits integrated in Hero, About, and Technique Showcase. |
| 17 | **Coach reel / speaking-to-camera video** | ✅ | No | Deadlift technique coaching reel (`coach-deadlift-technique.mp4`) integrated. |
| 18 | **Analytics approval** | ⏳ 🔨 | No | No analytics in v1 unless owner explicitly approves. |

## What is safe to proceed with now

The following can be built **immediately** without any owner inputs:

- ✅ Next.js App Router project bootstrap (TypeScript, ESLint, Tailwind CSS)
- ✅ Locale routing (`/` Arabic RTL, `/en` English LTR, `/ar` redirect)
- ✅ Typed content model, config layer, and bilingual dictionaries
- ✅ WhatsApp URL utility (with validated-number check, locale-aware messages)
- ✅ Content validation gate (dev warnings vs production build failures)
- ✅ Design tokens (color system, spacing, radius)
- ✅ Font fallback strategy (system fonts until licensed files arrive)
- ✅ Global styles, RTL/LTR foundations
- ✅ Shared layout with `lang`/`dir` per locale
- ✅ Skip link, Header shell, Footer shell, section placeholder components
- ✅ Lint, typecheck, test, and build pipeline
- ✅ Unit tests for locale helpers, WhatsApp URL, content validation
- ✅ All draft bilingual copy from the PROJECT_BRIEF (marked as draft)

## What blocks production (not Phase 1)

Production deployment requires **at minimum**:

1. A valid WhatsApp E.164 number
2. A hero poster image (real coach photo, art-directed crops)
3. A confirmed production domain

All other items degrade gracefully: social links are hidden, packages show enquiry mode, transformations are hidden, and fonts fall back to system stack.

## Owner action items

> **None of the items below block Phase 1 development.** They are needed before production launch.

1. Provide the WhatsApp number in E.164 format (digits only, e.g., `201234567890`)
2. Provide Instagram, Facebook, and TikTok profile URLs
3. Deliver high-resolution coach photos and select a hero image
4. Deliver the speaking-to-camera reel (if desired for About section)
5. Provide gym logo files and confirm written permission to display them
6. Provide transformation before/after images with documented client consent
7. Confirm final package names, prices (currency + period), features, and exclusions
8. Deliver original Thmanyah font files and confirm web-use licence interpretation
9. Decide on a production domain
10. Approve or decline lightweight analytics (Vercel Analytics or Plausible)
