import { z } from "zod";

export const contactSchema = z.object({
    name: z.string()
        .trim()
        .min(1, "Campo obligatorio")
        .max(80, "El nombre es demasiado largo"),

    email: z.string()
        .trim()
        .min(1, "Campo obligatorio")
        .email("Email no válido"),

    city: z.string()
        .trim()
        .min(1, "Campo obligatorio")
        .max(80, "El nombre de la ciudad es demasiado largo"),

    service: z.string().trim().min(1, "Campo obligatorio"),

    message: z.string()
        .trim()
        .max(2000, "El mensaje es demasiado largo"),

    privacy: z.boolean().refine(val => val === true, "Campo obligatorio"),
    website: z.string().optional(), // Honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;
