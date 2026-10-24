# Coach Abdelalim — Landing Page Brief

> **Document status:** Approved working brief for the first build.  
> **Primary language:** Arabic (default, RTL), with a complete English experience (LTR).  
> **Last updated:** 24 October 2026

## 1. Project at a glance

Create a bilingual, mobile-first landing page for **كوتش عبدالعليم / Coach Abdelalim**, a bodybuilding specialist and personal trainer. The page should introduce his personal brand, demonstrate credibility through real media and client results, explain the coaching offer, and turn qualified visitors into WhatsApp conversations.

This is a personal-coach brand site—not a generic gym website and not an ecommerce checkout. The online-coaching offer leads the page. In-person training is present as an additional option but is **not** the opening message.

### Primary conversion

Open a direct WhatsApp conversation for a **Free Consultation**.

The link must carry a localized, prefilled message. No lead form, backend, payment flow, or account is part of version 1.

### Secondary conversion

Scroll to, understand, and enquire about the available coaching plans.

### Definition of a good first impression

The visitor should understand, within one screen:

1. This is a serious, credible personal coach—not a page selling a generic workout PDF.
2. Coaching can be done online from Egypt or anywhere in the world.
3. They can start without commitment by contacting the coach for a free consultation.

## 2. Brand position

### Brand name

| Arabic | English |
| --- | --- |
| كوتش عبدالعليم | Coach Abdelalim |

The Arabic name is the primary identity on the Arabic site. The English name is used on the English site and selectively in Arabic UI where the English term is clearer or contributes to the athletic tone (for example: `Online Coaching`, `Check-in`, `Free Consultation`).

### Positioning statement

**Arabic:** مدرب شخصي متخصص في الـBodybuilding، يقدّم خطط تدريب ومتابعة شخصية تساعد العميل على بناء جسم أقوى وتحقيق هدفه بطريقة منظمة وقابلة للاستمرار.

**English:** A bodybuilding-focused personal trainer offering structured, personalized coaching to help clients build a stronger body and reach sustainable results.

### Core audience

| Audience | Need | Page response |
| --- | --- | --- |
| Men seeking physique change | Muscle building, fat loss, confidence, accountability | Strong personal brand, transformation proof, clear coaching path |
| Beginners | A safe, understandable start | Simple process, reassuring language, free consultation CTA |
| Committed trainees / bodybuilding-minded clients | Better structure, technique, progression and closer feedback | Coach specialization, form/video-review capability when confirmed, results |
| Women | Inclusive coaching without changing the male-focused lead | Gender-inclusive language and authentic relevant results where available |
| Egyptians and Arabic speakers abroad | Online access and familiar communication | Arabic default, English alternative, WhatsApp-first conversion |

The writing must welcome all genders without pretending that every visitor has the same goal. Avoid medical, guaranteed, or extreme-result claims.

### Coach facts to use

- 3 years of experience.
- Experience working in two major gyms in Menoufia: **Heros GYM** and **Noamany Fitness Center**.
- Education: Faculty of Physical Education, Elsadat University.
- Specialty: Bodybuilding & Personal Training.
- Current location: Heros GYM, Egypt.
- Available for online coaching in Egypt and internationally.
- Principle: **100% Client Dedication**—translate the meaning in Arabic copy rather than using it as empty decoration.

### Claims and wording guardrails

- Use only facts supplied and assets that the coach owns or has permission to publish.
- Do not promise a number of kilos, a timeframe, injury treatment, medical rehabilitation, or a guaranteed transformation.
- Write `results depend on commitment, starting point, and individual circumstances` near testimonials/transformations if results are shown.
- Mention gym names as professional experience. Do not use either gym logo until the final logo files and permission are supplied.
- Do not state package inclusions, prices, response times, certifications, or client counts until confirmed.

## 3. Reference synthesis—not a copy

