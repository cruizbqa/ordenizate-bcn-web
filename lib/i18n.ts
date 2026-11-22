export const locales = ['es', 'ca'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

// BCP-47 tags for <html lang>, hreflang and og:locale
export const htmlLang: Record<Locale, string> = {
  es: 'es-ES',
  ca: 'ca-ES',
};

// Pages that only exist in the default locale (legal documents are not translated)
export const onlyDefaultLocalePaths = ['/aviso-legal', '/politica-privacidad'] as const;

export const ogLocale: Record<Locale, string> = {
  es: 'es_ES',
  ca: 'ca_ES',
};

export function localeOrDefault(locale: string): Locale {
  return (locales as readonly string[]).includes(locale) ? (locale as Locale) : defaultLocale;
}
