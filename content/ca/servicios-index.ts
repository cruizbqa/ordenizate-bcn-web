import type { ServicesIndexContent } from '../types';

export const serviciosIndex: ServicesIndexContent = {
    meta: {
        title: 'Serveis: Mudances i Organització',
        description: 'Descobreix els nostres serveis d\'organització professional a Barcelona. Mudances, llar, armaris, cuines i més.',
        canonical: '/servicios',
    },
    header: {
        h1: 'Serveis d\'Organització',
        intro: 'Acompanyem la transformació de la teva llar a través de sistemes d\'ordre pràctics, realistes i dissenyats per mantenir-se. Des de mudances integrals fins a l\'organització d\'armaris, cuines o espais infantils, adaptem cada solució al teu ritme i estil de vida.',
    },
    services: [
        { href: '/servicios/mudanzas', label: 'Mudances (Pre + Post)' },
        { href: '/servicios/armarios', label: 'Armaris i Vestidors' },
        { href: '/servicios/cocinas', label: 'Cuines i Rebosts' },
        { href: '/servicios/estancias', label: 'Organització d\'Estades' },
        { href: '/servicios/infantil', label: 'Organització Infantil' },
        { href: '/servicios/online', label: 'Assessorament en línia' },
    ],
    cta: 'Veure servei',
    values: {
        heading: 'Per què triar-nos',
        items: [
            { title: 'Sense judicis', desc: 'Acompanyament des del respecte i l\'empatia en cada procés.' },
            { title: 'Confidencialitat', desc: 'Màxima discreció i confidencialitat en cada servei.' },
            { title: 'Sostenibilitat', desc: 'Fomentem el consum responsable i una gestió més conscient del que ja no es necessita.' },
        ],
    },
};
