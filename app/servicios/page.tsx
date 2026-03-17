import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck, Home, Bubbles, LampDesk, Container as LucideContainer, Shirt, ChefHat, ToyBrick, Monitor } from 'lucide-react';
import { Heart, Shield, Leaf } from 'lucide-react';
import { ValueCard } from '@/components/ui/ValueCard';

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
                            Acompañamos la transformación de tu hogar a través de sistemas de orden prácticos, realistas y diseñados para mantenerse. Desde mudanzas integrales hasta la organización de armarios, cocinas o espacios infantiles, adaptamos cada solución a tu ritmo y estilo de vida.
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
                                <Truck size={16} /> Control
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Mudanzas (Pre + Post)</h2>
                            <p className="text-gray-600 mb-6 text-lg space-y-4">
                                La mudanza suele venir acompañada de decisiones, tiempos ajustados y una carga añadida. Nos ocupamos de estructurar el proceso para que se viva de forma tranquila y organizada.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg space-y-4">
                                <strong>Nota:</strong> El servicio es completamente adaptable: puede delegarse de forma integral o contratar únicamente la fase de pre-mudanza, mudanza o post-mudanza, según las necesidades de cada hogar.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-2">Pre-mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Descarte guiado</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Embalaje profesional</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Etiquetado detallado</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-2">Post-mudanza</h3>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Desembalaje integral y colocación minuciosa</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Organización funcional adaptada a tu estilo de vida</li>
                                        <li className="flex gap-2"><Check size={16} className="text-sage-500" /> Entrega final del hogar listo para disfrutar</li>
                                    </ul>
                                </div>
                            </div>

                            <Button href="/contacto" size="lg" className="w-full sm:w-auto">Pedir Presupuesto Mudanza</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[5/5] bg-sand-200 rounded-3xl overflow-hidden shadow-2xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-moving.png`}
                                alt="Mudanza Organizada en Barcelona"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* category: Armarios */}
            <Section id="armarios" className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-purple text-sm font-medium mb-4">
                                <Shirt size={16} /> Funcionalidad
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Armarios y Vestidores</h2>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    Creamos sistemas de organización claro y coherente con la realidad de cada hogar, donde cada prenda encuentra su lugar y el espacio se vuelve más ligero, claro y fácil de mantener.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Aplicamos técnicas profesionales adaptadas a la tipología de cada prenda y a la configuración del armario, asegurando un resultado práctico, estético y duradero en el tiempo.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-charcoal-900 mb-4">El servicio incluye:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Técnicas profesionales de doblado y clasificación.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Selección adecuada de perchas y accesorios.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Optimización interior según tipología de prenda.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Seguimiento posterior para garantizar el sistema.</p>
                                    </div>
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

            {/* category: Infantil */}
            <Section id="infantil" className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-brand-pink text-sm font-medium mb-4">
                                <ToyBrick size={16} /> Cuidado
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Organización Infantil</h2>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La llegada de un bebé o los cambios de etapa traen ilusión, pero también decisiones y organización constante. Diseñamos espacios claros y funcionales que acompañan este proceso, aportando estructura sin añadir presión.
                                </p>
                                <p className="text-base text-gray-500">
                                    Creamos sistemas prácticos y fáciles de mantener, pensados para aliviar la carga mental y facilitar el día a día familiar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Llegada del Bebé</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Organización integral de la habitación y zonas asociadas, priorizando accesibilidad, practicidad y descanso para la madre.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1 text-balance">Crecimiento y Cambios de Etapa</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Adaptación del espacio a nuevas tallas, materiales y necesidades, manteniendo un sistema coherente que evoluciona con cada etapa.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar Espacio Infantil</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-baby-organized.png`}
                                alt="Habitación infantil con sistema de organización consciente y adaptado a niños"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* category: Cocinas y Despensas */}
            <Section id="cocinas" className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-sm font-medium mb-4">
                                <ChefHat size={16} /> Criterio
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Cocinas y Despensas</h2>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La cocina es un espacio de movimiento continuo. Cuando no existe una estructura clara, se generan duplicidades, acumulaciones y una sensación constante de desorden.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Diseñamos una organización coherente y fácil de mantener, donde cada categoría tiene su lugar y cada zona responde a un uso real. Aplicamos soluciones prácticas que permiten visualizar mejor lo que hay, evitar compras innecesarias y mantener el equilibrio sin esfuerzo añadido.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Cocina</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed text-balance">Distribución funcional de utensilios, vajilla y zonas de trabajo, priorizando el acceso cómodo y la coherencia en el uso diario.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Despensa</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed text-balance">Organización por categorías y agrupaciones lógicas que facilitan la rotación de productos y reducen la acumulación innecesaria.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mi Cocina</Button>
                        </div>

                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-kitchen-organized-2.png`}
                                alt="Cocina y despensa organizada con botes bien etiquetados en una cocina real de España"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* category: Estancias */}
            <Section id="hogar" className="bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Home size={16} /> Armonía
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Organización de Estancias</h2>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    Cada rincón del hogar tiene una función. Cuando el orden se pierde, aumenta la sensación de saturación.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Diseñamos sistemas adaptados al uso real del espacio, facilitando su mantenimiento y reduciendo el desorden acumulado, devolviendo equilibrio y funcionalidad al hogar.
                                </p>
                            </div>

                            <div className="space-y-6 mb-8 text-balance">
                                <ServiceItem
                                    title="Baños y Zonas de Lavado"
                                    description="Clasificación lógica de productos para simplificar la rutina diaria."
                                    icon={<Bubbles className="text-brand-yellow" />}
                                />
                                <ServiceItem
                                    title="Despachos"
                                    description="Estructuración de documentación y materiales para recuperar claridad y enfoque."
                                    icon={<LampDesk className="text-brand-yellow" />}
                                />
                                <ServiceItem
                                    title="Trasteros"
                                    description="Reorganización estratégica de almacenaje profundo, priorizando accesibilidad y coherencia."
                                    icon={<LucideContainer className="text-brand-yellow" />}
                                />
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mis Estancias</Button>
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

            {/* category: Online */}
            <Section id="online" className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-sm font-medium mb-4">
                                <Monitor size={16} /> A tu ritmo
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Asesoría Online</h2>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La asesoría online está pensada para quienes necesitan acompañamiento profesional a distancia o desean implementar el sistema por su cuenta, manteniendo el mismo criterio y estructura que en el servicio presencial.
                                </p>
                                <p>
                                    A través de videollamadas estructuradas, analizamos el espacio y diseñamos un plan claro, realista y fácil de aplicar.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Es una modalidad práctica y resolutiva, pensada para organizar con autonomía pero sin improvisar.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-charcoal-900 mb-4">El servicio incluye:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Videollamada de diagnóstico y planificación personalizada.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Propuesta estructurada con lista de recomendaciones.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Guía paso a paso adaptada al espacio.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Seguimiento y resolución de dudas durante la implementación.</p>
                                    </div>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Reservar Asesoría Online</Button>
                        </div>
                        <div className="relative w-full md:w-1/3 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-online.png`}
                                alt="Sesión de organización online por videollamada profesional"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Values */}
            <Section className="bg-sand-50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Por qué elegirnos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-brand-pink" />}
                            title="Sin Juicios"
                            desc="Acompañamiento desde el respeto y la empatía en cada proceso."
                        />
                        <ValueCard
                            icon={<Shield className="w-8 h-8 text-brand-purple" />}
                            title="Confidencialidad"
                            desc="Máxima discreción y confidencialidad en cada servicio."
                        />
                        <ValueCard
                            icon={<Leaf className="w-8 h-8 text-brand-yellow" />}
                            title="Sostenibilidad"
                            desc="Fomentamos el consumo responsable y una gestión más consciente de lo que ya no se necesita."
                        />
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
