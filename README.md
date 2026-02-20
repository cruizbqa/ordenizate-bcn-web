# Ordenízate Bcn - Professional Organization Website

A premium, performant website built for a Professional Organizer in Barcelona.
Stacks: **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**.

## 🚀 Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🧪 Testing

We use **Vitest** and **React Testing Library** for unit and component testing.

- **Run all tests (CI mode):**
  ```bash
  npm test
  ```
- **Run tests in watch mode:**
  ```bash
  npm run test:watch
  ```

## 📂 Project Structure

-   `app/`: App Router pages and layouts.
    -   `page.tsx`: Home / Landing Page.
    -   `servicios/`: Services listings.
    -   `sobre-mi/`: About page.
    -   `contacto/`: Contact form.
-   `components/`
    -   `ui/`: Reusable UI components (Button, Container, Section).
    -   `layout/`: Navbar, Footer.
-   `globals.css`: Tailwind v4 theme configuration and CSS variables.
-   `AGENT.md`: Context and guidance for AI agents working on this repo.

## 🎨 Design System

-   **Fonts**: Mosk (Sans & Serif).
-   **Colors**: 
    -   Brand Cyan (`#00a6d9`) - Primary accent.
    -   Sand Gray (`#999da3`) - Neutrals.
    -   Charcoal - Text.
    -   Brand accents: Yellow, Purple, Pink.

## 🛠 Deployment & Setup

### Environment Variables

Rename `.env.example` to `.env.local` and configure:

```bash
# Resend (Email)
RESEND_API_KEY=re_123...
CONTACT_TO_EMAIL=your@email.com
CONTACT_FROM_EMAIL=onboarding@resend.dev

# Upstash (Rate Limiting)
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# Config
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/34...
```

### Services Setup

1.  **Resend**: Create an account and verify your domain. Add the API Key.
2.  **Upstash**: Create a Redis database. Copy REST URL and Token.

## 🛠 Deployment to Vercel

1.  Push repository to GitHub/GitLab.
2.  Import project in Vercel.
3.  Framework Preset: **Next.js**.
4.  Add the Environment Variables in Vercel Project Settings.
5.  Deploy.
