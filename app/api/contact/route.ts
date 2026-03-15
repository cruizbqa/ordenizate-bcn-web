import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/contactSchema';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Honeypot check (Anti-spam)
        if (body.website) {
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

        // 3. Rate Limiting (initialized inside handler to avoid module-level crash on bad env vars)
        const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
        const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

        console.log('[contact] UPSTASH_REDIS_REST_URL present:', !!redisUrl);
        console.log('[contact] UPSTASH_REDIS_REST_TOKEN present:', !!redisToken);
        console.log('[contact] RESEND_API_KEY present:', !!process.env.RESEND_API_KEY);

        if (redisUrl && redisToken) {
            let redis: Redis | null = null;
            try {
                redis = new Redis({ url: redisUrl, token: redisToken });
            } catch (redisInitError) {
                console.error('[contact] Redis init failed:', redisInitError);
            }

            if (redis) {
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
                                message: 'Gracias por tu interés. Hemos recibido varias solicitudes en poco tiempo. Por favor, espera unos minutos y vuelve a intentarlo, o contáctanos por WhatsApp.',
                                retryAfterSeconds: retryAfter > 0 ? retryAfter : 60,
                            },
                            { status: 429, headers: { 'Retry-After': String(retryAfter > 0 ? retryAfter : 60) } }
                        );
                    }
                }
            }
        }

        // 4. Send Email
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('[contact] RESEND_API_KEY is missing');
            return NextResponse.json(
                { ok: false, code: 'SERVER_ERROR', message: 'Error de configuración del servidor. Por favor, contáctanos por otros medios.' },
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
            console.error('[contact] Resend error:', JSON.stringify(error));
            return NextResponse.json(
                { ok: false, code: 'SERVER_ERROR', message: 'Ahora mismo no se pudo enviar. Por favor, inténtalo de nuevo en unos minutos o escríbenos por WhatsApp.' },
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
            { ok: false, code: 'SERVER_ERROR', message: 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.' },
            { status: 500 }
        );
    }
}
