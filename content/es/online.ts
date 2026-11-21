import type { ServicePageContent } from '../types';

export const online = {
    meta: {
        title: 'Asesoría Online',
        description: 'La asesoría online está pensada para quienes necesitan acompañamiento profesional a distancia o desean implementar el sistema por su cuenta, manteniendo el mismo criterio y estructura que en el servicio presencial.',
        canonical: '/servicios/online',
    },
    badge: 'A tu ritmo',
    h1: 'Asesoría Online',
    intro: [
        'La asesoría online está pensada para quienes necesitan acompañamiento profesional a distancia o desean implementar el sistema por su cuenta, manteniendo el mismo criterio y estructura que en el servicio presencial.',
        'A través de videollamadas estructuradas, analizamos el espacio y diseñamos un plan claro, realista y fácil de aplicar.',
        'Es una modalidad práctica y resolutiva, pensada para organizar con autonomía pero sin improvisar.',
    ],
    includes: {
        title: 'El servicio incluye:',
        items: [
            'Videollamada de diagnóstico y planificación personalizada.',
            'Propuesta estructurada con lista de recomendaciones.',
            'Guía paso a paso adaptada al espacio.',
            'Seguimiento y resolución de dudas durante la implementación.',
        ],
    },
    cta: 'Reservar Asesoría Online',
    imageAlt: 'Sesión de organización online por videollamada profesional',
} satisfies ServicePageContent;
