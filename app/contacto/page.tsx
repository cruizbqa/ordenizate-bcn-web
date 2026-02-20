import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactItem } from '@/components/ui/ContactItem';
import { MapPin, Mail, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Contacta con Ordenízate Bcn. Organizadora profesional en Barcelona. Escríbenos por email o WhatsApp para empezar.',
    openGraph: {
        title: 'Contacto | Ordenízate Bcn',
        description: 'Cuéntanos qué necesitas. Te ayudamos a transformar tu espacio.',
    },
};

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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
                        {/* Contact Info (Left) */}
                        <div className="order-1">
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm h-full">
                                <h2 className="font-serif text-xl font-bold mb-6">Información de Contacto</h2>
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
                        </div>

                        {/* Image (Right on desktop) */}
                        <div className="order-2">
                            <div className="relative w-full h-64 md:h-80 lg:h-full rounded-2xl overflow-hidden bg-sand-200">
                                <NextImage
                                    src={`${SITE_CONFIG.basePath}/images/contact-office.jpg`}
                                    alt="Espacio de trabajo ordenado"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
