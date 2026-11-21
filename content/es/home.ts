import type { PageMeta } from '../types';

export const home = {
    meta: {
        title: 'Organizadora Profesional en Barcelona | Ordenízate',
        description: 'Servicio de organización profesional en Barcelona. Mudanzas, armarios, cocinas, hogar y consultoría online. Recupera tu tiempo y paz mental con sistemas de orden.',
        canonical: '/',
        ogTitle: 'Ordenízate | Organización Profesional',
        ogDescription: 'Transforma tu espacio, transforma tu vida.',
        twitterTitle: 'Ordenízate | Organización Profesional en Barcelona',
        imageAlt: 'Espacio Luminoso y Ordenado',
    } satisfies PageMeta & {
        ogTitle: string;
        ogDescription: string;
        twitterTitle: string;
        imageAlt: string;
    },
    hero: {
        badge: 'Organización profesional · Servicio presencial y online',
        badgeCta: 'Conóceme',
        h1: {
            text: 'Organización profesional del hogar ',
            accent: 'en Barcelona',
        },
        h2: 'Orden real para casas reales. Un buen sistema no se nota, funciona.',
        intro: [
            { text: 'Creamos sistemas de organización prácticos, adaptados a la realidad de cada espacio y diseñados para mantenerse en el tiempo.' },
            { br: 'sm' },
            { text: 'Especialistas en ' },
            { link: '/servicios/mudanzas', label: 'mudanzas' },
            { text: ', ' },
            { link: '/servicios/armarios', label: 'armarios' },
            { text: ', ' },
            { link: '/servicios/cocinas', label: 'cocinas' },
            { text: ', ' },
            { link: '/servicios/estancias', label: 'estancias' },
            { text: ' y ' },
            { link: '/servicios/infantil', label: 'organización infantil' },
            { text: '. Trabajamos de forma presencial y también ' },
            { link: '/servicios/online', label: 'online' },
            { text: '.' },
            { br: 'all' },
            { br: 'all' },
            { text: 'Con base en Barcelona y disponible para proyectos en toda España.' },
        ],
        ctaPrimary: 'Contacto',
        ctaWhatsapp: 'WhatsApp',
        imageAlt: 'Espacio Luminoso y Ordenado',
    },
    trust: {
        before: 'Espacios organizados en',
        place: 'Barcelona',
        after: 'y alrededores',
    },
    services: {
        heading: 'Nuestros Servicios',
        intro: 'Descubre el servicio que mejor se adapta a tu necesidad actual.',
        cta: 'Más información',
        items: [
            {
                href: '/servicios/mudanzas',
                title: 'MUDANZAS (PRE + POST)',
                keyword: 'CONTROL',
                description: 'La mudanza implica decisiones, tiempos y desgaste. Estructuramos cada etapa para que el proceso sea claro, acompañado y sostenible.',
                bullets: [
                    'Planificación y coordinación del traslado',
                    'Embalaje cuidado y preparación',
                    'Organización y puesta a punto del hogar',
                ],
            },
            {
                href: '/servicios/armarios',
                title: 'ARMARIOS Y VESTIDORES',
                keyword: 'FUNCIONALIDAD',
                description: 'Diseñamos sistemas de organización personalizados que optimizan el espacio, aportan claridad visual y hacen que cada prenda esté accesible.',
                bullets: [
                    'Descarte consciente acompañado',
                    'Optimización del espacio',
                    'Sistemas funcionales adaptados',
                ],
            },
            {
                href: '/servicios/infantil',
                title: 'INFANTIL',
                keyword: 'CUIDADO',
                description: 'Preparación y adaptación de espacios infantiles para acompañar cada etapa, reduciendo la carga mental familiar y facilitando la rutina diaria.',
                bullets: [
                    'Preparación del espacio para la llegada del bebé',
                    'Organización evolutiva según el crecimiento',
                    'Sistemas que fomentan autonomía y orden',
                ],
            },
            {
                href: '/servicios/cocinas',
                title: 'COCINAS Y DESPENSAS',
                keyword: 'CRITERIO',
                description: 'Organizamos cocina y despensa con criterio y coherencia, creando una estructura clara que facilita el día a día y aporta sensación de orden.',
                bullets: [
                    'Categorización clara de alimentos',
                    'Unificación de formatos adecuados',
                    'Distribución funcional según uso',
                ],
            },
            {
                href: '/servicios/estancias',
                title: 'ESTANCIAS',
                keyword: 'ARMONÍA',
                description: 'Organización de espacios que generan ruido visual, creando estructuras claras que devuelven equilibrio y funcionalidad al hogar.',
                bullets: [
                    'Baños y zonas de lavado',
                    'Despachos',
                    'Trasteros y almacenaje profundo',
                ],
            },
            {
                href: '/servicios/online',
                title: 'ASESORÍA ONLINE',
                keyword: 'A TU RITMO',
                description: 'Organización profesional a distancia, clara y estructurada, para quienes desean avanzar con autonomía pero con dirección experta.',
                bullets: [
                    'Videollamada de diagnóstico',
                    'Plan personalizado',
                    'Seguimiento del proceso',
                ],
                cta: 'Reservar Asesoría',
            },
        ],
    },
    process: {
        heading: 'Cómo trabajamos',
        intro: 'Cada proyecto es diferente, por eso trabajamos con un proceso flexible, estructurado y 100% personalizado.',
        steps: [
            { title: '1. Contacto', desc: 'Hablamos para entender tus necesidades.' },
            { title: '2. Plan personalizado', desc: 'Recibes una propuesta a medida sin compromiso.' },
            { title: '3. Sesión de organización', desc: 'Aplicamos el sistema definido y organizamos el espacio' },
            { title: '4. Seguimiento', desc: 'Resolvemos posibles dudas y te acompañamos en la aplicación del sistema.' },
        ],
    },
    finalCta: {
        heading: '¿Hablamos?',
        text: 'Ordenízate: orden profesional adaptado a la realidad de cada hogar.',
        primary: 'Reservar Sesión',
        whatsapp: 'Contactar por WhatsApp',
    },
} as const;
