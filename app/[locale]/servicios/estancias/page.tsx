import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ServiceItem } from '@/components/ui/ServiceItem';
import { Bubbles, Home, LampDesk, Container as LucideContainer } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Organización de Estancias',
    description: 'Cada rincón del hogar tiene una función. Cuando el orden se pierde, aumenta la sensación de saturación.',
    alternates: { canonical: '/servicios/estancias' },
};

export default async function EstanciasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <Section className="bg-white">
            <Container>
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow-700 text-sm font-medium mb-4">
                            <Home size={16} /> Armonía
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Organización de Estancias</h1>
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
    );
}
