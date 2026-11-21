import type { ServicesIndexContent } from '../types';

export const serviciosIndex: ServicesIndexContent = {
    meta: {
        title: 'Servicios: Mudanzas y Organización',
        description: 'Descubre nuestros servicios de organización profesional en Barcelona. Mudanzas, hogar, armarios, cocinas y más.',
        canonical: '/servicios',
    },
    header: {
        h1: 'Servicios de Organización',
        intro: 'Acompañamos la transformación de tu hogar a través de sistemas de orden prácticos, realistas y diseñados para mantenerse. Desde mudanzas integrales hasta la organización de armarios, cocinas o espacios infantiles, adaptamos cada solución a tu ritmo y estilo de vida.',
    },
    services: [
        { href: '/servicios/mudanzas', label: 'Mudanzas (Pre + Post)' },
        { href: '/servicios/armarios', label: 'Armarios y Vestidores' },
        { href: '/servicios/cocinas', label: 'Cocinas y Despensas' },
        { href: '/servicios/estancias', label: 'Organización de Estancias' },
        { href: '/servicios/infantil', label: 'Organización Infantil' },
        { href: '/servicios/online', label: 'Asesoría Online' },
    ],
    cta: 'Ver servicio',
    values: {
        heading: 'Por qué elegirnos',
        items: [
            { title: 'Sin Juicios', desc: 'Acompañamiento desde el respeto y la empatía en cada proceso.' },
            { title: 'Confidencialidad', desc: 'Máxima discreción y confidencialidad en cada servicio.' },
            { title: 'Sostenibilidad', desc: 'Fomentamos el consumo responsable y una gestión más consciente de lo que ya no se necesita.' },
        ],
    },
};
