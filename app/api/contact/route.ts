import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contactSchema';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

// Initialize Clients
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Use Redis if configured, otherwise we might skip rate limiting (or error out depending on strictness)
// For this implementation, we assume env vars are present or deal with it gracefully.
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
    : null;

// Rate Limit Configuration
// We use a multi-limiter approach if possible, but Ratelimit lib handles one main definition well.
// We will instantiate limiters on the fly for different keys.

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Honeypot check (Anti-spam)
        if (body.website) {
            // Silent success for bots
            return NextResponse.json({ ok: true });
        }

        // 2. Validation
        const validationResult = contactSchema.safeParse(body);
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

        // 3. Rate Limiting
        if (redis) {
            const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
            const normalizedEmail = email.toLowerCase().trim();
            const fingerprint = `${ip}_${normalizedEmail}`;

            // Define Limiters
            const limiters = [
                {
                    key: `ratelimit:ip:${ip}`,
                    limiter: Ratelimit.slidingWindow(10, "30 m"), // 10 reqs / 30 mins
                },
                {
                    key: `ratelimit:ip_daily:${ip}`,
                    limiter: Ratelimit.slidingWindow(25, "24 h"), // 25 reqs / 24 hours
                },
                {
                    key: `ratelimit:fp:${fingerprint}`,
                    limiter: Ratelimit.slidingWindow(3, "30 m"), // 3 reqs / 30 mins from same user+ip
                },
                // Optional: Global email limit to prevent abuse across different IPs
                {
                    key: `ratelimit:email:${normalizedEmail}`,
                    limiter: Ratelimit.slidingWindow(5, "24 h"), // 5 reqs / 24 hours
                }
            ];

            for (const { key, limiter } of limiters) {
                const ratelimit = new Ratelimit({
                    redis,
                    limiter,
                    analytics: true,
                    prefix: "@upstash/ratelimit",
                });

                const { success, reset } = await ratelimit.limit(key);

                if (!success) {
                    const retryAfter = Math.ceil((reset - Date.now()) / 1000);
                    return NextResponse.json(
                        {
                            ok: false,
                            code: 'RATE_LIMIT',
                            message: 'Gracias por tu interés. Hemos recibido varias solicitudes en poco tiempo. Por favor, espera unos minutos y vuelve a intentarlo, o contáctanos por WhatsApp.',
                            retryAfterSeconds: retryAfter > 0 ? retryAfter : 60,
                        },
                        {
                            status: 429,
                            headers: {
                                'Retry-After': String(retryAfter > 0 ? retryAfter : 60),
                            }
                        }
                    );
                }
            }
        }

        // 4. Send Email
        if (!resend) {
            console.error('Resend API Key missing');
            return NextResponse.json(
                {
                    ok: false,
                    code: 'SERVER_ERROR',
                    message: 'Error de configuración del servidor. Por favor, contáctanos por otros medios.',
                },
                { status: 500 }
            );
        }

        const serviceLabels: Record<string, string> = {
            "mudanza": "Mudanzas (Pre/Post)",
            "hogar": "Organización de Hogar",
            "armarios": "Armarios y Vestidores",
            "cocinas": "Cocinas y Despensas",
            "online": "Asesoría Online",
            "otro": "Otro",
        };
        const serviceLabel = serviceLabels[service] || service;

        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL as string,
            to: process.env.CONTACT_TO_EMAIL as string,
            replyTo: email,
            subject: `Nuevo contacto de ${name} — Ordenízate Bcn`,
            text: `
Nombre: ${name}
Email: ${email}
Ciudad: ${city}
Servicio: ${serviceLabel}

Mensaje:
${message}
            `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json(
                {
                    ok: false,
                    code: 'SERVER_ERROR',
                    message: 'Ahora mismo no se pudo enviar. Por favor, inténtalo de nuevo en unos minutos o escríbenos por WhatsApp.',
                },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            {
                ok: false,
                code: 'SERVER_ERROR',
                message: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.',
            },
            { status: 500 }
        );
    }
}
