import type { routing } from '@/i18n/routing';

/** Canonical pathnames accepted by the locale-aware Link and Button components. */
export type RouteHref = keyof typeof routing.pathnames;

/** A piece of long copy with optional inline links and line breaks. */
export type InlinePart =
    | { text: string }
    | { link: RouteHref; label: string }
    | { br: 'sm' | 'all' };

export type PageMeta = {
    title: string;
    description: string;
    canonical: RouteHref;
};

export function getMeta(content: { meta: PageMeta }) {
    return content.meta;
}
