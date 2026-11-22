import { describe, expect, it } from 'vitest';
import esMessages from '@/messages/es.json';
import caMessages from '@/messages/ca.json';
import { getContent } from '@/content';
import { htmlLang, locales, onlyDefaultLocalePaths } from '@/lib/i18n';
import { buildMetadata } from '@/lib/metadata';
import { routing } from '@/i18n/routing';

function flatten(value: unknown, prefix = '', out = new Map<string, string>()): Map<string, string> {
    if (typeof value === 'string') {
        out.set(prefix, value);
    } else if (Array.isArray(value)) {
        value.forEach((item, index) => flatten(item, `${prefix}[${index}]`, out));
    } else if (value && typeof value === 'object') {
        for (const [key, item] of Object.entries(value)) {
            flatten(item, prefix ? `${prefix}.${key}` : key, out);
        }
    }
    return out;
}

const esContent = getContent('es');
const caContent = getContent('ca');

describe('i18n coverage', () => {
    it('messages have exactly the same keys in es and ca', () => {
        const esKeys = [...flatten(esMessages).keys()].sort();
        const caKeys = [...flatten(caMessages).keys()].sort();
        expect(caKeys).toEqual(esKeys);
    });

    it('content has exactly the same keys in es and ca', () => {
        const esKeys = [...flatten(esContent).keys()].sort();
        const caKeys = [...flatten(caContent).keys()].sort();
        expect(caKeys).toEqual(esKeys);
    });

    it('has no empty strings in messages or content', () => {
        const empty = [...flatten(esMessages), ...flatten(caMessages), ...flatten(esContent), ...flatten(caContent)]
            .filter(([, value]) => value.trim() === '')
            .map(([key]) => key);

        expect(empty).toEqual([]);
    });

    it('defines an html lang for every locale', () => {
        expect(Object.keys(htmlLang).sort()).toEqual([...locales].sort());
        for (const locale of locales) {
            expect(htmlLang[locale].trim()).not.toBe('');
        }
    });

    it('every pathname has both locales unless it is marked as Spanish-only', () => {
        const spanishOnly = onlyDefaultLocalePaths as readonly string[];

        for (const [pathname, localized] of Object.entries(routing.pathnames)) {
            if (spanishOnly.includes(pathname)) {
                expect(typeof localized).toBe('string');
            } else if (typeof localized !== 'string') {
                expect(localized).toMatchObject({ es: expect.any(String), ca: expect.any(String) });
            }
        }
    });

    it('Spanish-only pages emit es-ES but not ca-ES', () => {
        const metadata = buildMetadata(
            { title: 'Aviso Legal', description: 'Aviso legal', canonical: '/aviso-legal' },
            'es'
        );
        const languages = metadata.alternates?.languages as Record<string, string>;

        expect(languages['es-ES']).toContain('/es/aviso-legal');
        expect(languages['x-default']).toContain('/es/aviso-legal');
        expect(languages['ca-ES']).toBeUndefined();
    });
});
