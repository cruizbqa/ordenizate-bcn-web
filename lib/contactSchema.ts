import { z } from 'zod';
import esMessages from '@/messages/es.json';

export type ContactErrorMessages = {
    required: string;
    nameTooLong: string;
    invalidEmail: string;
    cityTooLong: string;
    messageTooLong: string;
};

export function createContactSchema(m: ContactErrorMessages) {
    return z.object({
        name: z.string()
            .trim()
            .min(1, m.required)
            .max(80, m.nameTooLong),

        email: z.string()
            .trim()
            .min(1, m.required)
            .email(m.invalidEmail),

        city: z.string()
            .trim()
            .min(1, m.required)
            .max(80, m.cityTooLong),

        service: z.string().trim().min(1, m.required),

        message: z.string()
            .trim()
            .max(2000, m.messageTooLong),

        privacy: z.boolean().refine(val => val === true, m.required),
        website: z.string().optional(), // Honeypot
    });
}

export const contactSchema = createContactSchema(esMessages.form.errors);
export type ContactFormData = z.infer<typeof contactSchema>;
