# Páginas por servicio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 6 páginas individuales bajo `/servicios/<slug>` con el contenido existente tal cual; `/servicios` como índice de tarjetas mínimas; enlaces y sitemap actualizados.

**Architecture:** reubicación de los 6 `<Section>` de `app/servicios/page.tsx` a páginas estáticas propias de Next App Router; el índice queda con tarjetas mínimas; los hrefs internos (`/servicios#x`) pasan a rutas reales.

**Tech Stack:** Next.js App Router (páginas estáticas), Tailwind tokens existentes, lucide-react, sitemap.ts de Next.

**Spec:** `docs/superpowers/specs/2026-11-15-paginas-servicio-design.md`

## Global Constraints

- No se escribe ni reescribe ni una palabra de contenido — solo se reubica JSX (restricción del usuario, verbatim).
- Metadata por hija: `title`, `description` (primera frase de su texto actual), `alternates: { canonical: '/servicios/<slug>' }`.
- El template del layout `%s | Ordenízate Bcn` añade la marca; los títulos no deben incluir el pipe manual.
- CTA "Más información"/"Reservar" de cada hija → `href="/contacto"` (el texto no se toca).
- Los hrefs `/servicios#x` desaparecen de todo el árbol (`grep -rn "servicios#" app/ components/` → 0).

## Review Focus

1. CTA "Más información" de cada sección apuntaba a su propio anchor — en la hija queda sin sentido. Esperado: el href cambia a `/contacto` (el texto no se toca). Pin: curl del CTA en cada hija (Task 6).
2. Chip con color (`bg-yellow-50 text-brand-yellow-700`…) debe viajar con su sección — cada página hija mantiene su combinación. Pin: contraste Playwright (Task 6).
3. Ninguna frase del contenido debe quedar en dos URLs. Pin: grep de una frase clave de cada servicio, que aparezca 1 vez en el árbol (Task 3/4).
4. Enlaces rotos: cero `#mudanzas`/`#armarios`… residuales en `Footer`, home y slider. Pin: grep (Task 5).

---

### Task 1: página Mudanzas (define el patrón)

**Files:**
- Create: `app/servicios/mudanzas/page.tsx`
- Modify: `app/servicios/page.tsx:35-84` (quitar `<Section id="mudanzas">` completa)

**Interfaces:**
- Produces: la URL `/servicios/mudanzas` y el patrón de página (metadata + JSX) que replican Tasks 2-3.

- [ ] **Step 1:** Crear `app/servicios/mudanzas/page.tsx` con metadata + JSX íntegro de la sección mudanzas (id del Section fuera, CTA → `/contacto`).
- [ ] **Step 2:** `npm run build` — Expected: PASS, ruta `○ /servicios/mudanzas` en el output.
- [ ] **Step 3:** Commit `feat: página /servicios/mudanzas`.

### Task 2: páginas Armarios, Cocinas, Estancias, Infantil, Online (replicar patrón)

**Files:**
- Create: `app/servicios/{armarios,cocinas,estancias,infantil,online}/page.tsx`
- Modify: `app/servicios/page.tsx` (quitar las 5 `<Section>` restantes)

**Interfaces:**
- Consumes: el patrón de Task 1.
- Produces: las URLs `/servicios/{armarios,cocinas,estancias,infantil,online}`.

- [ ] **Step 1:** Replicar el patrón por servicio (title/description de su contenido actual, canonical, CTA → `/contacto`).
- [ ] **Step 2:** `npm run build` — Expected: PASS con las 6 rutas nuevas.
- [ ] **Step 3:** Commit `feat: páginas de armarios, cocinas, estancias, infantil y online`.

### Task 3: `/servicios` como índice

**Files:**
- Modify: `app/servicios/page.tsx` (header actual + grid de 6 tarjetas)

**Interfaces:**
- Consumes: las URLs de Tasks 1-2.

- [ ] **Step 1:** Tarjeta mínima por servicio: icono (Truck, Shirt, ChefHat, Home, ToyBrick, Monitor — los que ya usa la página) + palabra clave del chip (Control, Funcionalidad, Cuidado, Criterio, Armonía, A tu ritmo) + CTA `Ver servicio` → hija. Sin línea de texto.
- [ ] **Step 2:** `npm run build` PASS + `curl -s localhost:3123/servicios | grep -c 'href="/servicios/'` — Expected: ≥ 6.
- [ ] **Step 3:** Commit `refactor: /servicios como índice`.

### Task 4: enlaces internos

**Files:**
- Modify: `components/layout/Footer.tsx`, `app/page.tsx`, `components/ui/ServicesSlider.tsx`

- [ ] **Step 1:** Reescribir `href="/servicios#x"` → `href="/servicios/x"` en los tres archivos.
- [ ] **Step 2:** `grep -rn "servicios#" app/ components/` — Expected: 0 resultados.
- [ ] **Step 3:** Commit `refactor: enlaces internos a páginas de servicio`.

### Task 5: sitemap

**Files:**
- Modify: `app/sitemap.ts`

- [ ] **Step 1:** Añadir las 6 URLs (`/servicios/mudanzas`…, priority 0.8, changeFrequency monthly).
- [ ] **Step 2:** `npm run build` PASS.
- [ ] **Step 3:** Commit `feat: sitemap con páginas de servicio`.

### Task 6: verificación end-to-end

- [ ] **Step 1:** `npx vitest run` — Expected: 20/20 PASS.
- [ ] **Step 2:** Build + `npm run start`; curl de cada hija: `<title>`, `canonical`, `og:image` heredado — Expected: 6/6 correctas.
- [ ] **Step 3:** Contraste Playwright sobre `/servicios` + las 6 hijas — Expected: 0 fallos.
