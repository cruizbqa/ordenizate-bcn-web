# AGENT.md — Ordenízate Bcn

> Internal reference for AI agents working on this repository.
> Read this before making any changes.

---

## 1. Business Context

**Brand:** Ordenízate Bcn
**Service:** Professional home and business organization
**Location:** Barcelona province, Spain (with potential expansion across Spain)
**Target audience:** Households and small/medium businesses seeking professional organizing services

**Tone of voice:** Warm, premium, professional, and calm. The brand conveys trust and competence without being cold or corporate.

**Core services:**

- Pre-move organization (packing, labeling, logistics)
- Post-move unpacking and setup
- Home organization (closets, storage, living spaces)
- Kitchen and pantry organization
- Seasonal wardrobe change

**Primary goals of the website:**

1. Generate qualified leads through the contact form and WhatsApp
2. Drive WhatsApp and contact form conversions
3. Rank in Google for local SEO keywords related to professional organizing in Barcelona

---

## 2. Technical Stack

| Layer             | Technology         |
| ----------------- | ------------------ |
| Framework         | Next.js (App Router) |
| Language          | TypeScript         |
| Styling           | Tailwind CSS v4    |
| Email delivery    | Resend             |
| Rate limiting     | Upstash Redis      |
| Hosting           | Vercel             |
| Form validation   | Zod                |
| Icons             | lucide-react       |

**Key conventions:**

- **Server Components are the default.** Only use `"use client"` when the component requires browser APIs, event handlers, or React hooks (forms, interactive UI).
- **Environment variables** must be used for all secrets and API keys. Never hardcode them.
- Keep dependencies minimal. Avoid adding packages unless strictly necessary.

---

## 3. Architecture & Patterns

### Folder structure

```
app/              → Pages and layouts (App Router)
app/api/          → API routes (server-side only)
components/       → Page-level and shared components
components/ui/    → Reusable UI primitives (Button, Container, Section, Card, Input, etc.)
lib/              → Utilities, constants, schemas, helpers
types/            → Shared TypeScript types
public/           → Static assets (images, fonts, favicon)
```

### Design system

The project uses a custom color token system defined in `globals.css` via Tailwind `@theme`:

- **`sage-*`** — Brand cyan (`#00a6d9`), used for primary accent, links, CTAs
- **`sand-*`** — Neutral gray (`#999da3`), used for backgrounds, borders, subtle UI
- **`charcoal-*`** — Dark tones for text and contrast sections
- **`brand-yellow`** — Accent `#f3bb00`
- **`brand-purple`** — Accent `#888ebd`
- **`brand-pink`** — Accent `#eaa3b1`

Always use these tokens instead of arbitrary color values. Do not introduce new color palettes without updating `globals.css`.

### Best practices

- One `<h1>` per page, with proper heading hierarchy.
- Export `metadata` per page for SEO, always adding `alternates: { canonical: '...' }`.
- Use `next/image` for all images with explicit `sizes` matching the grid layout (e.g. `sizes="(max-width: 1024px) 100vw, 50vw"` for hero/profile and `sizes="(max-width: 768px) 100vw, 42vw"` for standard grid columns).
- Use `next/font` for font loading (custom font: Mosk, limited to weights 400, 500, 600, 700 to keep the bundle size small).
- Accessibility is required: semantic HTML, ARIA labels for icon links, keyboard navigation.
- Keep components small, composable, and focused.
- Avoid duplicating Tailwind utility combinations — extract to components.

---

## 4. Contact System Architecture

The contact form submits to `/api/contact` (POST).

**Flow:**

1. Client-side validation with Zod schema (`lib/contactSchema.ts`)
2. Server-side re-validation with the same schema
3. Honeypot field to reject bot submissions silently
4. **Anti-Spam & Rate limiting** (Redis-backed via Upstash):
   - **Per IP:** Max 10 requests / 30 mins
   - **Per IP (Daily):** Max 25 requests / 24 hours
   - **Per Fingerprint (IP + Email):** Max 3 requests / 30 mins
   - **Per Email Global:** Max 5 requests / 24 hours
5. **Cybersecurity (XSS/Phishing Prevention):** We accept raw input from users (including HTML tags or URLs) to avoid friction. However, the backend injects this data directly into the `text` property of the Resend payload (plain text mode, NOT HTML). This guarantees that clients like Gmail or Outlook will render the tags literally (e.g., `<h1>test</h1>`) and will not execute malicious scripts.
6. Email delivery via **Resend** to the business owner
7. JSON response with success/error message

**Security & Error Handling:**

- No sensitive data is logged
- Rate limit errors return user-friendly messages in Spanish explaining the temporary block.
- All contact details are centralized in `lib/constants.ts` — never hardcoded in components. Use standard HTTPS `https://wa.me/34636757684?text=...` link format for all WhatsApp CTAs.

---

## 5. SEO & Structured Data Strategy

**Target keywords:**

- "Organizadora profesional en Barcelona"
- "Organización del hogar Barcelona"
- "Organización de cocinas"
- "Mudanza organizada"

**Implementation Checklist for New/Modified Pages:**

