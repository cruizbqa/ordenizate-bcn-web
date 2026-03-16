import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Shirt } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Organización de Armarios y Vestidores | Ordenízate',
    description: 'Servicio profesional de organización de armarios y vestidores. Optimiza tu ropa, aplica el doblado vertical y recupera el control de lo que vistes.',
};

export default function ArmariosPage() {
    return (
        <div className="pt-24 pb-16">
            <Section className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-purple text-sm font-medium mb-4">
                                <Shirt size={16} /> Especialistas en Armarios
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Organización de Armarios y Vestidores
                            </h1>
                            <div className="text-gray-600 mb-8 text-lg space-y-4">
                                <p>
                                    Creamos un sistema de organización claro y coherente con la realidad de cada hogar, donde cada prenda encuentra su lugar y el espacio se vuelve más ligero, claro y fácil de mantener.
                                </p>
                                <p>
                                    Aplicamos técnicas profesionales adaptadas a la tipología de cada prenda y a la configuración del armario, asegurando un resultado práctico, estético y duradero en el tiempo.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-sand-200 mb-8">
                                <h3 className="font-serif font-semibold text-2xl text-charcoal-900 mb-6">El servicio incluye:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600">Técnicas profesionales de doblado y clasificación.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600">Selección adecuada de perchas y accesorios.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600">Optimización interior según tipología de prenda.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-brand-purple shrink-0" size={20} />
                                        <p className="text-gray-600">Seguimiento posterior para garantizar el sistema.</p>
                                    </div>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mi Armario</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-closet.png`}
                                alt="Armario y vestidor perfectamente organizado con ropa categorizada por color"
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
