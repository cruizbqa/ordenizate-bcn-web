# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Setup
- Install dependencies (preferring npm because `package-lock.json` is present):
  - `npm install`

### Development
- Start the Next.js development server (App Router) on port 3000:
  - `npm run dev`
- The main entry page during development is `app/page.tsx`. Changes there hot-reload automatically.

### Production build & run
- Create an optimized production build:
  - `npm run build`
- Start the production server (after a successful build):
  - `npm start`

### Linting
- Run the full lint suite using the flat ESLint config in `eslint.config.mjs` (Next.js core-web-vitals + TypeScript):
  - `npm run lint`
- Lint a single file if needed (uses the same config):
  - `npx eslint app/page.tsx`

### Testing
- There is currently no test script configured in `package.json`. When a test runner is added, update this section with commands for running the full suite and a single test.

## Architecture and structure

### Framework and routing model
- This is a Next.js App Router project (`next` 16) using the `app/` directory as the primary routing and layout system.
- `app/layout.tsx` defines the root HTML shell (including `<html>`, `<body>`, and global classes) and is applied to all routes.
- `app/page.tsx` is the default route (`/`) and acts as the current landing page. Future routes should be added under `app/<route>/page.tsx` following the standard App Router conventions.

### Global layout, fonts, and theming
- `app/layout.tsx` imports `app/globals.css` and configures fonts via `next/font/google`:
  - `Geist` and `Geist_Mono` are loaded and exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`.
  - The `<body>` element receives these font variables in its `className`, making them available throughout the tree.
- `app/globals.css` is the central styling entry point:
  - Uses Tailwind CSS v4 via `@tailwindcss/postcss` (configured in `postcss.config.mjs`) and the `@theme inline` block to map global CSS variables (background, foreground, fonts) into Tailwind design tokens.
  - Sets light/dark mode color variables on `:root` and applies them to the `body`, so all pages inherit consistent background/foreground behavior.

### Page composition and styling
- `app/page.tsx` composes the landing page using:
  - Next.js `Image` components for the Next.js and Vercel assets.
  - Tailwind utility classes that rely on the theme defined in `app/globals.css` (e.g., `bg-zinc-*`, `dark:*` variants, flexbox layout utilities).
- The page is structured as a centered layout with a constrained `main` column, intended to be replaced or extended with the actual application UI.

### Tooling and configuration
- **TypeScript** (`tsconfig.json`):
  - `strict` mode is enabled with `noEmit` and `moduleResolution: "bundler"` tuned for Next.js.
  - A path alias `@/*` is configured to point at the repo root (`./*`), enabling imports like `@/app/...` instead of long relative paths.
- **ESLint** (`eslint.config.mjs`):
  - Uses the Next.js flat configs `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` for framework-aware linting.
  - Overrides default ignores via `globalIgnores` to explicitly ignore build artifacts such as `.next/**`, `out/**`, `build/**`, and `next-env.d.ts`.
- **Next.js configuration** (`next.config.ts`):
  - Enables the React Compiler (`reactCompiler: true`) at the framework level. New React components should be written in a way that is compatible with React Compiler expectations.
- **PostCSS/Tailwind** (`postcss.config.mjs` and `app/globals.css`):
  - Tailwind is wired through PostCSS only (no separate `tailwind.config` file), with design tokens defined inline in `globals.css`. Global visual changes (colors, typography) should typically be made there.
