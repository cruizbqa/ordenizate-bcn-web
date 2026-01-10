import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { MapPin, Mail, MessageCircle, Calendar } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contacto | Reserva tu sesión',
    description: 'Contacta con Ordenízate Bcn. Pide presupuesto para tu mudanza o proyecto de organización en Barcelona.',
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Contact Info */}
                        <div>
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm mb-8">
                                <h3 className="font-serif text-xl font-bold mb-6">Información de Contacto</h3>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<Mail className="text-sage-600" />}
                                        title="Email"
                                        content="info@ordenizate.es"
                                        href="mailto:info@ordenizate.es"
                                    />
                                    <ContactItem
                                        icon={<MessageCircle className="text-sage-600" />}
                                        title="WhatsApp"
                                        content="+34 636 757 684"
                                        href="whatsapp://send?phone=34636757684"
                                    />
                                    <ContactItem
                                        icon={<MapPin className="text-sage-600" />}
                                        title="Área de Servicio"
                                        content="Barcelona Provincia (Disponible desplazamientos a toda España)"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Form Layout */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-sand-100 h-fit">
                            <h2 className="text-2xl font-serif font-bold mb-6">Envíame un mensaje</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nombre</label>
                                        <input type="text" id="name" className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 bg-sand-50/50 p-3 text-sm" placeholder="Tu nombre" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 bg-sand-50/50 p-3 text-sm" placeholder="tu@email.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="city" className="text-sm font-medium text-gray-700">Ciudad / Zona</label>
                                    <input type="text" id="city" className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 bg-sand-50/50 p-3 text-sm" placeholder="Ej: Eixample, Barcelona" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-gray-700">Tipo de Servicio</label>
                                    <select id="service" className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 bg-sand-50/50 p-3 text-sm">
                                        <option>Selecciona una opción</option>
                                        <option>Mudanza (Pre/Post)</option>
                                        <option>Organización Hogar</option>
                                        <option>Cocina / Armarios</option>
                                        <option>Otro</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Cuéntame más</label>
                                    <textarea id="message" rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-sage-500 focus:ring-sage-500 bg-sand-50/50 p-3 text-sm" placeholder="¿Qué necesitas organizar?..." />
                                </div>

                                <Button type="button" size="lg" className="w-full">Enviar Mensaje</Button>
                                <p className="text-xs text-gray-400 text-center mt-4">
                                    Al enviar aceptas nuestra política de privacidad.
                                </p>
                            </form>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ContactItem({ icon, title, content, href }: { icon: React.ReactNode, title: string, content: string, href?: string }) {
    return (
        <div className="flex gap-4">
            <div className="bg-sand-50 p-3 rounded-lg h-fit">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{title}</span>
                {href ? (
                    <a href={href} className="text-charcoal-900 font-medium hover:text-sage-600 transition-colors" target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                        {content}
                    </a>
                ) : (
                    <span className="text-charcoal-900 font-medium">{content}</span>
                )}
            </div>
        </div>
    )
}
