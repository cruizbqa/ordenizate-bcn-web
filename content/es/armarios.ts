import type { ServicePageContent } from '../types';

export const armarios = {
    meta: {
        title: 'Armarios y Vestidores',
        description: 'Creamos sistemas de organización claro y coherente con la realidad de cada hogar, donde cada prenda encuentra su lugar y el espacio se vuelve más ligero, claro y fácil de mantener.',
        canonical: '/servicios/armarios',
    },
    badge: 'Funcionalidad',
    h1: 'Armarios y Vestidores',
    intro: [
        'Creamos sistemas de organización claro y coherente con la realidad de cada hogar, donde cada prenda encuentra su lugar y el espacio se vuelve más ligero, claro y fácil de mantener.',
        'Aplicamos técnicas profesionales adaptadas a la tipología de cada prenda y a la configuración del armario, asegurando un resultado práctico, estético y duradero en el tiempo.',
    ],
    includes: {
        title: 'El servicio incluye:',
        items: [
            'Técnicas profesionales de doblado y clasificación.',
            'Selección adecuada de perchas y accesorios.',
            'Optimización interior según tipología de prenda.',
            'Seguimiento posterior para garantizar el sistema.',
        ],
    },
    cta: 'Organizar mi Armario',
    imageAlt: 'Armario y vestidor perfectamente organizado, doblado vertical y categorizado',
} satisfies ServicePageContent;
