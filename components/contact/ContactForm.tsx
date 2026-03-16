'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import { contactSchema, type ContactFormData } from '@/lib/contactSchema';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { z } from 'zod';

export function ContactForm() {
    const [isPending, startTransition] = useTransition();
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        service: '',
        message: '',
        privacy: false,
        website: '', // Honeypot
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData | 'privacy', string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        setFormData(prev => ({ ...prev, [name]: val }));

        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('idle');
        setErrorMessage('');

        // 1. Client Side Validation
        const validation = contactSchema.safeParse(formData);

        if (!validation.success) {
            const fieldErrors: Record<string, string> = {};
            validation.error.issues.forEach(issue => {
                const path = issue.path[0] as string;
                if (!fieldErrors[path]) fieldErrors[path] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        startTransition(async () => {
            try {
                const response = await fetch(`${SITE_CONFIG.basePath}/api/contact`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (!response.ok) {
                    setStatus('error');
                    setErrorMessage(data.message || 'Lo sentimos, algo ha fallado. Por favor, inténtalo de nuevo.');
                    return;
                }

                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    city: '',
                    service: '',
                    message: '',
                    privacy: false,
                    website: '',
                });
            } catch (err) {
                setStatus('error');
                setErrorMessage('Error de conexión. Por favor, comprueba tu internet o escríbenos por WhatsApp.');
            }
        });
    };

    if (status === 'success') {
        return (
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-sand-200 shadow-xl h-full flex flex-col justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-8">
                    <div className="bg-sage-50 p-6 rounded-full border border-sage-100">
                        <CheckCircle2 className="w-16 h-16 text-sage-600 animate-in zoom-in spin-in-12 duration-1000" />
                    </div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-4 text-balance">¡Mensaje enviado correctamente!</h2>
                <p className="text-gray-600 mb-10 max-w-sm mx-auto leading-relaxed">
                    Gracias por contactar conmigo. Te responderé personalmente y valoraremos la mejor solución para tu espacio.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-sage-600 font-bold hover:text-sage-700 transition-colors underline underline-offset-4 decoration-2"
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-sand-200 shadow-xl h-full flex flex-col justify-center relative overflow-hidden">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot field for bots */}
                <div className="hidden">
                    <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-0">
                        <label htmlFor="name" className="text-sm font-medium text-charcoal-900 block mb-1.5 ml-1">Nombre</label>
                        <Input
                            type="text" id="name" name="name"
                            value={formData.name} onChange={handleChange}
                            maxLength={80}
                            placeholder="Tu nombre"
                            className={errors.name ? 'border-red-300 bg-red-50 focus:ring-red-200' : ''}
                        />
                        {errors.name && <p className="text-[10px] text-red-500 font-semibold ml-1 mt-1">{errors.name}</p>}
                    </div>
                    <div className="space-y-0">
                        <label htmlFor="email" className="text-sm font-medium text-charcoal-900 block mb-1.5 ml-1">Email</label>
                        <Input
                            type="email" id="email" name="email"
                            value={formData.email} onChange={handleChange}
                            maxLength={100}
                            placeholder="tu@email.com"
                            className={errors.email ? 'border-red-300 bg-red-50 focus:ring-red-200' : ''}
                        />
                        {errors.email && <p className="text-[10px] text-red-500 font-semibold ml-1 mt-1">{errors.email}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-0">
                        <label htmlFor="city" className="text-sm font-medium text-charcoal-900 block mb-1.5 ml-1">Ciudad</label>
                        <Input
                            type="text" id="city" name="city"
                            value={formData.city} onChange={handleChange}
                            maxLength={80}
                            placeholder="Ej: Barcelona"
                            className={errors.city ? 'border-red-300 bg-red-50 focus:ring-red-200' : ''}
                        />
                        {errors.city && <p className="text-[10px] text-red-500 font-semibold ml-1 mt-1">{errors.city}</p>}
                    </div>
                    <div className="space-y-0">
                        <label className="text-sm font-medium text-charcoal-900 block mb-1.5 ml-1">Tipo de servicio</label>
                        <Select
                            options={[
                                { value: "mudanza", label: "Mudanzas (Pre/Post)" },
                                { value: "armarios", label: "Armarios y Vestidores" },
                                { value: "cocinas", label: "Cocinas y Despensas" },
                                { value: "estancias", label: "Estancias" },
                                { value: "infantil", label: "Organización Infantil" },
                                { value: "online", label: "Asesoría Online" },
                                { value: "otro", label: "Otro" },
                            ]}
                            value={formData.service}
                            onChange={(val: string) => {
                                setFormData(prev => ({ ...prev, service: val }));
                                if (errors.service) setErrors(prev => ({ ...prev, service: undefined }));
                            }}
                            error={errors.service}
                            disabled={isPending}
                        />
                    </div>
                </div>

                <div className="space-y-0">
                    <div className="flex justify-between items-end px-1 mb-1.5">
                        <label htmlFor="message" className="text-sm font-medium text-charcoal-900 block">Mensaje <span className="text-gray-500 font-normal">(Opcional)</span></label>
                        <span className={`text-[10px] font-medium ${formData.message.length > 1900 ? 'text-red-500' : 'text-gray-400'}`}>
                            {formData.message.length}/2000
                        </span>
                    </div>
                    <Textarea
                        id="message" name="message" rows={4}
                        value={formData.message} onChange={handleChange}
                        maxLength={2000}
                        placeholder="Cuéntame brevemente qué necesitas..."
                        className={errors.message ? 'border-red-300 bg-red-50 focus:ring-red-200' : ''}
                    ></Textarea>
                    {errors.message && <p className="text-[10px] text-red-500 font-semibold ml-1 mt-1">{errors.message}</p>}
                </div>

                {/* GDPR Consent */}
                <div className="flex flex-col gap-1">
                    <div className="flex items-start gap-3 py-2 px-1">
                        <div className="relative flex items-center h-5">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleChange}
                                className={cn(
                                    "h-5 w-5 rounded-md border-sand-300 text-sage-600 focus:ring-sage-500 cursor-pointer transition-all",
                                    errors.privacy ? 'ring-2 ring-red-300 border-red-300' : ''
                                )}
                            />
                        </div>
                        <label htmlFor="privacy" className="text-xs text-gray-600 leading-tight cursor-pointer font-medium select-none">
                            He leído y acepto la <Link href="/politica-privacidad" className="text-sage-600 underline font-bold hover:text-sage-700">Política de Privacidad</Link> y consiento el tratamiento de mis datos personales.
                        </label>
                    </div>
                    {errors.privacy && <p className="text-[10px] text-red-500 font-semibold ml-1">{errors.privacy}</p>}
                </div>

                {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-in slide-in-from-top-1 duration-300">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-sage-600 hover:bg-sage-700 disabled:bg-sage-300 text-white font-bold py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mt-2 flex justify-center items-center gap-2 text-lg"
                >
                    {isPending ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        'Enviar mensaje'
                    )}
                </button>

                {/* GDPR First Layer Info */}
                <div className="mt-6 pt-6 border-t border-sand-100 italic">
                    <div className="grid grid-cols-1 gap-4 text-[10px] leading-relaxed text-gray-500 text-left px-1">
                        <p>
                            <strong>Información básica sobre protección de datos:</strong><br />
                            <strong>Responsable:</strong> {SITE_CONFIG.legal.owner}.
                            <strong> Finalidad:</strong> Gestionar su solicitud de contacto.
                            <strong> Legitimación:</strong> Consentimiento del interesado.
                            <strong> Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.
                            <strong> Derechos:</strong> Acceder, rectificar y suprimir los datos, así como otros derechos explicados en la <Link href="/politica-privacidad" className="underline font-bold">información adicional</Link>.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-6 pt-6 border-t border-sand-100 space-y-1">
                    <p className="text-sm text-sage-800 font-bold tracking-tight">
                        Te responderé personalmente y valoraremos la mejor solución para tu espacio.
                    </p>
                </div>
            </form>
        </div>
    );
}

