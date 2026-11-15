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
    alternates: { canonical: '/servicios' },
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
            {highlight && <div className="absolute top-0 right-0 bg-sage-600 text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr-lg font-medium">Popular</div>}
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
