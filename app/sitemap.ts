import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { defaultLocale, htmlLang, localeOrDefault, locales } from '@/lib/i18n';
import { SITE_URL } from '@/lib/metadata';
import type { RouteHref } from '@/content/types';

export const dynamic = 'force-static';

type RouteConfig = {
    path: RouteHref;
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
    priority: number;
};

// 10 bilingual routes; the two legal pages exist only in Spanish
const routes: RouteConfig[] = [
    { path: '/', changeFrequency: 'monthly', priority: 1 },
    { path: '/sobre-mi', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/servicios/mudanzas', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios/armarios', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios/cocinas', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios/estancias', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios/infantil', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/servicios/online', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contacto', changeFrequency: 'yearly', priority: 0.5 },
];

const legalRoutes: RouteConfig[] = [
    { path: '/aviso-legal', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/politica-privacidad', changeFrequency: 'yearly', priority: 0.3 },
];

function localizedUrl(href: RouteHref, locale: string): string {
    return `${SITE_URL}${getPathname({ href, locale: localeOrDefault(locale) })}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const bilingual = routes.flatMap((route) => {
        const languages = Object.fromEntries(
            locales.map((locale) => [htmlLang[locale], localizedUrl(route.path, locale)])
        );
        languages['x-default'] = localizedUrl(route.path, defaultLocale);

        return locales.map((locale) => ({
            url: localizedUrl(route.path, locale),
            changeFrequency: route.changeFrequency,
            priority: route.priority,
            alternates: { languages },
        }));
    });

    const legal = legalRoutes.map((route) => ({
        url: localizedUrl(route.path, defaultLocale),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));

    return [...bilingual, ...legal];
}
