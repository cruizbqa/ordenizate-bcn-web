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

export type ServiceList = { title: string; items: string[] };
export type ServiceCard = { title: string; text: string };
export type ServiceItemContent = { title: string; description: string };

/** Shared shape of the six service detail pages. */
export type ServicePageContent = {
    meta: PageMeta;
    badge: string;
    h1: string;
    intro: string[];
    note?: { label: string; text: string };
    bullets?: ServiceList[];
    includes?: { title: string; items: string[] };
    cards?: ServiceCard[];
    items?: ServiceItemContent[];
    cta: string;
    imageAlt: string;
};

export type HomeContent = typeof import('./es/home').home;

export type ServiceHref =
    | '/servicios/mudanzas'
    | '/servicios/armarios'
    | '/servicios/cocinas'
    | '/servicios/estancias'
    | '/servicios/infantil'
    | '/servicios/online';

export type ServicesIndexContent = {
    meta: PageMeta;
    header: { h1: string; intro: string };
    services: { href: ServiceHref; label: string }[];
    cta: string;
    values: { heading: string; items: { title: string; desc: string }[] };
};

export type AboutContent = typeof import('./es/sobre-mi').sobreMi;
export type ContactContent = typeof import('./es/contacto').contacto;
