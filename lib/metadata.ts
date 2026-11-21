import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { defaultLocale, htmlLang, localeOrDefault, locales, ogLocale, onlyDefaultLocalePaths } from '@/lib/i18n';
import type { PageMeta, RouteHref } from '@/content/types';

export const SITE_URL = 'https://ordenizate.es';

export function localizedUrl(href: RouteHref, locale: string): string {
    return `${SITE_URL}${getPathname({ href, locale: localeOrDefault(locale) })}`;
}

export function isOnlyDefaultLocale(href: RouteHref): boolean {
    return (onlyDefaultLocalePaths as readonly string[]).includes(href);
}

export function buildMetadata(meta: PageMeta, locale: string): Metadata {
    const languages: Record<string, string> = {};

    for (const l of locales) {
        if (isOnlyDefaultLocale(meta.canonical) && l !== defaultLocale) continue;
        languages[htmlLang[l]] = localizedUrl(meta.canonical, l);
    }
    languages['x-default'] = localizedUrl(meta.canonical, defaultLocale);

    const canonical = localizedUrl(meta.canonical, locale);

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
            url: canonical,
            siteName: 'Ordenízate',
            locale: ogLocale[localeOrDefault(locale)],
            type: 'website',
        },
        alternates: {
            canonical,
            languages,
        },
    };
}
