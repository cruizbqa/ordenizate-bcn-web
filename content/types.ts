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

export type ServiceHref =
    | '/servicios/mudanzas'
    | '/servicios/armarios'
    | '/servicios/cocinas'
    | '/servicios/estancias'
    | '/servicios/infantil'
    | '/servicios/online';

export type HomeContent = {
    meta: PageMeta & {
        ogTitle: string;
        ogDescription: string;
        twitterTitle: string;
        imageAlt: string;
    };
    hero: {
        badge: string;
        badgeCta: string;
        h1: { text: string; accent: string };
        h2: string;
        intro: InlinePart[];
        ctaPrimary: string;
        ctaWhatsapp: string;
        imageAlt: string;
    };
    trust: { before: string; place: string; after: string };
    services: {
        heading: string;
        intro: string;
        cta: string;
        items: {
            href: ServiceHref;
            title: string;
            keyword: string;
            description: string;
            bullets: string[];
            cta?: string;
        }[];
    };
    process: {
        heading: string;
        intro: string;
        steps: { title: string; desc: string }[];
    };
    finalCta: {
        heading: string;
        text: string;
        primary: string;
        whatsapp: string;
    };
};

export type ServicesIndexContent = {
    meta: PageMeta;
    header: { h1: string; intro: string };
    services: { href: ServiceHref; label: string }[];
    cta: string;
    values: { heading: string; items: { title: string; desc: string }[] };
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

export type AboutContent = {
    meta: PageMeta;
    h1: { text: string; accent: string };
    greeting: string;
    paragraphs: string[];
    closing: string;
    cta: string;
    imageAlt: string;
};

export type ContactContent = {
    meta: PageMeta & { ogTitle: string; ogDescription: string };
    h1: string;
    intro: string[];
    infoHeading: string;
    labels: { email: string; whatsapp: string; area: string };
    areaText: string;
    imageAlt: string;
};
