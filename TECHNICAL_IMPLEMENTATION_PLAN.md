# Coach Abdelalim — Technical Implementation Plan

> **Current implementation update (25 October 2026):** WhatsApp and Instagram are configured, the selected hero image is `coach-about-portrait.webp`, the current canonical URL is `https://abdelalim.pages.dev`, three editable enquiry plans are live in the content model, and local Arabic Thmanyah/English IBM Plex fonts plus sitemap/robots/metadata are implemented. Approved prices/features, consent-cleared client transformations, and deployed device/accessibility/performance QA remain open.

> **Purpose:** A build-ready technical plan for a greenfield bilingual coaching landing page.  
> **Companion brief:** [`PROJECT_BRIEF.md`](./PROJECT_BRIEF.md)  
> **Current repository state:** Empty workspace; bootstrap a new application rather than adapting an existing codebase.

## 1. Architecture decision

### Recommended stack

| Layer | Choice | Why it fits this project |
| --- | --- | --- |
| Framework | Next.js, latest stable, **App Router** | Static-first rendering, strong SEO, route-based locale support, optimized images/fonts, simple Vercel deployment |
| Language | TypeScript with strict mode | Prevent invalid locale, CTA, package and content configuration |
| Styling | Tailwind CSS v4 with CSS custom-property design tokens | Fast responsive implementation while keeping the visual system explicit |
| Components | Server Components by default; small Client Components only for interaction | Limits JavaScript on a content/conversion page |
| Animation | CSS transitions first; `motion` only if a tested interaction requires it | Avoids a large animation dependency for a mostly static page |
| Icons | `lucide-react` | Accessible SVG icons, tree-shakeable imports |
| i18n | Local typed dictionaries + locale routes | Two stable locales do not need a translation platform or runtime API |
| Images/video | `next/image`, locally hosted optimized assets; native `<video>` enhancement | Good loading behavior without third-party embeds |
| Tests | Vitest + React Testing Library; Playwright + axe scan | Covers content logic, bilingual journeys and accessibility |
| Deployment | Vercel (recommended) | Native Next.js support, image optimization, previews and straightforward domain setup |

This is deliberately **not** a CMS, an ecommerce site, or a backend project. The v1 conversion is a direct WhatsApp deep link, so adding a database, authentication, an API server, forms, payment integration or a headless CMS would add cost and failure modes with no current product need.

