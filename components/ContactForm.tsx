"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import { Label } from "./ui/Label";
import { ContactFormData, contactSchema } from "@/lib/contactSchema";
import { Check, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error" | "rate_limit">("idle");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string[]>>>({});
    const [cooldown, setCooldown] = useState(0);
    const cooldownInterval = useRef<NodeJS.Timeout | null>(null);

    // Form Ref to easily reset
    const formRef = useRef<HTMLFormElement>(null);

    // Cooldown Timer Logic
    useEffect(() => {
        if (cooldown > 0) {
            cooldownInterval.current = setInterval(() => {
                setCooldown((prev) => {
                    if (prev <= 1) {
                        if (cooldownInterval.current) clearInterval(cooldownInterval.current);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (cooldownInterval.current) clearInterval(cooldownInterval.current);
        };
    }, [cooldown]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (cooldown > 0) return;

        setIsLoading(true);
        setStatus("idle");
        setMessage("");
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            city: formData.get("city"),
            service: formData.get("service"),
            message: formData.get("message"),
            website: formData.get("website"), // Honeypot
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                // Validation Errors
                if (res.status === 400 && result.code === "VALIDATION_ERROR") {
                    setErrors(result.fieldErrors);
                    setStatus("error");
                    setMessage("Por favor, revisa los campos marcados.");
                } else if (res.status === 429) {
                    // Rate Limit
                    setStatus("rate_limit");
                    setMessage(result.message);
                    const retryAfter = result.retryAfterSeconds || 60;
                    setCooldown(retryAfter);
                } else {
                    // Server Error
                    setStatus("error");
                    setMessage(result.message || "Ha ocurrido un error inesperado.");
                }
            } else {
                // Success
                setStatus("success");
                setMessage("¡Gracias! Hemos recibido tu mensaje. Te responderemos en menos de 24h.");
                formRef.current?.reset();
                setCooldown(20); // Success cooldown to prevent double submit
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("Error de conexión. Por favor, inténtalo de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-sand-100 h-fit">
            <h2 className="text-2xl font-serif font-bold mb-6">Envíame un mensaje</h2>

            {status === "success" && (
                <div className="mb-6 p-4 bg-sage-50 border border-sage-200 rounded-lg flex items-start gap-3">
                    <Check className="w-5 h-5 text-sage-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-semibold text-sage-900">Mensaje enviado</h4>
                        <p className="text-sm text-sage-700 mt-1">{message}</p>
                    </div>
                </div>
            )}

            {(status === "error" || status === "rate_limit") && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-semibold text-red-900">
                            {status === "rate_limit" ? "Demasiadas solicitudes" : "Error"}
                        </h4>
                        <p className="text-sm text-red-700 mt-1">{message}</p>
                        {status === "rate_limit" && (
                            <div className="mt-3">
                                <Button
                                    href={process.env.NEXT_PUBLIC_WHATSAPP_URL}
                                    variant="outline"
                                    size="sm"
                                    className="bg-white hover:bg-red-50 border-red-200 text-red-700 hover:text-red-800"
                                >
                                    Contactar por WhatsApp
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            required
                            disabled={isLoading || cooldown > 0}
                            aria-invalid={!!errors.name}
                        />
                        {errors.name && <p className="text-xs text-red-600">{errors.name[0]}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu@email.com"
                            required
                            disabled={isLoading || cooldown > 0}
                            aria-invalid={!!errors.email}
                        />
                        {errors.email && <p className="text-xs text-red-600">{errors.email[0]}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city">Ciudad / Zona</Label>
                    <Input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Ej: Eixample, Barcelona"
                        required
                        disabled={isLoading || cooldown > 0}
                        aria-invalid={!!errors.city}
                    />
                    {errors.city && <p className="text-xs text-red-600">{errors.city[0]}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="service">Tipo de Servicio</Label>
                    <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                        disabled={isLoading || cooldown > 0}
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Mudanza">Mudanza (Pre/Post)</option>
                        <option value="Organización">Organización Hogar</option>
                        <option value="Cocina">Cocina / Armarios</option>
                        <option value="Otro">Otro</option>
                    </select>
                    {errors.service && <p className="text-xs text-red-600">{errors.service[0]}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Cuéntame más</Label>
                    <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="¿Qué necesitas organizar?..."
                        required
                        disabled={isLoading || cooldown > 0}
                        aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-xs text-red-600">{errors.message[0]}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isLoading || cooldown > 0}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
                        </>
                    ) : cooldown > 0 ? (
                        `Espera ${cooldown}s`
                    ) : (
                        "Enviar Mensaje"
                    )}
                </Button>

                {cooldown > 0 && status !== 'rate_limit' && (
                    <p className="text-xs text-center text-gray-500 animate-pulse">
                        Puedes volver a enviar en {cooldown}s
                    </p>
                )}

                <p className="text-xs text-gray-400 text-center mt-4">
                    Al enviar aceptas nuestra política de privacidad.
                </p>
            </form>
        </div>
    );
}