| Reference | Borrow | Do not borrow |
| --- | --- | --- |
| Coach Fathi | Conversion flow: coach story, proof, coaching pathway, packages, client outcomes and repeated CTA | Dense/long sales copy, a large FAQ in v1, copied wording or layout |
| Sharqawy Fitness | Premium athletic restraint, product-like clarity, polished dark surface system | App-specific claims or visual assets; the brand needs to remain Abdelalim's |
| Ghadeer Alshehri | Calm, editorial hero composition: oversized type, strong portrait, generous space and personality | Direct visual reproduction or a soft non-athletic tone |
| Abdelalim's reel frame | Authentic on-camera confidence, charcoal clothing, natural green background, real coach presence | A stock-photo-only website or noisy gym-ad aesthetics |

## 4. Visual direction

### Creative direction

**Quiet intensity. Personal discipline. Premium coaching.**

The result must feel modern and athletic without the usual red-and-black, over-exposed gym template. Use high-contrast editorial composition, real media, large confident type, compact data, and deliberate motion. The coach—not a product mock-up or stock model—is the hero.

### Color system

Use tokens rather than one-off hex values. The implementation may tune exact values after reviewing final photography, but stay in this relationship:

| Token | Starting value | Use |
| --- | --- | --- |
| `ink` | `#0B0D0C` | Page background / darkest surface |
| `surface` | `#151816` | Cards and elevated sections |
| `surface-muted` | `#20251F` | Borders, hover depth, subtle panels |
| `text-primary` | `#F4F4EE` | Headings and key copy on dark background |
| `text-muted` | `#B9BDB5` | Supporting copy |
| `lime` | `#C8F542` | Primary action, active state, key underline/metric |
| `lime-strong` | `#D9FF5C` | Accessible hover/focus variant |
| `signal-red` | `#FF3434` | Small alert/badge emphasis only—not the primary identity |

The lime accent picks up the natural green in the supplied reel frame while creating a differentiated, contemporary fitness identity. Red can remain as an occasional visual callback to the existing package artwork, especially for an “Most requested” badge, but must not dominate.

### Typography

1. **Arabic UI and body:** `Thmanyah Sans` (regular / medium / bold), supplied from the original licensed package.
2. **Arabic display:** use `Thmanyah Sans` Black at large sizes first; use `Thmanyah Serif Display` only for an occasional editorial line if it passes readability testing. It must not turn the page into an editorial magazine.
3. **Latin athletic labels and numbers:** `Barlow Condensed` (or `Bebas Neue` if the visual test is stronger) for all-caps package labels, oversized numerals and tiny overlines only.
4. **English paragraph/UI fallback:** the Latin companion must be readable at normal sizes; do not use a condensed display face for body text.

Use true Arabic punctuation and numbers appropriate to the selected locale. Avoid artificial Arabic letter-spacing. Mixed Arabic/English phrases must be tested at all breakpoints.

**Font licensing delivery gate:** the official Thmanyah material permits commercial/web use but restricts redistribution of the raw font. Use only unmodified files obtained by the client from the official source and confirm the web-delivery interpretation in the supplied licence before deployment. Do not place the raw font package on a public downloads page or use an unofficial CDN. If the rights cannot be confirmed, fall back to `IBM Plex Sans Arabic` or `Tajawal` and preserve the rest of the system.

### Image and motion direction

- Prefer portraits, lifting/training stills, natural coach video, and genuine transformations.
- Hero media should be a premium portrait/video composition with a dark gradient overlay. The coach must remain visually legible at mobile crop sizes.
- A muted looping video may play only when supported and only as enhancement. It needs a strong poster image and must never block page content.
- Motion is brief and functional: fade/slide reveals, card hover depth, language switch feedback. No scroll-jacking, endless text marquee, aggressive parallax, or autoplay audio.

## 5. Information architecture and copy blueprint

The page is one focused landing route. The navigation anchors to sections and has a fixed WhatsApp CTA.

### 5.1 Header

**Content**

- Text logo / temporary wordmark: `كوتش عبدالعليم` on Arabic, `Coach Abdelalim` on English.
- Desktop anchors: About, Coaching, Results, Plans, Contact—localized.
- Language switcher: `EN` in Arabic and `العربية` in English.
- Compact primary button: `احجز Free Consultation` / `Book a Free Consultation`.

**Behavior**

