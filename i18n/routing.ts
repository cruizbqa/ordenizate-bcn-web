import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from '@/lib/i18n';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false,
  pathnames: {
    '/': '/',
    '/sobre-mi': { es: '/sobre-mi', ca: '/qui-soc' },
    '/servicios': { es: '/servicios', ca: '/serveis' },
    '/servicios/mudanzas': { es: '/servicios/mudanzas', ca: '/serveis/mudances' },
    '/servicios/armarios': { es: '/servicios/armarios', ca: '/serveis/armaris' },
    '/servicios/cocinas': { es: '/servicios/cocinas', ca: '/serveis/cuines' },
    '/servicios/estancias': { es: '/servicios/estancias', ca: '/serveis/estades' },
    '/servicios/infantil': { es: '/servicios/infantil', ca: '/serveis/infantil' },
    '/servicios/online': { es: '/servicios/online', ca: '/serveis/en-linia' },
    '/contacto': { es: '/contacto', ca: '/contacte' },
    '/aviso-legal': '/aviso-legal',
    '/politica-privacidad': '/politica-privacidad',
  },
});

export type AppPathname = keyof typeof routing.pathnames;
