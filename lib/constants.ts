export const SITE_CONFIG = {
    name: "Ordenízate",
    description: "Servicio de organización profesional.",
    contact: {
        email: "info@ordenizate.es",
        phone: "+34636757684",
        whatsapp: {
            number: "34636757684",
            getLink: (message: string) => `whatsapp://send?phone=34636757684&text=${encodeURIComponent(message)}`,
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
