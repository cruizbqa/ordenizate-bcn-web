import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Truck, Home, Shirt, ChefHat, ToyBrick, Monitor, ArrowRight } from 'lucide-react';
import { Heart, Shield, Leaf } from 'lucide-react';
import { ValueCard } from '@/components/ui/ValueCard';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Servicios de Organización del Hogar en Barcelona',
    description: 'Servicios de organización profesional en Barcelona. Soluciones a medida para mudanzas organizadas, vaciado de cajas, orden de armarios, cocinas, trasteros y asesoramiento online.',
    alternates: {
        canonical: '/servicios',
    },
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
            title: "Organización Infantil",
            description: "Creamos sistemas prácticos y fáciles de mantener, pensados para aliviar la carga mental y facilitar el día a día familiar.",
            icon: <ToyBrick size={24} className="text-brand-pink" />,
            bgColor: "bg-pink-50",
            href: "/servicios/organizacion-infantil"
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
            <div className="bg-sand-50 py-8 md:py-16">
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
                            </Link>
                        ))}
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
