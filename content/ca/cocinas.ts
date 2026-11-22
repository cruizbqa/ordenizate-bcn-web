import type { ServicePageContent } from '../types';

export const cocinas: ServicePageContent = {
    meta: {
        title: 'Cuines i Rebosts',
        description: 'La cuina és un espai de moviment continu. Quan no existeix una estructura clara, es generen duplicitats, acumulacions i una sensació constant de desordre.',
        canonical: '/servicios/cocinas',
    },
    badge: 'Criteri',
    h1: 'Cuines i Rebosts',
    intro: [
        'La cuina és un espai de moviment continu. Quan no existeix una estructura clara, es generen duplicitats, acumulacions i una sensació constant de desordre.',
        'Dissenyem una organització coherent i fàcil de mantenir, on cada categoria té el seu lloc i cada zona respon a un ús real. Apliquem solucions pràctiques que permeten visualitzar millor el que hi ha, evitar compres innecessàries i mantenir l\'equilibri sense un esforç afegit.',
    ],
    cards: [
        {
            title: 'Cuina',
            text: 'Distribució funcional d\'estris, vaixella i zones de treball, prioritzant l\'accés còmode i la coherència en l\'ús diari.',
        },
        {
            title: 'Rebost',
            text: 'Organització per categories i agrupacions lògiques que faciliten la rotació de productes i redueixen l\'acumulació innecessària.',
        },
    ],
    cta: 'Organitzar la meva cuina',
    imageAlt: 'Cuina i rebost organitzats amb pots ben etiquetats en una cuina real d\'Espanya',
};
