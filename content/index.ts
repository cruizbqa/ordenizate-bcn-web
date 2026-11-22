import type {
    AboutContent,
    ContactContent,
    HomeContent,
    ServicePageContent,
    ServicesIndexContent,
} from './types';
import { home as homeEs } from './es/home';
import { serviciosIndex as serviciosIndexEs } from './es/servicios-index';
import { mudanzas as mudanzasEs } from './es/mudanzas';
import { armarios as armariosEs } from './es/armarios';
import { cocinas as cocinasEs } from './es/cocinas';
import { estancias as estanciasEs } from './es/estancias';
import { infantil as infantilEs } from './es/infantil';
import { online as onlineEs } from './es/online';
import { sobreMi as sobreMiEs } from './es/sobre-mi';
import { contacto as contactoEs } from './es/contacto';
import { home as homeCa } from './ca/home';
import { serviciosIndex as serviciosIndexCa } from './ca/servicios-index';
import { mudanzas as mudanzasCa } from './ca/mudanzas';
import { armarios as armariosCa } from './ca/armarios';
import { cocinas as cocinasCa } from './ca/cocinas';
import { estancias as estanciasCa } from './ca/estancias';
import { infantil as infantilCa } from './ca/infantil';
import { online as onlineCa } from './ca/online';
import { sobreMi as sobreMiCa } from './ca/sobre-mi';
import { contacto as contactoCa } from './ca/contacto';

export type Content = {
    home: HomeContent;
    serviciosIndex: ServicesIndexContent;
    mudanzas: ServicePageContent;
    armarios: ServicePageContent;
    cocinas: ServicePageContent;
    estancias: ServicePageContent;
    infantil: ServicePageContent;
    online: ServicePageContent;
    sobreMi: AboutContent;
    contacto: ContactContent;
};

const content: Record<'es' | 'ca', Content> = {
    es: {
        home: homeEs,
        serviciosIndex: serviciosIndexEs,
        mudanzas: mudanzasEs,
        armarios: armariosEs,
        cocinas: cocinasEs,
        estancias: estanciasEs,
        infantil: infantilEs,
        online: onlineEs,
        sobreMi: sobreMiEs,
        contacto: contactoEs,
    },
    ca: {
        home: homeCa,
        serviciosIndex: serviciosIndexCa,
        mudanzas: mudanzasCa,
        armarios: armariosCa,
        cocinas: cocinasCa,
        estancias: estanciasCa,
        infantil: infantilCa,
        online: onlineCa,
        sobreMi: sobreMiCa,
        contacto: contactoCa,
    },
};

/** Unknown locales fall back to Spanish; the layout already 404s invalid ones. */
export function getContent(locale: string): Content {
    return locale === 'ca' ? content.ca : content.es;
}
