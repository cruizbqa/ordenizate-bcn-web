import type { ServicePageContent } from '../types';

export const infantil = {
    meta: {
        title: 'Organización Infantil',
        description: 'La llegada de un bebé o los cambios de etapa traen ilusión, pero también decisiones y organización constante. Diseñamos espacios claros y funcionales que acompañan este proceso, aportando estructura sin añadir presión.',
        canonical: '/servicios/infantil',
    },
    badge: 'Cuidado',
    h1: 'Organización Infantil',
    intro: [
        'La llegada de un bebé o los cambios de etapa traen ilusión, pero también decisiones y organización constante. Diseñamos espacios claros y funcionales que acompañan este proceso, aportando estructura sin añadir presión.',
        'Creamos sistemas prácticos y fáciles de mantener, pensados para aliviar la carga mental y facilitar el día a día familiar.',
    ],
    cards: [
        {
            title: 'Llegada del Bebé',
            text: 'Organización integral de la habitación y zonas asociadas, priorizando accesibilidad, practicidad y descanso para la madre.',
        },
        {
            title: 'Crecimiento y Cambios de Etapa',
            text: 'Adaptación del espacio a nuevas tallas, materiales y necesidades, manteniendo un sistema coherente que evoluciona con cada etapa.',
        },
    ],
    cta: 'Organizar Espacio Infantil',
    imageAlt: 'Habitación infantil con sistema de organización consciente y adaptado a niños',
} satisfies ServicePageContent;