- **Canonical URL:** Every route MUST export an `alternates` metadata object with the correct absolute or relative canonical path.
- **OpenGraph Images:** Every main page and service page must configure `openGraph` metadata specifying `images` to display rich snippet details on social shares.
- **Image Optimization:** Avoid setting `unoptimized: true` in `next.config.ts`. Always set optimized `sizes` properties on `<Image fill>` tags to prevent large layout shifts and optimize Core Web Vitals.
- **JSON-LD Schema**:
  - **Main Route (`/`)**: Must include the enriched `LocalBusiness` schema (contains geo-coordinates, logo, 6-day opening hours Mon-Sat 09:00-20:00, social sameAs links) and `FAQPage` schema.
  - **Service Pages (`/servicios/*`)**: Must include individual `Service` schema detailing the provider, areaServed (Barcelona y alrededores) and descriptions, plus a `BreadcrumbList` schema outlining the hierarchical path.

---

## 6. UX & Conversion Principles

- **Primary CTA:** WhatsApp (lowest friction for the target audience).
- **Secondary CTA:** Contact form / "Reserva una llamada".
- Copy is friendly but premium — no exaggerated or pushy language.
- **Premium Alignment:** All form inputs (Input, Select, Textarea) must share a consistent height (`h-11`) and label spacing (`mb-1.5`) to maintain visual harmony in desktop views.
- **Mobile-first** design; all layouts must work flawlessly on small screens.
- Fast loading is non-negotiable — minimize JS, optimize images.
- Clear trust signals: real testimonials, real service descriptions.
- No fake urgency, no invented statistics.

---

## 7. Image Guidelines

- Prefer **real before/after photos** of organized spaces.
- Avoid generic stock photography — it undermines trust.
- Always use `next/image` with explicit `width`, `height` or `fill` combined with descriptive `alt` text.
- Maintain a calm, neutral, and clean aesthetic in all imagery.
- Optimize images before adding them to `public/`.

---

## 8. Security Guidelines

- **Never** hardcode secrets, API keys, or tokens.
- **Never** commit `.env.local` or any `.env` file with real values.
- Use environment variables for all external service credentials.
- Rate limit all public-facing API endpoints.
- Never expose internal error details, stack traces, or system paths to the client.
- Sanitize all user input server-side.

---

## 9. Code Quality Rules

- All code must be **type-safe** — avoid `any` unless absolutely necessary.
- No `console.log` in production code (use proper error handling).
- No large monolithic components — break down into smaller, testable units.
- Reusable utilities belong in `lib/`.
- Keep imports clean and organized.
- Minimize bundle size — avoid heavy client-side dependencies.
- Use `const` by default; prefer functional patterns.

---

## 10. What NOT To Do

| ❌ Don't                                  | ✅ Instead                                          |
| ----------------------------------------- | --------------------------------------------------- |
| Invent fake testimonials or reviews        | Use real quotes or omit the section                 |
| Fabricate metrics or statistics            | Use verifiable facts or qualitative statements      |
| Hardcode contact info in components        | Reference `lib/constants.ts`                        |
| Break the design token system              | Use `sage-*`, `sand-*`, `charcoal-*` tokens         |
| Convert Server Components to Client       | Only add `"use client"` when truly needed           |
| Add large unnecessary dependencies         | Keep the bundle lean                                |
| Skip alt text on images                    | Always provide descriptive alt text                 |
| Use inline styles or arbitrary colors      | Use Tailwind classes with design tokens             |
| Disable Next.js image optimization globally| Remove `unoptimized` and supply appropriate `sizes`  |

---

## 11. Testing Strategy

**Goal:** Ensure critical UI components and user flows are covered by unit/component tests to prevent regressions, especially around lead generation (Contact form + WhatsApp CTAs) and SEO-critical pages.

### Testing Tools

| Tool | Purpose |
| ---- | ------- |
| **Vitest** | Test runner |
| **@testing-library/react** | DOM rendering and querying |
| **@testing-library/user-event** | Simulating real user interactions |
| **@testing-library/jest-dom** | Extended matchers (`toBeInTheDocument`, etc.) |
| **jsdom** | Browser-like environment for Vitest |

Keep tests fast, deterministic, and focused on **behavior** (what the user sees/does), not implementation details.

### Run Commands

```bash
powershell -ExecutionPolicy Bypass -Command "npx vitest run"    # Run all tests once
```

---

## 12. Token & Resource Optimization Rules for AI Assistants

To optimize context window efficiency, minimize response latency, and drastically lower token utilization, all subsequent AI agents must adhere to the following operational parameters:

1. **Leverage Knowledge Items (KIs):** Before performing any codebase analysis, search the localized `.gemini` memory workspace for relevant artifacts.
2. **Avoid Full-File Re-reads:** Use targeted `StartLine` and `EndLine` parameters when invoking `view_file` to query only the necessary sections.
3. **Surgical Multi-Edits:** For modifications spanning non-contiguous regions, exclusively use `multi_replace_file_content` instead of doing broad, single-block rewrites that exceed active limits.
4. **No Code Redundancies:** Ensure all contact properties, paths, and metadata constants are referenced from `lib/constants.ts`. Do not duplicate definitions.

---

## 13. SOLID, TDD & Design Patterns Reference

For exhaustive development guidelines covering:
* **TDD Loop** (Test-First rule).
* **SOLID Component Design** implementation in Next.js & React.
* **Approved Design Patterns** (Strategy, Registry, Compound Components).

Refer to the official skill guidelines at **[.github/developer-skills.md](file:///.github/developer-skills.md)**.



