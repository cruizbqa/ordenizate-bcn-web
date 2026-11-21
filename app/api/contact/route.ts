import { NextRequest, NextResponse } from 'next/server';
import { createContactSchema, type ContactErrorMessages } from '@/lib/contactSchema';
import esMessages from '@/messages/es.json';
import caMessages from '@/messages/ca.json';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const errorMessages: Record<'es' | 'ca', ContactErrorMessages> = {
    es: esMessages.form.errors,
    ca: caMessages.form.errors,
};

const apiMessages = {
    es: {
        rateLimit: 'Gracias por tu interés. Hemos recibido varias solicitudes en poco tiempo. Por favor, espera unos minutos y vuelve a intentarlo, o contáctanos por WhatsApp.',
        config: 'Error de configuración del servidor. Por favor, contáctanos por otros medios.',
        send: 'Ahora mismo no se pudo enviar. Por favor, inténtalo de nuevo en unos minutos o escríbenos por WhatsApp.',
        unexpected: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.',
    },
    ca: {
        rateLimit: 'Gràcies pel teu interès. Hem rebut diverses sol·licituds en poc temps. Espera uns minuts i torna-ho a provar, o contacta\'ns per WhatsApp.',
        config: 'Error de configuració del servidor. Contacta\'ns per altres mitjans.',
        send: 'Ara mateix no s\'ha pogut enviar. Torna-ho a provar en uns minuts o escriu-nos per WhatsApp.',
        unexpected: 'Hi ha hagut un error inesperat. Torna-ho a provar més tard.',
    },
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Honeypot check (Anti-spam)
        if (body.website) {
            return NextResponse.json({ ok: true });
        }

        // The locale is chosen by the visitor; unknown values fall back to Spanish
        const locale: 'es' | 'ca' = body.locale === 'ca' ? 'ca' : 'es';
        const messages = apiMessages[locale];

        // 2. Validation
        const schema = createContactSchema(errorMessages[locale]);
        const validationResult = schema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    ok: false,
                    code: 'VALIDATION_ERROR',
                    fieldErrors: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const { name, email, city, service, message } = validationResult.data;

        // 3. Rate Limiting (initialized inside handler to avoid module-level crash on bad env vars)
        const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
        const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

        console.log('[contact] UPSTASH_REDIS_REST_URL present:', !!redisUrl);
        console.log('[contact] UPSTASH_REDIS_REST_TOKEN present:', !!redisToken);
        console.log('[contact] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);

        if (redisUrl && redisToken) {
            try {
                const redis = new Redis({ url: redisUrl, token: redisToken });
                const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
                const normalizedEmail = email.toLowerCase().trim();
                const fingerprint = `${ip}_${normalizedEmail}`;

                const limiters = [
                    { key: `ratelimit:ip:${ip}`, limiter: Ratelimit.slidingWindow(10, "30 m") },
                    { key: `ratelimit:ip_daily:${ip}`, limiter: Ratelimit.slidingWindow(25, "24 h") },
                    { key: `ratelimit:fp:${fingerprint}`, limiter: Ratelimit.slidingWindow(3, "30 m") },
                    { key: `ratelimit:email:${normalizedEmail}`, limiter: Ratelimit.slidingWindow(5, "24 h") },
                ];

                for (const { key, limiter } of limiters) {
                    const ratelimit = new Ratelimit({ redis, limiter, analytics: true, prefix: "@upstash/ratelimit" });
                    const { success, reset } = await ratelimit.limit(key);

                    if (!success) {
                        const retryAfter = Math.ceil((reset - Date.now()) / 1000);
                        return NextResponse.json(
                            {
                                ok: false,
                                code: 'RATE_LIMIT',
                                message: messages.rateLimit,
                                retryAfterSeconds: retryAfter > 0 ? retryAfter : 60,
                            },
                            { status: 429, headers: { 'Retry-After': String(retryAfter > 0 ? retryAfter : 60) } }
                        );
                    }
                }
            } catch (redisError) {
                // If Redis fails for any reason (bad URL, network, etc.) log and continue without rate limiting
                console.error('[contact] Rate limiting skipped due to Redis error:', redisError instanceof Error ? redisError.message : redisError);
            }
        }

        // 4. Send Email
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('[contact] RESEND_API_KEY is missing');
            return NextResponse.json(
                { ok: false, code: 'SERVER_ERROR', message: messages.config },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);

        const serviceLabels: Record<string, string> = {
            "mudanza": "Mudanzas (Pre/Post)",
            "hogar": "Organización de Hogar",
            "armarios": "Armarios y Vestidores",
            "cocinas": "Cocinas y Despensas",
            "online": "Asesoría Online",
            "otro": "Otro",
        };
        const serviceLabel = serviceLabels[service] || service;

        console.log('[contact] Sending email from:', process.env.CONTACT_FROM_EMAIL, 'to:', process.env.CONTACT_TO_EMAIL);

        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL as string,
            to: process.env.CONTACT_TO_EMAIL as string,
            replyTo: email,
            subject: `Nuevo contacto de ${name} — Ordenízate Bcn (${locale === 'ca' ? 'CA' : 'ES'})`,
            text: `
Idioma: ${locale === 'ca' ? 'Català' : 'Castellano'}
Nombre: ${name}
Email: ${email}
Ciudad: ${city}
Servicio: ${serviceLabel}

Mensaje:
${message}
            `,
        });

        if (error) {
            console.error('[contact] Resend error:', JSON.stringify(error));
            return NextResponse.json(
                { ok: false, code: 'SERVER_ERROR', message: messages.send },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('[contact] Unhandled exception:', error instanceof Error ? error.message : error);
        if (error instanceof Error) {
            console.error('[contact] Stack:', error.stack);
        }
        return NextResponse.json(
            { ok: false, code: 'SERVER_ERROR', message: apiMessages.es.unexpected },
            { status: 500 }
        );
    }
}
