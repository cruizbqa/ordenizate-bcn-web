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
                            El primer paso es entender cómo funciona tu espacio y qué necesitas realmente.<br className="hidden sm:block" />
                            Cuéntame tu situación y diseñaremos la mejor solución para ti.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
                        {/* Contact Info (Left) */}
                        <div className="order-1 flex flex-col gap-6 h-full">
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm shrink-0">
                                <h2 className="font-serif text-xl font-bold mb-6">Información de contacto</h2>
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
                                        content="Con base en Barcelona y disponible para proyectos en toda Cataluña y España según disponibilidad."
                                    />
                                </div>
                            </div>

                            {/* Image (Desktop only) */}
                            <div className="relative w-full flex-grow rounded-2xl overflow-hidden bg-sand-200 hidden lg:block min-h-[200px]">
                                <NextImage
                                    src={`${SITE_CONFIG.basePath}/images/contact-office.jpg`}
                                    alt="Espacio de trabajo ordenado"
                                    fill
                                    className="object-cover object-[center_35%]"
                                />
                            </div>
                        </div>

                        {/* Form (Right on desktop) */}
                        <div className="order-2">
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm h-full flex flex-col justify-center">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-sm font-medium text-charcoal-900">Nombre</label>
                                            <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors text-sm" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-sm font-medium text-charcoal-900">Email</label>
                                            <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors text-sm" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="city" className="text-sm font-medium text-charcoal-900">Ciudad</label>
                                            <input type="text" id="city" name="city" className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors text-sm" required />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="service" className="text-sm font-medium text-charcoal-900">Tipo de servicio</label>
                                            <select id="service" name="service" defaultValue="" className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors text-sm bg-white" required>
                                                <option value="" disabled>Selecciona una opción</option>
                                                <option value="mudanza">Mudanzas (Pre/Post)</option>
                                                <option value="hogar">Organización de Hogar</option>
                                                <option value="armarios">Armarios y Vestidores</option>
                                                <option value="cocinas">Cocinas y Despensas</option>
                                                <option value="online">Asesoría Online</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-sm font-medium text-charcoal-900">Mensaje</label>
                                        <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent transition-colors text-sm resize-none" required></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 rounded-xl transition-colors mt-2">
                                        Enviar mensaje
                                    </button>

                                    <div className="text-center mt-4 pt-4 border-t border-sand-100 space-y-1">
                                        <p className="text-xs text-gray-500">
                                            Tus datos solo se usarán para responderte. No envío spam.
                                        </p>
                                        <p className="text-xs text-brand-purple font-medium">
                                            Te responderé personalmente y valoraremos juntas la mejor solución.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
