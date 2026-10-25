# Coach Abdelalim — Project Readiness Checklist

> **Purpose:** Track all required owner-provided inputs and assets before production launch.  
> **Status:** Phase 0 — Initial audit completed.  
> **Last updated:** 25 October 2026

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
| 1 | **WhatsApp E.164 number** | ✅ | No | Configured centrally as `201066969065`; verify the number on a physical phone before launch. |
| 2 | **Instagram URL** | ✅ | No | Configured as `https://www.instagram.com/3bd_elalim`. |
| 3 | **Facebook URL** | ⏳ 🔨 | No (hidden if absent) | Footer social link. Icon hidden until real URL is supplied. |
| 4 | **TikTok URL** | ⏳ 🔨 | No (hidden if absent) | Footer social link. Icon hidden until real URL is supplied. |
| 5 | **Approved logo / wordmark** | ⏳ 🔨 | No | Text wordmark used as temporary solution in header. Phase 1 uses text-only wordmark. |
| 6 | **Hero source media** (photo/video) | ✅ | No | Approved hero image: `coach-about-portrait.jpg`; `coach-deadlift-technique.mp4` is used in the training showcase. |
| 7 | **Gym logo files** (Heros GYM, Noamany Fitness Center) | ⏳ 🔨 | No | Not rendered until files and written permission are received. Gym names used as text only. |
| 8 | **Gym logo usage permission** | ⏳ 🔨 | No | Written confirmation required before displaying any gym logo. |
| 9 | **Transformation media** (before/after) | ⏳ 🔨 | No | Client results gallery hidden until consent-approved assets arrive. Authentic coach training media showcased instead. |
| 10 | **Transformation client consent** | ⏳ 🔨 | No | Each asset needs documented `approved` consent status. Section hidden if none approved. |
| 11 | **Final package data** (names, prices, currency, period, features, exclusions) | ⏳ 🔨 | No | Three editable enquiry plans are configured; prices and service features remain pending approval. |
| 12 | **Font files** (Arabic Thmanyah / English IBM Plex Sans) | ✅ | No | Arabic uses local Thmanyah families; English uses local IBM Plex Sans with explicit weights. |
| 13 | **Font licence confirmation** | ⏳ 🔨 | No | Web-delivery interpretation of the Thmanyah licence must be confirmed before production font loading. Fallback active. |
| 14 | **Display font choice** | ✅ | No | Thmanyah Serif Display is used for display labels and numerals. |
| 15 | **Production domain** | ✅ | No | Current canonical URL: `https://abdelalim.pages.dev`; override with `NEXT_PUBLIC_SITE_URL` after purchasing a custom domain. |
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
- ✅ Local Thmanyah Sans and Serif font setup with explicit weights
- ✅ Global styles, RTL/LTR foundations
- ✅ Shared layout with `lang`/`dir` per locale
- ✅ Skip link, Header shell, Footer shell, section placeholder components
- ✅ Lint, typecheck, test, and build pipeline
- ✅ Unit tests for locale helpers, WhatsApp URL, content validation
- ✅ All draft bilingual copy from the PROJECT_BRIEF (marked as draft)

## Remaining before production launch

The WhatsApp number, Instagram profile, selected hero image, and current Cloudflare Pages URL are configured. A custom domain can replace the current canonical URL later. Package prices and service details remain in enquiry mode until approved; social links without URLs and transformations without consent remain hidden.

## Owner action items

> **None of the items below block Phase 1 development.** They are needed before production launch.

1. Verify the configured WhatsApp number on a physical phone
2. Provide Facebook and TikTok profile URLs if they should appear
3. Provide gym logo files and confirm written permission to display them
4. Provide transformation before/after images with documented client consent
5. Confirm package prices, service features, and exclusions; edit the three plans in `src/content/packages.ts`
6. Confirm web-use licensing for the local Thmanyah fonts
7. Approve or decline lightweight analytics (Vercel Analytics or Plausible)
