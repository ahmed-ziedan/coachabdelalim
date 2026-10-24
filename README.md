# Coach Abdelalim — Bilingual Coaching Landing Page

A bilingual, mobile-first personal branding and conversion landing page for **كوتش عبدالعليم / Coach Abdelalim**, built with Next.js (App Router), TypeScript, and Tailwind CSS.

- **Primary language:** Arabic (default at `/`, RTL)
- **Secondary language:** English (full localized experience at `/en`, LTR)
- **Primary conversion:** Direct WhatsApp deep link for a Free Consultation (no forms, no database)

---

## Current Status

- **Phase 0 (Inputs and Launch Decisions):** Complete. Pending owner inputs are catalogued in [`PROJECT_READINESS.md`](./PROJECT_READINESS.md).
- **Phase 1 (Foundation):** Complete. Typed content model, design tokens, locale routing, validation gates, placeholder shells, and test suite.
- **Phase 2 (Core Landing Experience):** Not started.

---

## Getting Started

### Prerequisites

- Node.js 20 LTS or higher
- npm 10 or higher

### Installation

```bash
npm install
```

### Local Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for Arabic (default, RTL) or [http://localhost:3000/en](http://localhost:3000/en) for English (LTR).

---

## Available Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start Next.js development server with Turbopack |
| `npm run build` | Validate content (dev mode) and create production build |
| `npm run build:production` | Validate content strictly (fails if WhatsApp/hero missing) and build |
| `npm run typecheck` | Run TypeScript strict compiler checks (`tsc --noEmit`) |
| `npm run lint` | Run ESLint checks |
| `npm run test` | Run Vitest unit tests |
| `npm run test:watch` | Run Vitest in interactive watch mode |
| `npm run validate-content` | Validate content and media readiness |

---

## Architectural Highlights

- **Arabic as Default Root:** Root `/` serves Arabic with `dir="rtl"` and `lang="ar"`. English is at `/en` with `dir="ltr"` and `lang="en"`. `/ar` compatibility redirect issues a 308 redirect to `/`. Handled via `src/proxy.ts`.
- **Zero Business Data in UI:** Names, contacts, facts, packages, copy, and media paths reside in `src/config/` and `src/content/`.
- **Content Validation Gate:** `validateContent` checks required bilingual strings, E.164 phone format, hero assets, and consent.
- **Enquiry-First Plans:** In Phase 1, plans render in enquiry mode with a direct consultation CTA; no fake prices, features, or countdowns are shown.
- **System Font Fallbacks:** Uses system-ui fallback stack until official licensed Thmanyah font files are cleared and loaded.
