export const SITE_CONFIG = {
    name: "Ordenízate Bcn",
    description: "Servicio de organización profesional en Barcelona.",
    contact: {
        email: "info@ordenizate.es",
        phone: "+34 636 757 684",
        whatsapp: {
            number: "34636757684",
            message: "Hola Silvia, me gustaría recibir información sobre tus servicios de organización. Te cuento brevemente mi caso:",
            getLink: () => `whatsapp://send?phone=34636757684&text=${encodeURIComponent("Hola Silvia, me gustaría recibir información sobre tus servicios de organización. Te cuento brevemente mi caso:")}`,
        },
        address: "Barcelona, España",
        instagram: {
            username: "ordenizatebcn",
            webUrl: "https://instagram.com/ordenizatebcn/",
        },
    },
    legal: {
        owner: process.env.NEXT_PUBLIC_LEGAL_OWNER || "Silvia Martínez",
        dni: process.env.NEXT_PUBLIC_LEGAL_DNI || "46462740A",
        email: "info@ordenizate.es",
        domain: "ordenizatebcn.es",
    },
    basePath: '/ordenizate-bcn-web',
};
