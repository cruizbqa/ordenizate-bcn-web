import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Truck, Home, Shirt, ChefHat, ToyBrick, Monitor, ArrowRight } from 'lucide-react';
import { Heart, Shield, Leaf } from 'lucide-react';
import { ValueCard } from '@/components/ui/ValueCard';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Servicios | Mudanzas y Organización Profesional',
    description: 'Descubre nuestros servicios de organización en Barcelona. Ayudamos en mudanzas, armarios, cocinas, habitaciones infantiles y hogar en general.',
};

export default function ServicesHubPage() {
    const services = [
        {
            title: "Mudanzas Pre y Post",
            description: "Te acompañamos durante todo el proceso de pre-mudanza y post-mudanza para que aterrices en tu nuevo hogar con paz mental y todo en su sitio.",
            icon: <Truck size={24} className="text-brand-yellow" />,
            bgColor: "bg-yellow-50",
            href: "/servicios/mudanzas-barcelona"
        },
        {
            title: "Armarios y Vestidores",
            description: "Doblado vertical, unificación visual y un sistema lógico para que elegir qué ponerte deje de ser un caos matutino.",
            icon: <Shirt size={24} className="text-brand-purple" />,
            bgColor: "bg-purple-50",
            href: "/servicios/organizacion-armarios"
        },
        {
            title: "Cocinas y Despensas",
            description: "Distribución funcional de zonas de trabajo y almacenaje lógico para facilitar tus rutinas, evitar duplicidades y aprovechar lo que tienes.",
            icon: <ChefHat size={24} className="text-sage-600" />,
            bgColor: "bg-sage-50",
            href: "/servicios/organizacion-cocinas"
        },
        {
            title: "Estancias del Hogar",
            description: "Devolvemos la armonía a zonas problemáticas como trasteros, lavaderos, despachos y baños, adaptándonos al uso real de tu familia.",
            icon: <Home size={24} className="text-brand-yellow" />,
            bgColor: "bg-yellow-50",
            href: "/servicios/organizacion-hogar"
        },
        {
            title: "Organización Infantil",
            description: "Creemos en sistemas a la altura de los más pequeños (KonMari / TDAH-friendly) para fomentar su autonomía y reducir la sobreestimulación.",
            icon: <ToyBrick size={24} className="text-brand-pink" />,
            bgColor: "bg-pink-50",
            href: "/servicios/organizacion-infantil"
        },
        {
            title: "Asesoría Online",
            description: "Diagnóstico, plan de acción personalizado a distancia y seguimiento para que organices tu espacio a tu propio ritmo con pautas claras.",
            icon: <Monitor size={24} className="text-sage-600" />,
            bgColor: "bg-sage-50",
            href: "/servicios/asesoria-online"
        }
    ];

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
                            Acompañamos la transformación de tu hogar a través de sistemas de orden prácticos, realistas y diseñados para mantenerse. Elige el área en la que necesitas ayuda para ver el detalle.
                        </p>
                    </div>
                </Container>
            </div>

            {/* Hub Grid */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link 
                                key={index} 
                                href={service.href}
                                className="group flex flex-col bg-white rounded-3xl p-8 shadow-sm border border-sand-200 hover:shadow-xl hover:border-sage-200 transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-4 group-hover:text-sage-700 transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 mb-8 flex-1">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-sage-600 font-medium group-hover:underline mt-auto">
                                    Ver todas las ventajas <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
<<<<<<< HEAD
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
=======
                            </Link>
                        ))}
>>>>>>> 30b3c00 (feat split services pages)
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