- Transparent over the hero, becoming an opaque blurred surface after scrolling.
- Mobile: wordmark, language switcher, accessible menu trigger; the consultation CTA remains visible either in the menu and/or persistent bottom bar.
- Switching language preserves the same section hash when possible; otherwise it returns to the localized page top.

### 5.2 Hero

**Purpose:** establish authority and start WhatsApp conversion.

**Arabic draft copy**

```text
ONLINE COACHING • PERSONAL TRAINING

خطتك. متابعتك. نتيجتك.

تدريب شخصي مصمم لهدفك، مستواك، وطريقة حياتك—عشان تبني جسم أقوى بخطة تقدر تكمل عليها.

[احجز Free Consultation]  [اكتشف الباقات]

متاح أونلاين داخل مصر وحول العالم
```

The final headline may be refined after seeing the selected hero asset, but it must stay short and direct. Do **not** mention a gym name in the hero headline.

**English draft copy**

```text
ONLINE COACHING • PERSONAL TRAINING

Your plan. Your progress. Your result.

Personalized coaching built around your goal, level, and lifestyle—so you can build a stronger body with a plan you can sustain.

[Book a Free Consultation]  [Explore Plans]

Available online in Egypt and worldwide
```

**Hero media requirements**

- Use the best vertical or wide real coach asset; provide art-directed crops for desktop and mobile.
- The live hero video is optional, muted, has no controls in the default composition, and has descriptive accessible alternative copy nearby.
- Include a small credibility chip, for example: `Bodybuilding & Personal Training`.
- Never overlay essential white text on an untested busy area of the video/photo.

### 5.3 Trust strip

Directly after hero, use 3–4 concise proof points—not inflated statistics.

| Arabic | English |
| --- | --- |
| 3 سنوات خبرة | 3 Years of Experience |
| Bodybuilding Specialist | Bodybuilding Specialist |
| Online Coaching | Online Coaching |
| 100% التزام بمتابعتك | 100% Client Dedication |

Show experience with `3+` only if the coach approves that phrasing. The gym experience can be introduced in the About section rather than presented as partnership logos.

### 5.4 About the coach

**Purpose:** turn a strong hero into personal trust.

**Suggested Arabic structure**

```text
اتمرّن بهدف. واتطوّر بخطة واضحة.

أنا كوتش عبدالعليم، مدرب شخصي متخصص في الـBodybuilding. بخبرتي في التدريب الشخصي وشغلي داخل Heros GYM وNoamany Fitness Center، بساعدك تبني برنامج واقعي مناسب لهدفك ومستواك.

كل عميل له ظروفه وطريقته في الالتزام؛ علشان كده المتابعة مش قالب واحد للجميع.

Faculty of Physical Education, Elsadat University
Bodybuilding & Personal Training
```

Pair with the supplied speaking-reel clip or a high-quality portrait. The clip should feel like a personal introduction, not an Instagram embed with third-party UI.

### 5.5 Coaching offer / outcomes

**Purpose:** let different visitors see themselves in the service without inventing unconfirmed package inclusions.

Use 3 outcome cards:

1. **Build Muscle / بناء عضلات** — progressive training built around the current level and goal.
2. **Lose Fat / خسارة دهون** — structured, sustainable training support without crash-diet promises.
3. **Train with Structure / تمرّن بخطة واضحة** — for beginners or returning trainees who need clarity and accountability.

Use wording that accurately describes what is confirmed. Do not claim meal plans, daily messages, form reviews, video calls, or an app until the coach confirms they are in the actual offer.

### 5.6 How coaching starts

Simple three-step route to reduce friction:

| Step | Arabic | English |
| --- | --- | --- |
| 01 | ابعت رسالة على واتساب | Start on WhatsApp |
| 02 | نعرف هدفك ومستواك في Free Consultation | Discuss your goal and level in a free consultation |
| 03 | نختار الخطة الأنسب ونبدأ | Choose the right plan and get started |

The consultation may happen on WhatsApp or a call. Do not promise a fixed duration, medium, or availability until confirmed.

### 5.7 Transformations / real results

**Purpose:** provide the strongest proof through authentic evidence.

