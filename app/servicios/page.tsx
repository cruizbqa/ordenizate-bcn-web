import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck, Home, Briefcase, Shirt, Box, Sparkles, Monitor } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Servicios | Mudanzas y Organización',
    description: 'Descubre nuestros servicios de organización profesional en Barcelona. Mudanzas, hogar, armarios, cocinas y más.',
};

export default function ServicesPage() {
    return (
        <div className="pt-8">
            {/* Header */}
            <div className="bg-sand-50 py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold font-serif text-charcoal-900 sm:text-5xl mb-6">
                            Servicios de Organización
                        </h1>
                        <p className="text-lg text-gray-600">
                            Diseñamos soluciones a medida para cada necesidad. Ya sea una mudanza compleja o reorganizar tu cocina, estamos aquí para ayudarte.
                        </p>
                    </div>
                </Container>
            </div>

            {/* category: Mudanzas */}
            <Section id="mudanzas">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Truck size={16} /> Especialidad
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Gestión de Mudanzas</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                La mudanza es uno de los momentos más estresantes de la vida. Lo convertimos en una experiencia tranquila y organizada. Nos encargamos de todo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-2">Pre-Mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Descarte guiado</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Embalaje profesional</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Etiquetado detallado</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-2">Post-Mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Desembalaje completo</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Organización estratégica</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Retirada de cajas</li>
                                    </ul>
                                </div>
                            </div>

                            <Button href="/contacto" size="lg" className="w-full sm:w-auto">Pedir Presupuesto Mudanza</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-2xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-moving-no-branding.png`}
                                alt="Mudanza Organizada en Barcelona"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <div className="w-full h-px bg-sand-200" />

            {/* category: Armarios */}
            <Section id="armarios" className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-brand-pink text-sm font-medium mb-4">
                                <Shirt size={16} /> Vestidores
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Armarios y Vestidores</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Maximizamos cada centímetro de tu armario. Creamos un sistema donde todo es visible y accesible, facilitando tu rutina diaria y el cambio de temporada.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-brand-pink shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Doblado vertical para ganar espacio y visibilidad.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-brand-pink shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Categorización por tipo de prenda y color.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-brand-pink shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Asesoramiento en perchas y accesorios de orden.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-brand-pink shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Gestión de ropa para donar o reciclar.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mi Armario</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-closet.png`}
                                alt="Armario y vestidor perfectamente organizado, doblado vertical y categorizado"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* category: Hogar */}
            <Section id="hogar" className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-purple text-sm font-medium mb-4">
                                <Home size={16} /> Espacios
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Organización de Estancias</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Ponemos orden en cualquier rincón de tu casa que te genere ruido visual. Creamos sistemas adaptados a tu estilo de vida.
                            </p>

                            <div className="space-y-6 mb-8">
                                <ServiceItem
                                    title="Habitaciones Infantiles"
                                    description="Espacios que fomentan la autonomía de los más pequeños y facilitan la recogida diaria."
                                    icon={<Shirt className="text-brand-purple" />}
                                />
                                <ServiceItem
                                    title="Baños y Zonas de Lavado"
                                    description="Optimización de productos y sistemas de clasificación de ropa sucia/limpia."
                                    icon={<Sparkles className="text-brand-purple" />}
                                />
                                <ServiceItem
                                    title="Despachos y Trasteros"
                                    description="Clasificación de documentos y optimización de espacios de almacenaje profundo."
                                    icon={<Briefcase className="text-brand-purple" />}
                                />
                            </div>

                            <Button href="/contacto" variant="outline" size="lg" className="w-full sm:w-auto">Consultar otros espacios</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-home.jpg`}
                                alt="Estancia del hogar armonizada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <div className="w-full h-px bg-sand-200" />

            {/* category: Cocinas */}
            <Section id="cocinas" className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-sm font-medium mb-4">
                                <Box size={16} /> Despensas
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Cocinas y Despensas</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                La cocina es el corazón del hogar. La organizamos para que cocinar sea un placer, eliminando el ruido visual y optimizando el flujo de trabajo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-2">Despensas</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Categorización de alimentos, control de caducidades y etiquetado premium.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-2">Menaje</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Optimización de cajones de cubiertos, ollas y pequeños electrodomésticos.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mi Cocina</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-kitchen.png`}
                                alt="Cocina y despensa perfectamente organizada con botes etiquetados premium y menaje categorizado"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* category: Online */}
            <Section id="online" className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                                <Monitor size={16} /> Digital
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Asesoría Online</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Estés donde estés, te ayudamos a organizar tu espacio a través de videollamadas. Una opción flexible para quienes prefieren el "hazlo tú mismo" con guía experta.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-blue-600 shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Videollamada de diagnóstico y planificación personalizada.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-blue-600 shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Lista de compras recomendada y guía paso a paso.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="mt-1 text-blue-600 shrink-0" size={20} />
                                    <p className="text-gray-600 text-sm">Seguimiento y resolución de dudas durante el proceso.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="outline" size="lg" className="w-full sm:w-auto">Reservar Asesoría Online</Button>
                        </div>
                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-online.png`}
                                alt="Sesión de organización online por videollamada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ServiceItem({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1 bg-sand-50 p-2 rounded-lg h-fit">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-charcoal-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
        </div>
    )
}

function PriceCard({ title, hours, price, features, highlight }: { title: string, hours: string, price: string, features: string[], highlight?: boolean }) {
    return (
        <div className={`p-8 rounded-2xl border ${highlight ? 'bg-white border-sage-200 shadow-lg relative' : 'bg-transparent border-sand-200'}`}>
            {highlight && <div className="absolute top-0 right-0 bg-sage-500 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">Popular</div>}
            <h3 className="font-serif font-bold text-xl mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-4">{hours}</p>
            <div className="text-3xl font-bold text-charcoal-900 mb-6">{price}</div>
            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                {features.map((f, i) => (
                    <li key={i} className="flex gap-2"><Check size={16} className="text-sage-500" /> {f}</li>
                ))}
            </ul>
            <Button href="/contacto" variant={highlight ? 'primary' : 'outline'} className="w-full">Reservar</Button>
        </div>
    )
}
