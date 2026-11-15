# Páginas por servicio — diseño

**Fecha:** 2026-11-15 · **Estado:** aprobado por el usuario en conversación

## Intent y por qué

Que cada servicio de Ordenízate posicione por sí solo en búsquedas concretas ("organizadora armarios Barcelona", "ayuda mudanza ordenar Barcelona"). Hoy los 6 servicios viven como secciones ancladas dentro de `/servicios`; una sola URL compite por todas las keywords a la vez.

## Objetivos / no-goals / anti-goals

- **Goal:** 6 páginas individuales bajo `/servicios/<slug>`, cada una con metadata propia (title, description, canonical).
- **No-goal:** no se redacta ni reescribe ni una palabra de contenido — el JSX de cada sección se traslada tal cual. Restricción explícita del usuario ("no cambies los textos").
- **Anti-goal:** duplicar el contenido en `/servicios` y en las hijas (contenido duplicado en dos URLs indexables = fallo aunque compile).
- **No-goal:** redirects 301 — los anchors (`/servicios#mudanzas`) nunca fueron URLs indexadas.

## Restricciones

- Los textos existentes se reubican, no se modifican.
- Los hrefs internos de los CTA **sí** cambian (no son texto): el "Más información" de cada sección apuntaba a su propio anchor; en la página hija apunta a `/contacto`. Decisión documentada y aceptada en la conversación.
- Iconos, chips de color, fotos y estilos viajan con su sección sin cambios.

## Enfoques considerados

1. **URLs anidadas `/servicios/<slug>`** (elegida) — mantiene jerarquía temática, refuerza `/servicios` como hub. Slugs: `mudanzas`, `armarios`, `cocinas`, `estancias`, `infantil`, `online`.
2. Top-level `/mudanzas` — descartada: pierde la agrupación; con nuevas services el raíz se desordena.
3. **`/servicios` como índice resumido** (elegido) — header actual + una tarjeta mínima por servicio: **icono + palabra clave + CTA a la hija, sin línea de texto** (ajuste explícito del usuario).
4. Dejar `/servicios` íntegro + duplicar secciones — descartado (duplicado indexable).

## Queda para el builder (menor)

- Layout concreto del índice: reuso de los estilos de tarjeta existentes.
- Fondo alternado de las hijas (`bg-sand-50/50`): se conserva el de cada sección tal como estaba.
