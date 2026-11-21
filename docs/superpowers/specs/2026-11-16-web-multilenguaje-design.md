# Web multilenguaje es/ca — diseño

**Fecha:** 2026-11-16 · **Estado:** aprobado por el usuario en conversación (revisado 2026-11-21)

## Intent y por qué

La web es un negocio local de Barcelona. El castellano está indexado, pero el catalán abre el mercado local y las búsquedas en catalán ("organitzadora professional Barcelona", "mudances", "armaris"). Objetivo: sites bilingüe real, con URLs propias por idioma, hreflang correcto y arquitectura que admita un idioma N sin rehacer nada.

## Objetivos / no-goals / anti-goals

- **Goal:** URLs siempre prefijadas `/es/...` y `/ca/...`; slugs catalanes traducidos; 301 desde todas las URLs actuales sin prefijo; metadata, canonical, hreflang y `og:locale` por idioma; sitemap bilingüe; validación de claves no vacías en build.
- **No-goal:** no se reescribe el copy castellano existente; se traslada verbatim.
- **No-goal:** no se traducen los avisos legales (`/es/aviso-legal`, `/es/politica-privacidad`). El footer catalán enlaza a la versión castellana; `/ca/aviso-legal` → 301 a `/es/aviso-legal`.
- **Anti-goal:** redirección automática por `Accept-Language` (rompe enlaces compartidos y Google la desaconseja).
- **Anti-goal:** duplicar el contenido en dos URLs canónicas.
- **Anti-goal:** traducciones silenciosamente vacías o caídas al castellano por defecto.

## Restricciones

- next-intl 4.x (compatible Next 16 / React 19, verificado en registry: 4.15.1).
- Segmento `app/[locale]/`; todo estático con `generateStaticParams`.
- 301s permanentes en `next.config.ts`, que corren antes del middleware; no se toca la regla `.html` existente.
- `x-default` → versión castellana.
- Semántica: 1 `<h1>` por página, jerarquía sin saltos, landmarks HTML5, páginas de servicio como `<article>`.
- Sin dependencias nuevas aparte de `next-intl`; sin TMS (formato de claves compatible con Lokalise/Phrase/Crowdin si se adopta).
- Sin banner de cookies: no hay analytics ni tracking de terceros.

## Enfoques considerados

1. **next-intl + `[locale]` con `localePrefix: 'always'`** (elegido): estándar App Router, slugs vía `pathnames`, hreflang y navegación locale-aware resueltos por la librería. Coste: una dependencia y extracción de copy.
2. **DIY `[locale]` + diccionarios propios**: sin dependencia, pero reimplementa hreflang, metadata, selector y detección. Más mantenimiento por idioma; descartado.
3. **Duplicar árboles de rutas por idioma**: descartado; duplica lógica y no escala a N.

## Decisiones del usuario

- Castellano **con** prefijo (`/es`), no en la raíz.
- URL sin idioma carga castellano vía 301.
- Slugs catalanes traducidos (`/ca/serveis/...`, `qui-soc`, `en-linia`).
- Legales solo en castellano; `/ca/aviso-legal` → 301.
- Validación de claves: mismas claves en es/ca y ningún valor vacío.
- Sin banner de cookies.

## Cómo queda el copy

- **Chrome/UI** → `messages/{es,ca}.json` (nav, footer, formulario, errores zod).
- **Copy largo** → `content/{es,ca}/*.ts` tipado con interfaces comunes (`content/types.ts`); un idioma incompleto rompe el build.

## Queda para el builder

- Reparto exacto de claves entre `messages` y `content` cuando una página mezcle ambas capas.
- Layout de las tarjetas del selector de idioma en el navbar (reutiliza estilos existentes).
- Revisión humana del catalán (calidad, no cobertura).