Official implementation references: [Next.js App Router](https://nextjs.org/docs/app), [Next.js internationalization guide](https://nextjs.org/docs/app/guides/internationalization), [Next.js font optimization](https://nextjs.org/docs/app/api-reference/components/font), and [Tailwind’s Next.js guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

### Bootstrap command

Execute once in the repository root after confirming the Node LTS version supported by the current Next.js release:

```powershell
npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"
npm install lucide-react
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @playwright/test @axe-core/playwright
npx playwright install chromium
```

Then install Tailwind using the current official Next.js guide. Do not pin outdated Tailwind v3/PostCSS snippets copied from old tutorials.

### Browser support baseline

Support the current and previous major versions of Chrome, Edge, Firefox and Safari; Android Chrome and iOS Safari. The page must still convey all content/CTAs if advanced features (autoplay video, IntersectionObserver, backdrop-filter, reduced-motion preference) are unsupported.

## 2. Routes and locale model

### Public URLs

| URL | Locale | Direction | Purpose |
| --- | --- | --- | --- |
| `/` | Arabic | RTL | Canonical default experience |
| `/en` | English | LTR | Complete English experience |
| `/#plans` / `/en#plans` | Matching locale | Matching direction | Shareable section anchors |

Arabic must open at the root. English lives at `/en`; there is no `/ar` public URL unless a redirect compatibility route is deliberately added. This avoids a needless Arabic prefix while maintaining a shareable English route.

### Routing implementation

Use an internal `[locale]` route segment and a small proxy/rewrite layer:

```text
Request /       -> internally rewrite to /ar
Request /en     -> serve /en
Request /ar     -> redirect 308 to /
Other path      -> locale-aware 404
```

Do not use browser-only language state to choose the initial route. Browser language can be considered only if the visitor has explicitly chosen English before and a first-party `preferred_locale=en` cookie exists. The requested URL always wins.

Set on the top-level localized layout:

```html
<html lang="ar" dir="rtl"> <!-- Arabic -->
<html lang="en" dir="ltr"> <!-- English -->
```

Set `lang` and `dir` on the document, not a nested `main` wrapper. A language switch requires navigation to the sibling route, keeps the same valid fragment identifier when present, and updates the preference cookie after successful navigation.

### Why not locale auto-detection by default?

Arabic is a stated business default. Automatically sending an Arabic-speaking visitor to English based on an imperfect header would violate it and make testing/caching harder. Make `EN` visible and simple instead.

## 3. Repository layout

```text
.
├─ public/
│  ├─ fonts/                         # Original, approved local web-font files only
│  ├─ images/
│  │  ├─ brand/
│  │  ├─ coach/
│  │  ├─ transformations/
│  │  └─ og/
│  ├─ video/
│  │  ├─ hero.mp4                    # Optional, optimized; poster is required
│  │  └─ hero.webm                   # Optional only when size/quality justify it
│  └─ favicon.*
├─ src/
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ loading.tsx
│  │  │  └─ not-found.tsx
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ page.tsx                    # root redirect/rewrite helper if needed
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ manifest.ts
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ SiteHeader.tsx
│  │  │  ├─ MobileMenu.tsx
│  │  │  ├─ LocaleSwitch.tsx
│  │  │  ├─ MobileConsultationBar.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ sections/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ TrustStrip.tsx
│  │  │  ├─ CoachIntro.tsx
│  │  │  ├─ CoachingOutcomes.tsx
│  │  │  ├─ StartSteps.tsx
│  │  │  ├─ Results.tsx
│  │  │  ├─ Plans.tsx
│  │  │  └─ FinalCta.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ WhatsAppLink.tsx
│  │  │  ├─ SectionHeading.tsx
│  │  │  ├─ Reveal.tsx
│  │  │  ├─ MediaFrame.tsx
│  │  │  └─ SkipLink.tsx
│  │  └─ icons/
│  ├─ content/
│  │  ├─ site.ts                      # Typed Arabic & English page content
│  │  ├─ packages.ts                  # Approved packages only
│  │  └─ media.ts                     # Asset paths, alt text, consent status
│  ├─ config/
│  │  ├─ brand.ts                     # Contact/socials and immutable facts
│  │  ├─ locales.ts
│  │  └─ navigation.ts
│  ├─ lib/
│  │  ├─ content-validation.ts
│  │  ├─ locale.ts
│  │  ├─ whatsapp.ts
│  │  ├─ seo.ts
│  │  └─ utils.ts
│  ├─ styles/
│  │  └─ tokens.css
│  └─ proxy.ts
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ PROJECT_BRIEF.md
├─ TECHNICAL_IMPLEMENTATION_PLAN.md
├─ next.config.ts
├─ package.json
├─ tsconfig.json
├─ eslint.config.*
└─ README.md
```

Names may vary slightly with the scaffolder, but preserve the separation: components render, content/config supplies business data, and library modules validate/format.

## 4. Content model and validation

### Principles

1. No business fact is hardcoded inside a visual component.
2. Every customer-facing string exists in both locale dictionaries before it can ship.
3. Missing optional content hides the whole optional module cleanly; it never becomes a dummy card.
4. Missing required launch content fails validation in production builds/CI.
5. Data model supports final packages later without a component rewrite.

### Core types (illustrative)

```ts
export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export type Localized<T = string> = Record<Locale, T>;

export type SocialLink = {
  platform: 'instagram' | 'facebook' | 'tiktok';
  href: string;
  label: Localized;
};

export type Package = {
  id: 'silver' | 'gold' | 'premium' | string;
  enabled: boolean;
  featured?: boolean;
  name: Localized;
  summary: Localized;
  price?: { amount: number; currency: 'EGP' | 'USD'; period: 'month' | 'one_time' };
  features?: Array<{ label: Localized; included: boolean }>;
  ctaContext: 'package';
};

export type Transformation = {
  id: string;
  enabled: boolean;
  consent: 'approved' | 'pending' | 'rejected';
  beforeSrc: string;
  afterSrc: string;
  alt: Localized;
  caption?: Localized;
};
```

### Brand config

`src/config/brand.ts` must contain the only editable locations for:

- `coachName`, visible bilingual wordmark names and immutable facts.
- `whatsappE164`, validated as digits only, 8–15 digits, with no placeholder in production.
- Optional public email later; not needed for v1.
- Approved social links. A social platform with no valid URL is absent from the rendered footer.
- Site URL defaults to `https://abdelalim.pages.dev`; override with `NEXT_PUBLIC_SITE_URL` for a future custom HTTPS domain.

Do not expose secrets in `NEXT_PUBLIC_*` variables. A WhatsApp number and public social URLs are public business data and may be configuration values; API keys, CMS tokens and analytics keys are not.

### Validation gate

Implement `validateContent({ mode: 'development' | 'production' })` and call it in a prebuild script.

| Check | Dev behavior | Production behavior |
| --- | --- | --- |
| No valid WhatsApp E.164 number | Console warning; CTA renders as visible local warning for reviewers | Build fails |
| Arabic or English required copy missing | Fails typecheck/build | Build fails |
| Missing hero poster/alt | Clear fallback card and warning | Build fails |
| Video missing | Use poster only | Use poster only; no failure |
| Social URL missing | Hide its icon | Hide its icon |
| Package partial/unapproved | Render discovery CTA, no price/feature list | Render discovery CTA, no price/feature list |
| Transformation consent not approved | Do not render | Do not render |
| Invalid `https` social URL | Warn and hide | Build fails if configured as enabled |

Never make an unfinished production CTA point to `#`, a phone placeholder, or a random profile.

## 5. Design-system implementation

### CSS tokens

Declare brand values as semantic CSS variables in `tokens.css`, then map them to Tailwind v4 theme values. Components consume names such as `--color-action` and `--color-text`, not literal hex codes.

```css
:root {
  --color-page: #0b0d0c;
  --color-surface: #151816;
  --color-surface-muted: #20251f;
  --color-text: #f4f4ee;
  --color-text-muted: #b9bdb5;
  --color-action: #c8f542;
  --color-action-hover: #d9ff5c;
  --color-signal: #ff3434;
  --radius-card: 1.25rem;
  --shadow-card: 0 1.25rem 4rem rgb(0 0 0 / 0.24);
}
```

Set focus colors and hover colors through tokens and verify contrast, especially lime text on light/white areas. The primary action normally uses dark ink text on lime background, not lime text on the dark background at small sizes.

### Type loading

- Use the supplied Thmanyah WOFF2 files through centralized `@font-face` declarations in `src/app/globals.css`.
- Map each supplied weight (300, 400, 500, 700, 900) explicitly for Thmanyah Sans, Serif Text, and Serif Display.
- Use Thmanyah Sans/Serif for Arabic copy and IBM Plex Sans for all English copy, including labels and controls. Keep fallback families local to the project.
- Preserve the original font files/name; never rename, modify or publicly redistribute them.

### Directionality rules

- Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`) instead of `left`, `right`, `ml-*`, or `mr-*` for shared components.
- Icons with directional meaning (arrow, chevron) must mirror using `[dir='rtl']` styling. Brand/social icons do not mirror.
- Keep numeric price formats locale-aware: `٣٠٠ ج.م` in Arabic only after a price is approved; `$300`/`EGP 300` per English content decision. Never transform phone digits in `wa.me` URLs.
- Explicitly wrap mixed terminology where necessary with `bdi`/`dir="ltr"` to avoid bidi reordering errors.

## 6. Section component contracts

### `WhatsAppLink`

Centralize all external WhatsApp URLs here. It accepts a locale and CTA context, gets the validated business number, formats the localized message, and renders an accessible anchor.

```ts
type WhatsAppContext = 'hero' | 'plans' | 'footer' | 'mobile_bar';

type WhatsAppLinkProps = {
  locale: Locale;
  context: WhatsAppContext;
  className?: string;
  children: React.ReactNode;
};
```

It must be unit-tested for URL construction, Arabic encoding and invalid-number behavior. Do not duplicate `wa.me` string concatenation across sections.

### `Hero`

- Server-render all title/copy/CTA; do not wait for video/animation JavaScript.
- `next/image` hero poster uses accurate `sizes`, high priority/LCP preload, fixed aspect ratio, alt appropriate to the content, and art-directed desktop/mobile source variants if required.
- Optional `<video muted playsInline loop preload="metadata" poster="...">` is enhancement only; ensure it does not become the LCP element if poster image is faster.
- When `prefers-reduced-motion: reduce`, do not autoplay loop/video animation; show the poster still.
- Do not put the H1 inside a video-only layout or make it inaccessible due to overlay.

### `Results`

- Do not render until at least one item has `consent: 'approved'` and valid image paths/alt in both locales.
- Avoid a heavy JS carousel. Prefer a responsive grid or CSS scroll-snap that stays usable with keyboard and screen reader.
- If a lightbox is included, manage focus, Escape, focus return, close button label and scroll lock. It is optional; do not build one by default.

### `Plans`

- Cards are data-driven and locale-aware.
- When a package has no approved price, show an enquiry CTA—not a zero, dash, “free,” “contact for price” hidden in tiny type, or old screenshot numbers.
- The `featured` badge requires explicit config. It is not a default middle-card decoration.
- Use list semantics for included/excluded features. Icons supplement text, never replace it.
- Plan CTA passes the selected plan label into the WhatsApp message only if the plan is enabled and approved.

### `SiteHeader` and mobile menu

- Header navigation uses real anchor links; account for sticky-header offset via `scroll-margin-top`.
- Mobile menu trigger includes `aria-expanded`, `aria-controls`, a visible focus state and Escape-to-close behavior.
- Lock background scroll only while the menu is open and restore focus to the trigger when it closes.
- Do not make the header or bottom CTA obscure content, browser controls, caption text, or safe-area insets.

## 7. Media pipeline

### Images

1. Receive original high-resolution image from owner.
2. Select crop based on the actual overlay composition.
3. Export WebP/AVIF where visual comparison supports it; keep compatible fallbacks through Next image optimization.
4. Use `next/image` with meaningful `sizes`, explicit width/height (or `fill` in an aspect-ratio wrapper) to prevent CLS.
5. Write human alt text from the content plan; do not use filenames, `image`, or redundant `photo of` text.
6. Below-the-fold images lazy load. Only actual LCP candidates get priority.

### Video

- Trim source video to the intended visual loop. Never ship a raw social-media download with Instagram logos/UI.
- Keep hero video short. Test its byte size on real mobile throttling; if it delays LCP or exceeds the performance budget, publish the poster-only version.
- Include captions/transcript only if audible instructional/spoken content is presented to communicate a message. For decorative muted looping video, describe the same point in nearby text rather than creating inaccessible information.
- Do not embed an Instagram iframe in the hero or rely on third-party availability for critical content.

### Asset naming

```text
coach-abdelalim-hero-desktop.webp
coach-abdelalim-hero-mobile.webp
coach-abdelalim-intro-poster.webp
transformation-client-01-before.webp
transformation-client-01-after.webp
```

Do not use client real names or sensitive body/health details in public filenames.

## 8. SEO, metadata and sharing

### Per-locale metadata

Create localized metadata using Next’s Metadata API:

| Field | Arabic | English |
| --- | --- | --- |
| Title | `كوتش عبدالعليم | تدريب شخصي وOnline Coaching` | `Coach Abdelalim | Personal Training & Online Coaching` |
| Description | Personalized Arabic description, <= ~155 characters | Natural English equivalent, <= ~155 characters |
| Canonical | `https://DOMAIN/` | `https://DOMAIN/en` |
| `hreflang` | `ar`, `en`, plus `x-default` to Arabic root | Same alternate set |

Generate a branded Open Graph image after the wordmark and hero image are final; use text-free/limited-text composition that survives social crop. Do not use client transformations in social previews without consent.

### Structured data

Add valid JSON-LD only after factual information is confirmed. A conservative `Person` entity with name, job title, `sameAs` public socials, image, URL and service area is suitable. Add `ProfessionalService`/`Offer` only when the business name/contact/offer data is final. Validate in Google’s Rich Results Test; do not add review aggregate ratings or fictional availability.

### Indexing

- `robots.ts`: allow production indexing; block nothing necessary for rendering.
- `sitemap.ts`: root Arabic and `/en` only at v1.
- Add canonical metadata so `/ar` compatibility redirects are not indexed as duplicate content.
- Do not publish staging/preview deployments as production canonical URLs.

## 9. Accessibility requirements

Target WCAG 2.2 AA for the landing page.

### Required checks

- One visible H1; logical H2/H3 hierarchy; no headings selected only for visual size.
- Skip link to `#main-content` visible on focus.
- Native anchors for navigation/external calls and native buttons only for state changes.
- Keyboard navigation reaches, visibly focuses and activates language switch, menu, all CTAs, any gallery control and lightbox close.
- Minimum 4.5:1 contrast for normal text, 3:1 for large text/UI component boundaries as applicable. Test real lime/charcoal combinations, not assumed values.
- Meaningful images have localized alt; decorative imagery has empty alt only when truly redundant.
- All video that conveys information has equivalent text/captions; decorative video does not add noise to screen readers.
- Respect `prefers-reduced-motion`; avoid animation required to understand content.
- Forms are excluded in v1; if one is added later, labels, errors, autocomplete, input modes, focus behavior and privacy language must be designed—not added ad hoc.
- Touch targets are at least 44×44 CSS px where feasible, especially footer/social and language controls.

### RTL-specific accessibility

- Test Arabic with VoiceOver/NVDA where feasible; document `lang="ar"` and LTR segments.
- Test English after a full page navigation, not only individual component snapshots.
- Ensure DOM order matches reading order in both direction modes. CSS `order` must not create a different visual and tab/screen-reader sequence.

## 10. Performance requirements

### Targets

Measure on a simulated mid-tier mobile device and production-like network, not only local desktop.

| Metric | Target |
| --- | --- |
| LCP | <= 2.5 s at p75 where field data is available |
| CLS | <= 0.10 |
| INP | <= 200 ms at p75 where field data is available |
| Hero | Poster/title/CTA visible without waiting for video |
| JavaScript | No third-party carousel, Instagram embed or animation runtime unless its benefit is demonstrated |
| Lighthouse mobile performance | Aim for 90+; investigate any regression rather than chasing a score cosmetically |

### Enforcement practices

- Use server rendering and static generation; no `use client` at page level.
- Reserve dimensions for every image/video/card to eliminate layout shifts.
- Use only one priority hero image; lazy-load below-fold assets.
- Keep the hero video optional and defer it after the poster when needed.
- Subset/load only used font weights and avoid rendering multiple font families globally.
- Avoid third-party scripts by default. Add analytics only with owner approval and a written reason.
- Run a production build and Lighthouse/Playwright smoke test before release.

## 11. Security and privacy

### v1 threat surface

The page does not collect, store or process lead data: the visitor voluntarily begins a WhatsApp conversation. That keeps v1 privacy exposure low but does not remove the need for honest business practices.

### Requirements

- Validate all internal configuration values at build time; do not render unchecked URL values from content.
- Use `https` for all production external links. `wa.me` is an exception in format only when its official HTTPS URL is used.
- External links that open a new window use `rel="noopener noreferrer"`.
- Do not add secret API keys to the browser bundle.
- Do not load unapproved tracker, chat-widget, font, embed or CDN scripts.
- Serve security headers in `next.config.ts`: at minimum `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a restrictive `Permissions-Policy`. Add a Content Security Policy after production analytics/media sources are final and test it on both locales.
- Keep original consent records for transformations in a private owner-controlled location, not versioned as public website assets.

### Analytics decision

Analytics is optional for v1. If approved, prefer a privacy-respecting, minimal product such as Vercel Analytics or Plausible and track only meaningful anonymous events:

- `cta_whatsapp_click` with `context` (`hero`, `plans`, `footer`, `mobile_bar`) and `locale`.
- `locale_switch` with source/target locale.
- `plans_view` only if it informs the business decision.

Never send the visitor’s free-text WhatsApp prefill or personal health/goal data to analytics.

## 12. Test strategy

### Unit tests — Vitest

- `buildWhatsAppUrl`: strips formatting from number correctly, URL-encodes Arabic/English correctly, rejects invalid number.
- Locale helper: supported locales, root/default mapping, language-switch path/hash preservation.
- Content validator: rejects required missing content; hides invalid optional social/plan/transformation content; checks consent.
- Currency/locale formatter: correct approved-price rendering and no output for missing price.

### Component/integration tests — React Testing Library

- Arabic page has `dir="rtl"`, Arabic name, Arabic CTA and target WhatsApp text.
- English page has `dir="ltr"`, English name, English CTA and target WhatsApp text.
- Language switch leads to the sibling locale path and is keyboard-operable.
- Mobile menu has correct expanded state and keyboard close/focus restoration.
- Plans do not expose a price or feature list when package approval data is absent.
- Results do not render transformations with unapproved consent.

### End-to-end — Playwright

Run Chromium mobile and desktop flows:

1. `/` loads Arabic, title/copy appears, skip link works, hero CTA links to valid `https://wa.me/` URL.
2. `EN` arrives at `/en`, preserves `#plans` if present, direction changes, English content is not Arabic fallback.
3. Mobile header/menu and persistent consultation action do not obstruct the final CTA.
4. Required assets return success; missing optional video still leaves functional hero.
5. All anchor links land with headings visible under sticky header.
6. Run `@axe-core/playwright` scan for serious/critical violations, then manually inspect false positives and color/motion behavior.

### Manual design QA

- 320, 360, 390, 768, 1024, 1440 and 1920 px.
- Chrome Android and iOS Safari physical/simulator.
- Keyboard-only navigation and at least one screen reader pass.
- Slow 4G/CPU-throttled hero behavior.
- Both locales with the longest expected content strings.
- JavaScript disabled or video blocked: content and WhatsApp links still available.

## 13. Build phases and deliverables

### Phase 0 — Inputs and launch decisions

**Goal:** turn placeholders into approved source material before visual commitments lock in.

**Tasks**

1. Receive final WhatsApp number and social URLs.
2. Inventory photos, videos, transformations and logo permissions.
3. Confirm which supplied reel can be used, and create a hero poster/crop shortlist.
4. Confirm original Thmanyah files and font delivery licence interpretation.
5. Decide the production domain and deploy owner.
6. Approve/finalize packages later; do not block the initial framework on them.

**Exit criteria:** required contact/media/font assets are known; each transformation is either consent-approved or excluded.

### Phase 1 — Foundation

**Goal:** create a clean, fast, testable application shell.

**Tasks**

1. Bootstrap Next.js TypeScript App Router project and Tailwind v4.
2. Add ESLint, typecheck, test runners, formatter policy and `README` setup steps.
3. Create locale routing: `/` Arabic, `/en` English, `/ar` compatibility redirect.
4. Create typed `content`, `config`, validation and WhatsApp utility modules.
5. Add color/type tokens, local font loader with fallback and basic global styles.
6. Create shared layout/header/footer/skip link and blank section skeletons.

**Exit criteria:** `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build` pass; both locale routes have correct `lang` and `dir`; no placeholder CTA can ship.

### Phase 2 — Core landing experience

**Goal:** deliver the first compelling, conversion-oriented visual implementation.

**Tasks**

1. Build hero with responsive poster and optional video enhancement.
2. Build trust, coach intro, outcomes and start-steps sections with approved bilingual copy.
3. Build mobile navigation, desktop navigation and contextual WhatsApp CTA system.
4. Build plans configuration/UI in enquiry mode until final data is supplied.
5. Build footer with social placeholders hidden until real links exist.
6. Implement responsive/RTL styles and manual visual comparison against the intended direction.

**Exit criteria:** hero works at all target sizes; WhatsApp deep links pass tests; no copied reference design/content; both languages pass visual reading order review.

### Phase 3 — Proof, polish and discoverability

**Goal:** add approved persuasive media while protecting trust and performance.

**Tasks**

1. Add consent-cleared results gallery and optional compact testimonials.
2. Add approved gym logos/experience treatment if rights are confirmed.
3. Tune media export/crops, type scale, hover/focus states, reveal motion and reduced-motion behavior.
4. Add localized metadata, Open Graph image, sitemap, robots and conservative JSON-LD. Localized metadata, coach-photo Open Graph image, sitemap, and robots are implemented; a branded Open Graph graphic and JSON-LD remain optional follow-up work.
5. Add optional privacy-respecting analytics only after owner approval.

**Exit criteria:** all showcased results have consent; metadata/canonicals validate; Lighthouse and accessibility requirements are met or documented with an approved exception.

### Phase 4 — Final plans, verification and launch

**Goal:** publish a trustworthy live site.

**Tasks**

1. Replace enquiry-mode plan data with owner-approved package names, prices, period, inclusions and exclusions—or retain enquiry mode intentionally.
2. Run full unit/integration/e2e/accessibility suite and real device QA.
3. Run a production build and inspect output for missing assets, console errors, bad URLs and unintended client bundles.
4. Configure domain, canonical environment variable, HTTPS and deployment headers.
5. Check production Arabic root, `/en`, language switch, social links, WhatsApp CTAs, sitemap and Open Graph preview.
6. Deliver admin notes explaining exactly where to edit contact details, copy, assets and packages.

**Exit criteria:** production checklist is signed off; all links/media are valid; content claims are approved; the domain is canonical and indexable.

## 14. Release checklist

### Business/content

- [ ] Real WhatsApp number verified on a physical phone.
- [ ] All social handles/URLs verified.
- [ ] Coach name/English spelling approved.
- [ ] Gym names and logos cleared for use.
- [ ] Every transformation/testimonial consent-cleared and accurately labeled.
- [ ] Final package data approved or plans intentionally in enquiry mode.
- [ ] No unverified medical, timing, price, certification or client-count claim remains.

### Design/UX

- [ ] Hero crop works on 320px and 1440px; copy never covers the coach’s face.
- [ ] Arabic is default, RTL, and has no bidi/overflow defects.
- [ ] English is full content, LTR, and has no Arabic fallback copy.
- [ ] Webfont rendering and fallbacks are verified in both locales.
- [ ] Buttons, focus states, contrast, menu and language switch pass checks.
- [ ] Video is enhancement only and poster fallback is visually complete.

### Engineering

- [ ] `lint`, `typecheck`, unit tests, E2E smoke tests and production build pass.
- [ ] Content validation passes in production mode.
- [ ] Every external link uses the correct protocol and target behavior.
- [ ] No secrets, raw consent records or source-quality private media are committed publicly.
- [ ] Metadata, `hreflang`, canonical URL, sitemap, robots and OG image are correct.
- [ ] Security headers and analytics behavior are verified in deployed preview.
- [ ] Mobile performance and accessibility review are completed with real assets.

## 15. Non-negotiable implementation decisions

1. **Arabic is default at `/`; English is a complete `/en` page.**
2. **WhatsApp is direct CTA; there is no form/backend in v1.**
3. **Packages are configurable and remain enquiry-only until factual content is approved.**
4. **No FAQ in v1.**
5. **Real coach media and consent-cleared results beat stock imagery and arbitrary UI decoration.**
6. **No business data is hard-coded inside visual components.**
7. **Performance, accessibility, RTL/LTR behavior and fallback states are launch requirements—not a polish pass after design.**
