import type { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ChefHat } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Cocinas y Despensas',
    description: 'La cocina es un espacio de movimiento continuo. Cuando no existe una estructura clara, se generan duplicidades, acumulaciones y una sensación constante de desorden.',
    alternates: { canonical: '/servicios/cocinas' },
};

export default function CocinasPage() {
    return (
        <Section className="bg-sand-50/50">
            <Container>
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-700 text-sm font-medium mb-4">
                            <ChefHat size={16} /> Criterio
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Cocinas y Despensas</h1>
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
    );
}
