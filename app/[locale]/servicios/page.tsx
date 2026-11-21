import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Truck, Home, Shirt, ChefHat, ToyBrick, Monitor } from 'lucide-react';
import { Heart, Shield, Leaf } from 'lucide-react';
import { ValueCard } from '@/components/ui/ValueCard';
import { serviciosIndex } from '@/content/es/servicios-index';
import { buildMetadata } from '@/lib/metadata';

export const generateMetadata = (): Metadata => buildMetadata(serviciosIndex.meta);

const serviceVisuals = {
    '/servicios/mudanzas': { icon: Truck, border: 'border-brand-yellow', iconColor: 'text-brand-yellow' },
    '/servicios/armarios': { icon: Shirt, border: 'border-brand-purple', iconColor: 'text-brand-purple' },
    '/servicios/cocinas': { icon: ChefHat, border: 'border-sage-500', iconColor: 'text-sage-600' },
    '/servicios/estancias': { icon: Home, border: 'border-brand-yellow', iconColor: 'text-brand-yellow' },
    '/servicios/infantil': { icon: ToyBrick, border: 'border-brand-pink', iconColor: 'text-brand-pink' },
    '/servicios/online': { icon: Monitor, border: 'border-sage-400', iconColor: 'text-sage-600' },
} as const;

const valueIcons = [
    <Heart key="heart" className="w-8 h-8 text-brand-pink" />,
    <Shield key="shield" className="w-8 h-8 text-brand-purple" />,
    <Leaf key="leaf" className="w-8 h-8 text-brand-yellow" />,
];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="pt-8">
            {/* Header */}
            <div className="bg-sand-50 py-16 md:py-24">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold font-serif text-charcoal-900 sm:text-5xl mb-6">
                            {serviciosIndex.header.h1}
                        </h1>
                        <p className="text-lg text-gray-600">
                            {serviciosIndex.header.intro}
                        </p>
                    </div>
                </Container>
            </div>

            {/* Services index */}
            <Section>
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {serviciosIndex.services.map((service) => {
                            const visual = serviceVisuals[service.href];
                            const Icon = visual.icon;
                            return (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className={`group flex flex-col items-center text-center gap-3 p-8 bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm hover:shadow-md transition-shadow border-t-4 ${visual.border}`}
                                >
                                    <Icon size={32} strokeWidth={1.5} className={visual.iconColor} />
                                    <p className="font-serif font-semibold text-charcoal-900">{service.label}</p>
                                    <span className="mt-2 inline-flex items-center justify-center h-9 px-4 text-sm rounded-full font-medium border border-sage-500 text-sage-600 group-hover:bg-sage-50 transition-colors duration-300">{serviciosIndex.cta}</span>
                                </Link>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* Values */}
            <Section className="bg-sand-50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">{serviciosIndex.values.heading}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviciosIndex.values.items.map((value, idx) => (
                            <ValueCard
                                key={value.title}
                                icon={valueIcons[idx]}
                                title={value.title}
                                desc={value.desc}
                            />
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
