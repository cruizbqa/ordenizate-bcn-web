import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck, Home, Briefcase, Shirt, Box } from 'lucide-react';

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
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Truck size={16} /> Especialidad
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Gestión de Mudanzas (Pre + Post)</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                La mudanza es uno de los momentos más estresantes de la vida. Nosotras lo convertimos en una experiencia tranquila y organizada. Nos encargamos de todo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-sand-200">
                                    <h3 className="font-semibold text-lg mb-2">Pre-Mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Descarte guiado</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Embalaje profesional</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Etiquetado detallado</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-sand-200">
                                    <h3 className="font-semibold text-lg mb-2">Post-Mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Desembalaje completo</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Organización en armarios</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Retirada de cajas</li>
                                    </ul>
                                </div>
                            </div>

                            <Button href="/contacto" size="lg">Pedir Presupuesto Mudanza</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[3/4] bg-sand-200 rounded-2xl overflow-hidden">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-moving.jpg`}
                                alt="Mudanza Organizada"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <div className="w-full h-px bg-sand-200" />

            {/* category: Hogar */}
            <Section id="hogar" className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-purple text-sm font-medium mb-4">
                                <Home size={16} /> Espacios
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Organización del Hogar</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Ponemos orden en cualquier estancia de tu casa. Creamos sistemas lógicos y estéticos.
                            </p>

                            <div className="space-y-6 mb-8">
                                <ServiceItem
                                    title="Cocinas y Despensas"
                                    description="Optimización del espacio de almacenaje, categorización de alimentos y utensilios."
                                    icon={<Box className="text-brand-pink" />}
                                />
                                <ServiceItem
                                    title="Armarios y Vestidores"
                                    description="Doblado vertical, cambio de armario estacional y maximización del espacio."
                                    icon={<Shirt className="text-brand-pink" />}
                                />
                                <ServiceItem
                                    title="Habitaciones Infantiles"
                                    description="Sistemas evolutivos que ayudan a los niños a mantener el orden."
                                    icon={<Briefcase className="text-brand-pink" />}
                                />
                            </div>

                            <Button href="/contacto" variant="outline" size="lg">Consultar Disponibilidad</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[3/4] bg-sand-200 rounded-2xl overflow-hidden">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-home.jpg`}
                                alt="Armario Organizado"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Packs */}
            <Section className="bg-sage-50" spacing="lg">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-serif mb-4">PARA DISCUTIR Bonos y Packs</h2>
                        <p className="text-gray-600">Opciones flexibles para proyectos grandes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <PriceCard title="Sesión Express" hours="3h" price="Consultar" features={["1 estancia pequeña", "Descarte rápido", "Tips de mantenimiento"]} />
                        <PriceCard title="Pack Cambio Armario" hours="5h" price="Consultar" features={['Toda la ropa de temporada', 'Doblado vertical', 'Donación incluida']} highlight />
                        <PriceCard title="Bonos Horas" hours="10h / 20h" price="Consultar" features={["Para proyectos grandes", "Descuento por volumen", "Validez 6 meses"]} />
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
