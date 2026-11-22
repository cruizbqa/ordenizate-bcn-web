import type { ServicePageContent } from '../types';

export const estancias = {
    meta: {
        title: 'Organización de Estancias',
        description: 'Cada rincón del hogar tiene una función. Cuando el orden se pierde, aumenta la sensación de saturación.',
        canonical: '/servicios/estancias',
    },
    badge: 'Armonía',
    h1: 'Organización de Estancias',
    intro: [
        'Cada rincón del hogar tiene una función. Cuando el orden se pierde, aumenta la sensación de saturación.',
        'Diseñamos sistemas adaptados al uso real del espacio, facilitando su mantenimiento y reduciendo el desorden acumulado, devolviendo equilibrio y funcionalidad al hogar.',
    ],
    items: [
        {
            title: 'Baños y Zonas de Lavado',
            description: 'Clasificación lógica de productos para simplificar la rutina diaria.',
        },
        {
            title: 'Despachos',
            description: 'Estructuración de documentación y materiales para recuperar claridad y enfoque.',
        },
        {
            title: 'Trasteros',
            description: 'Reorganización estratégica de almacenaje profundo, priorizando accesibilidad y coherencia.',
        },
    ],
    cta: 'Organizar mis Estancias',
    imageAlt: 'Estancia del hogar armonizada',
} satisfies ServicePageContent;
