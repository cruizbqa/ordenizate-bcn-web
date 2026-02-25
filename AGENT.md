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

- One `<h1>` per page, with proper heading hierarchy
- Export `metadata` per page for SEO
- Use `next/image` for all images (with `alt` text)
- Use `next/font` for font loading (custom font: Mosk)
- Accessibility is required: semantic HTML, ARIA labels, keyboard navigation
- Keep components small, composable, and focused
- Avoid duplicating Tailwind utility combinations — extract to components

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
- All contact details are centralized in `lib/constants.ts` — never hardcoded in components

---

## 5. SEO Strategy

**Target keywords:**

- "Organizadora profesional en Barcelona"
- "Organización del hogar Barcelona"
- "Organización de cocinas"
- "Mudanza organizada"

**Implementation:**

- Local SEO emphasis (Barcelona province, service areas)
- Clean, descriptive URLs (`/servicios`, `/sobre-mi`, `/contacto`)
- Semantic heading structure on every page
- `sitemap.xml` and `robots.txt` configured
- OpenGraph and Twitter Card metadata per page
- Structured, keyword-relevant page titles and meta descriptions

---

## 6. UX & Conversion Principles

- **Primary CTA:** WhatsApp (lowest friction for the target audience)
- **Secondary CTA:** Contact form / "Reserva una llamada"
- Copy is friendly but premium — no exaggerated or pushy language
- **Premium Alignment:** All form inputs (Input, Select, Textarea) must share a consistent height (`h-11`) and label spacing (`mb-1.5`) to maintain visual harmony in desktop views.
- **Mobile-first** design; all layouts must work flawlessly on small screens
- Fast loading is non-negotiable — minimize JS, optimize images
- Clear trust signals: real testimonials, real service descriptions
- No fake urgency, no invented statistics

---

## 7. Image Guidelines

- Prefer **real before/after photos** of organized spaces
- Avoid generic stock photography — it undermines trust
- Always use `next/image` with explicit `width`, `height`, and descriptive `alt` text
- Maintain a calm, neutral, and clean aesthetic in all imagery
- Optimize images before adding them to `public/`

---

## 8. Security Guidelines

- **Never** hardcode secrets, API keys, or tokens
- **Never** commit `.env.local` or any `.env` file with real values
- Use environment variables for all external service credentials
- Rate limit all public-facing API endpoints
- Never expose internal error details, stack traces, or system paths to the client
- Sanitize all user input server-side

---

## 9. Code Quality Rules

- All code must be **type-safe** — avoid `any` unless absolutely necessary
- No `console.log` in production code (use proper error handling)
- No large monolithic components — break down into smaller, testable units
- Reusable utilities belong in `lib/`
- Keep imports clean and organized
- Minimize bundle size — avoid heavy client-side dependencies
- Use `const` by default; prefer functional patterns

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
| **msw** *(optional)* | Network mocking — only if components fetch data directly |

Keep tests fast, deterministic, and focused on **behavior** (what the user sees/does), not implementation details.

### Run Commands

```bash
npm test          # Run all tests once (used in CI)
npm run test:watch  # Interactive watch mode for development
```

### What to Test (Priorities)

**UI Primitives (`components/ui/*`)**
- Renders without crashing
- Correct semantics (`button`, `link`, `input`)
- Disabled/loading states
- Accessibility attributes when applicable

**Shared Components (`components/*`)**
- Navigation items exist with correct `href`
- WhatsApp CTA renders correct link/phone
- Hero sections include max 1 `<h1>` per page
- Images include descriptive `alt` text

**Pages (`app/*`)**
- `metadata` exports include `title`, `description`, `openGraph`, `twitter`
- Primary CTA (WhatsApp) present on key pages
- Contact page form behavior (client validation, required fields, custom Select behavior)
- Form validation error messages (must use "Campo obligatorio" and "Email no válido")
- Form submission flow (pending state, success/error feedback)

### What NOT to Test

- Tailwind class lists — avoid snapshots that break on styling changes
- Next.js router internals
- Animations or purely visual layout
- Internal component state shape unless it encodes critical logic

### Test Conventions

- Prefer role-based queries: `getByRole`, `findByRole`, `getByLabelText`
- Add accessible labels where needed to enable robust queries
- Avoid brittle selectors (`querySelector`, class names)
- Mock external dependencies:
  - `next/image` → simple `<img />` mock
  - `next/navigation` hooks → mock only the hooks used
- Test file location mirrors source structure:
  - `components/ui/Button.test.tsx`
  - `components/layout/Navbar.test.tsx`
  - `app/contacto/page.test.tsx` (only if page is a Server Component or props-driven)

### Coverage Expectations

Aim for **high coverage on critical flows**, not 100% everywhere.

**Minimum required coverage:**
- Core CTA components (Button, WhatsApp links)
- Contact item copy interaction
- Navbar navigation and mobile menu toggle
- Any non-trivial utility logic in `lib/`

