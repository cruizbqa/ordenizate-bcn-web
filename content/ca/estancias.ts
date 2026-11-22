import type { ServicePageContent } from '../types';

export const estancias: ServicePageContent = {
    meta: {
        title: 'Organització d\'Estades',
        description: 'Cada racó de la llar té una funció. Quan l\'ordre es perd, augmenta la sensació de saturació.',
        canonical: '/servicios/estancias',
    },
    badge: 'Harmonia',
    h1: 'Organització d\'Estades',
    intro: [
        'Cada racó de la llar té una funció. Quan l\'ordre es perd, augmenta la sensació de saturació.',
        'Dissenyem sistemes adaptats a l\'ús real de l\'espai, facilitant-ne el manteniment i reduint el desordre acumulat, retornant equilibri i funcionalitat a la llar.',
    ],
    items: [
        {
            title: 'Banys i Zones de Rentat',
            description: 'Classificació lògica de productes per simplificar la rutina diària.',
        },
        {
            title: 'Despatxos',
            description: 'Estructuració de documentació i materials per recuperar claredat i enfocament.',
        },
        {
            title: 'Trasters',
            description: 'Reorganització estratègica d\'emmagatzematge profund, prioritzant accessibilitat i coherència.',
        },
    ],
    cta: 'Organitzar les meves estades',
    imageAlt: 'Estada de la llar harmonitzada',
};
