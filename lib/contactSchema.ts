import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(80, "El nombre es demasiado largo"),
    email: z.string().trim().email("Introduce un email válido"),
    city: z.string().trim().min(2, "La ciudad debe tener al menos 2 caracteres").max(80, "El nombre de la ciudad es demasiado largo"),
    service: z.string().trim().min(2, "Selecciona un servicio válido").max(60),
    message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(2000, "El mensaje es demasiado largo"),
    website: z.string().optional(), // Honeypot
});

export type ContactFormData = z.infer<typeof contactSchema>;
