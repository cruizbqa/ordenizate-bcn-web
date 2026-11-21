import type { ServicePageContent } from '../types';

export const mudanzas = {
    meta: {
        title: 'Mudanzas (Pre + Post)',
        description: 'La mudanza suele venir acompañada de decisiones, tiempos ajustados y una carga añadida. Nos ocupamos de estructurar el proceso para que se viva de forma tranquila y organizada.',
        canonical: '/servicios/mudanzas',
    },
    badge: 'Control',
    h1: 'Mudanzas (Pre + Post)',
    intro: [
        'La mudanza suele venir acompañada de decisiones, tiempos ajustados y una carga añadida. Nos ocupamos de estructurar el proceso para que se viva de forma tranquila y organizada.',
    ],
    note: {
        label: 'Nota:',
        text: 'El servicio es completamente adaptable: puede delegarse de forma integral o contratar únicamente la fase de pre-mudanza, mudanza o post-mudanza, según las necesidades de cada hogar.',
    },
    bullets: [
        {
            title: 'Pre-mudanza',
            items: [
                'Descarte guiado',
                'Embalaje profesional',
                'Etiquetado detallado',
            ],
        },
        {
            title: 'Post-mudanza',
            items: [
                'Desembalaje integral y colocación minuciosa',
                'Organización funcional adaptada a tu estilo de vida',
                'Entrega final del hogar listo para disfrutar',
            ],
        },
    ],
    cta: 'Pedir Presupuesto Mudanza',
    imageAlt: 'Mudanza Organizada en Barcelona',
} satisfies ServicePageContent;
