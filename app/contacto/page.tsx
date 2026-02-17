'use client';

import { useState } from 'react';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Mail, MessageCircle, Copy, Check } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="pt-8">
            <Section className="bg-sand-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-serif font-bold mb-4 text-charcoal-900">Hablemos de tu espacio</h1>
                        <p className="text-lg text-gray-600">
                            El primer paso para una vida más tranquila es este. Cuéntame qué necesitas y buscaremos la mejor solución.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Contact Info (Left) */}
                        <div className="order-2 lg:order-1">
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm mb-8">
                                <h3 className="font-serif text-xl font-bold mb-6">Información de Contacto</h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<Mail className="text-sage-600" />}
                                        title="Email"
                                        content={SITE_CONFIG.contact.email}
                                        copyable
                                    />
                                    <ContactItem
                                        icon={<MessageCircle className="text-sage-600" />}
                                        title="WhatsApp"
                                        content={SITE_CONFIG.contact.phone}
                                        copyable
                                    />
                                    <ContactItem
                                        icon={<MapPin className="text-sage-600" />}
                                        title="Área de Servicio"
                                        content="Barcelona Provincia (Disponible desplazamientos a toda Cataluña)"
                                    />
                                </div>
                            </div>

                            {/* Image Placeholder (Below Info) */}
                            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-sand-200">
                                <NextImage
                                    src="/images/contact-office.jpg"
                                    alt="Oficina Ordenada"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Contact Form (Right) */}
                        <div className="order-1 lg:order-2">
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ContactItem({ icon, title, content, copyable }: { icon: React.ReactNode, title: string, content: string, copyable?: boolean }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="flex gap-4">
            <div className="bg-sand-50 p-3 rounded-lg h-fit">
                {icon}
            </div>
            <div className="flex flex-col flex-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</span>
                {copyable ? (
                    <div className="flex items-center gap-2">
                        <span className="text-charcoal-900 font-medium">{content}</span>
                        <button
                            onClick={handleCopy}
                            className="p-1.5 rounded-md hover:bg-sand-100 transition-colors text-gray-500 hover:text-sage-600"
                            title="Copiar al portapapeles"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4" />
                            )}
                        </button>
                    </div>
                ) : (
                    <span className="text-charcoal-900 font-medium">{content}</span>
                )}
            </div>
        </div>
    )
}
