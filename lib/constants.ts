export const SITE_CONFIG = {
    name: "Ordenízate",
    description: "Servicio de organización profesional.",
    contact: {
        email: "info@ordenizate.es",
        phone: "+34636757684",
        whatsapp: {
            number: "34636757684",
            message: "Hola Silvia, me gustaría recibir información sobre tus servicios de organización. Te cuento brevemente mi caso:",
            getLink: () => `https://wa.me/34636757684?text=${encodeURIComponent("Hola Silvia, me gustaría recibir información sobre tus servicios de organización. Te cuento brevemente mi caso:")}`,
        },
        address: "Barcelona, España",
        instagram: {
            username: "ordenizatebcn",
            webUrl: "https://instagram.com/ordenizatebcn/",
        },
    },
    legal: {
        owner: process.env.NEXT_PUBLIC_LEGAL_OWNER,
        dni: process.env.NEXT_PUBLIC_LEGAL_DNI,
        email: "info@ordenizate.es",
        domain: "ordenizate.es",
    },
    basePath: '',
};
