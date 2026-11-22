import type { ServicePageContent } from '../types';

export const cocinas = {
    meta: {
        title: 'Cocinas y Despensas',
        description: 'La cocina es un espacio de movimiento continuo. Cuando no existe una estructura clara, se generan duplicidades, acumulaciones y una sensación constante de desorden.',
        canonical: '/servicios/cocinas',
    },
    badge: 'Criterio',
    h1: 'Cocinas y Despensas',
    intro: [
        'La cocina es un espacio de movimiento continuo. Cuando no existe una estructura clara, se generan duplicidades, acumulaciones y una sensación constante de desorden.',
        'Diseñamos una organización coherente y fácil de mantener, donde cada categoría tiene su lugar y cada zona responde a un uso real. Aplicamos soluciones prácticas que permiten visualizar mejor lo que hay, evitar compras innecesarias y mantener el equilibrio sin esfuerzo añadido.',
    ],
    cards: [
        {
            title: 'Cocina',
            text: 'Distribución funcional de utensilios, vajilla y zonas de trabajo, priorizando el acceso cómodo y la coherencia en el uso diario.',
        },
        {
            title: 'Despensa',
            text: 'Organización por categorías y agrupaciones lógicas que facilitan la rotación de productos y reducen la acumulación innecesaria.',
        },
    ],
    cta: 'Organizar mi Cocina',
    imageAlt: 'Cocina y despensa organizada con botes bien etiquetados en una cocina real de España',
} satisfies ServicePageContent;
