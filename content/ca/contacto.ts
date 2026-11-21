import type { ContactContent } from '../types';

export const contacto: ContactContent = {
    meta: {
        title: 'Contacte',
        description: 'Contacta amb Ordenízate. Organitzadora professional. Escriu-nos per correu electrònic o WhatsApp per començar.',
        canonical: '/contacto',
        ogTitle: 'Contacte | Ordenízate',
        ogDescription: 'Explica\'ns què necessites. T\'ajudem a transformar el teu espai.',
    },
    h1: 'Parlem del teu espai',
    intro: [
        'El primer pas és entendre com funciona el teu espai i què necessites realment.',
        'Explica\'ns què passa i dissenyarem la millor solució per a tu.',
    ],
    infoHeading: 'Informació de contacte',
    labels: {
        email: 'Correu electrònic',
        whatsapp: 'WhatsApp',
        area: 'Àrea de servei',
    },
    areaText: 'Disponible per a projectes presencials i assessoraments en línia.',
    imageAlt: 'Espai de treball ordenat',
};