**Asset options**

- Before/after pairs with consistent crop and explicit permission.
- A gallery of real gym/training images.
- Short testimonial statements only after client consent.
- A compact reel thumbnail with a custom lightbox only if performance and consent allow it.

**Rules**

- Transformations are optional in the first release until consent-cleared assets are received.
- Never fabricate names, progress numbers, testimonials, or before/after imagery.
- Add the localized qualification: `النتائج تختلف حسب الالتزام، نقطة البداية، والظروف الفردية.` / `Results vary based on commitment, starting point, and individual circumstances.`
- Make before/after labels meaningful to screen-reader users.

### 5.8 Plans / packages

**Purpose:** communicate that structured coaching plans exist and prompt plan selection via WhatsApp.

The supplied Silver / Gold / Premium visual is a **visual and content direction only**, not approved final pricing or inclusions. The v1 page must not publish `EGP 300 / 500 / 700` or the screenshot features as facts.

#### Initial presentation before final package data

- Section title: `اختر خطة تناسب هدفك` / `Choose the plan that fits your goal`.
- Render up to three visually differentiated plan cards from a data configuration.
- If name, price, inclusions, and availability are not all approved, use a neutral plan discovery state: `حدد هدفك في Free Consultation واعرف أنسب خطة ليك` and a WhatsApp CTA.
- Do not use a fake strikethrough price, countdown, “limited seats”, or “most requested” badge without a verified business reason.

#### Later package data model

Each plan must support: `id`, Arabic/English name, price value, currency, billing period, highlighted flag, short promise, included features, excluded features, CTA label, and availability.

The final owner-provided package data will replace only the configuration—not require a redesign.

### 5.9 Final conversion block

**Arabic:**

```text
جاهز تبدأ بشكل صح؟
ابعت رسالة واحجز Free Consultation، وخلّينا نعرف أنسب خطوة لهدفك.
[كلّمني على واتساب]
```

**English:**

```text
Ready to start with a real plan?
Send a message to book a free consultation and find the right next step for your goal.
[Chat on WhatsApp]
```

### 5.10 Footer

- Temporary text wordmark.
- Contacts: WhatsApp, Instagram, Facebook, TikTok. These are placeholders until the real URLs are supplied; do not ship blank or `#` social links.
- Location line: `Egypt` / `مصر`, with online availability wording.
- Copyright year is dynamic.
- No FAQ in v1. No redundant newsletter, long policy page, payment logos, or invented certification marks.

## 6. Interaction rules

### WhatsApp CTA behaviour

Every primary CTA goes to the same validated E.164 WhatsApp number but has a contextual prefilled message.

| Origin | Arabic message concept | English message concept |
| --- | --- | --- |
| Hero | `أهلًا كوتش عبدالعليم، حابب أحجز Free Consultation. هدفي هو: ...` | `Hi Coach Abdelalim, I’d like to book a free consultation. My goal is: ...` |
| Plans | `حابب أعرف أنسب خطة لهدفي.` | `I’d like help choosing the right plan.` |
| Footer | `حابب أبدأ معاك.` | `I’d like to get started.` |

Encode messages safely with `encodeURIComponent`. Use `https://wa.me/<digits>?text=<encoded-message>`; omit `+`, spaces and punctuation from the number. Open external destinations in a new tab only when the implementation UX warrants it, with `rel="noopener noreferrer"`.

### Language behaviour

- Default route and first experience are Arabic/RTL.
- English is a full localized page, not a machine-translated overlay.
- The visible label always points to the *other* language: Arabic view shows `EN`; English view shows `العربية`.
- Language choice must be URL-addressable and shareable. It must never rely only on browser state.
- Store an explicit choice in a first-party cookie only to preserve future root visits; URL is the source of truth.
- Switch page `lang` and `dir` together: `ar`/`rtl`, `en`/`ltr`.

### Responsive layout

- Design from 320px viewport width upward; verify 360px, 390px, 768px, 1024px, 1440px and 1920px.
- Mobile is the primary conversion experience: clear first CTA, thumb-reachable bottom action, no tiny feature text, and no reliance on hover.
- Package cards: one column on small screens, two or three only when card content remains readable.
- Do not mirror media blindly under RTL. Decide image position intentionally while all reading order and controls follow document direction.

