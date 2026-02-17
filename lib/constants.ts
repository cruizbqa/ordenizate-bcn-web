export const SITE_CONFIG = {
    name: "Ordenízate Bcn",
    description: "Servicio de organización profesional en Barcelona.",
    contact: {
        email: "info@ordenizate.es",
        phone: "+34 636 757 684",
        whatsapp: {
            number: "34636757684",
            message: "Hola Silvia, quiero información sobre organización.",
            getLink: () => `whatsapp://send?phone=34636757684&text=${encodeURIComponent("Hola Silvia, quiero información sobre organización.")}`,
        },
        address: "Barcelona, España",
        instagram: {
            username: "ordenizatebcn",
            webUrl: "https://www.instagram.com/ordenizatebcn/",
        },
    },
    basePath: '/ordenizate-bcn-web',
};
