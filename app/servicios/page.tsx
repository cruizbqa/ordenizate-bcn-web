import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Truck, Home, Shirt, ChefHat, ToyBrick, Monitor } from 'lucide-react';
import { ValueCard } from '@/components/ui/ValueCard';
import { Heart, Shield, Leaf } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Servicios: Mudanzas y Organización',
    description: 'Descubre nuestros servicios de organización profesional en Barcelona. Mudanzas, hogar, armarios, cocinas y más.',
    alternates: { canonical: '/servicios' },
};

const services = [
    { href: '/servicios/mudanzas', icon: Truck, label: 'Control', bg: 'bg-sand-50', border: 'border-brand-yellow', iconColor: 'text-brand-yellow' },
    { href: '/servicios/armarios', icon: Shirt, label: 'Funcionalidad', bg: 'bg-white', border: 'border-brand-purple', iconColor: 'text-brand-purple' },
    { href: '/servicios/cocinas', icon: ChefHat, label: 'Criterio', bg: 'bg-sand-50', border: 'border-sage-500', iconColor: 'text-sage-600' },
    { href: '/servicios/estancias', icon: Home, label: 'Armonía', bg: 'bg-white', border: 'border-brand-yellow', iconColor: 'text-brand-yellow' },
    { href: '/servicios/infantil', icon: ToyBrick, label: 'Cuidado', bg: 'bg-sand-50', border: 'border-brand-pink', iconColor: 'text-brand-pink' },
    { href: '/servicios/online', icon: Monitor, label: 'A tu ritmo', bg: 'bg-white', border: 'border-sage-400', iconColor: 'text-sage-600' },
];

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

            {/* Services index */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className={`group flex flex-col items-center text-center gap-3 p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 ${s.bg} ${s.border}`}
                            >
                                <s.icon size={32} strokeWidth={1.5} className={s.iconColor} />
                                <p className="font-serif font-semibold text-charcoal-900">{s.label}</p>
                                <span className="mt-2 inline-flex items-center justify-center h-9 px-4 text-sm rounded-full font-medium border border-sage-500 text-sage-600 group-hover:bg-sage-50 transition-colors duration-300">Ver servicio</span>
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