## 7. Content and asset inventory

### Available according to the project owner

- Professional photos of the coach.
- Professional videos / reels, including a speaking-to-camera reel.
- Real client transformations.
- Gym logos for Heros GYM and Noamany Fitness Center.

### Still required before production launch

| Asset / decision | Needed for | Owner action |
| --- | --- | --- |
| Final WhatsApp E.164 number | Every conversion CTA | Provide without spaces or `+` |
| Instagram, Facebook, TikTok URLs | Footer/social links | Provide canonical profile URLs |
| Approved logo / wordmark direction | Header, favicon, social share image | Supply mark or approve text wordmark |
| Hero source assets | Hero desktop/mobile art direction | Supply highest resolution original photo/video and preferred take |
| Gym logo rights / use permission | About credibility strip | Supply approved logos and confirm permission |
| Transformation consent | Results section | Mark each permitted asset and how names may be shown |
| Final packages | Plans section | Approve name, currency, price, period, features, excluded items and availability |
| Font files and licence confirmation | Typography | Supply original licensed Thmanyah web files and licence decision |
| Domain | SEO/deployment | Confirm final production domain |

### Asset preparation standards

- Photos: originals plus named export targets, never screenshots from Instagram.
- Hero poster: wide desktop crop and vertical mobile crop, both reviewed with title overlaid.
- Images: describe subject/action in filename and maintain an alt-text mapping.
- Video: exported H.264 MP4 and WebM only if useful; provide a poster; trim silent dead space; do not deliver auto-playing audio.
- Transformations: normalized dimensions, consistent lighting/crop where possible, and a consent record outside the public repo.

## 8. Product scope

### Included in v1

- One bilingual landing page and localized SEO metadata.
- Arabic default and English language route/toggle.
- Hero, trust, coach introduction, outcomes, process, results (when approved), plan framework, final CTA, footer.
- Direct localized WhatsApp CTA links.
- Responsive design, semantic HTML, accessibility and performance work.
- Lightweight first-party or privacy-friendly analytics only if the owner approves it.

### Explicitly excluded from v1

- Payment checkout, cart, user accounts, dashboard, coaching app, booking calendar, CRM, lead database, newsletter, blog and FAQ.
- Unverified prices, promises, testimonials, transformation claims, customer statistics and package details.
- Embedded Instagram feed/player as a required experience.
- A content management system. Content starts in typed local configuration to avoid unnecessary complexity.

### Sensible future extensions

- Finalized pricing / checkout integration.
- Calendar scheduling after the free-consultation process is defined.
- Testimonials, articles, educational reels and program-specific landing pages.
- CMS only when editing frequency and team workflow justify it.

## 9. Acceptance criteria for the product/design hand-off

- Arabic opens by default and is fully RTL; English is full LTR localized content.
- The page reads as Abdelalim’s personal premium brand, not a copied reference or generic template.
- Every visible primary conversion CTA resolves to a valid localized WhatsApp URL when contact data is provided.
- No unapproved package price, service inclusion, claim or social account appears in production.
- The selected hero uses actual coach media, looks intentional at desktop and mobile, and has a non-video fallback.
- Fonts, logo and media have appropriate permission/licence before launch.
- The key page content works without video, hover, JavaScript animation, or third-party embeds.
- No FAQ is included in v1.

## 10. Handoff notes for the implementation agent

1. Treat this document as product/design intent and `TECHNICAL_IMPLEMENTATION_PLAN.md` as implementation constraints.
2. Build the data/configuration model first. Do not hardcode copy, prices, social links or WhatsApp numbers inside section components.
3. Implement in Arabic first while preserving locale-agnostic component structure; then build and visually test English as a first-class page.
4. Use placeholders only in local/development previews. Production must hide incomplete optional modules or fail its content validation gate rather than show dummy data.
5. Return a content checklist to the owner after the first visual implementation so missing assets do not get silently replaced with stock imagery.
