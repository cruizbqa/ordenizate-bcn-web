export const SITE_CONFIG = {
    name: "Ordenízate Bcn",
    description: "Servicio de organización profesional en Barcelona.",
    contact: {
        email: "info@ordenizate.es",
        phone: "+34 636 757 684",
        whatsapp: {
            number: "34636757684",
            message: "Hola Ordenízate Bcn, quiero información sobre organización y mudanzas.",
            getLink: () => `whatsapp://send?phone=34636757684&text=${encodeURIComponent("Hola Ordenízate Bcn, quiero información sobre organización y mudanzas.")}`,
        },
        address: "Barcelona, España",
    },
};
