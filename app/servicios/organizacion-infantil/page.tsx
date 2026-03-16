import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ToyBrick } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Organización de Espacios Infantiles | Ordenízate',
    description: 'Sistemas de orden infantiles intuitivos y TDAH-friendly. Fomenta la autonomía de tus hijos con habitaciones y cuartos de juegos organizados.',
};

export default function InfantilPage() {
    return (
        <div className="pt-24 pb-16">
            <Section className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-brand-pink text-sm font-medium mb-4">
                                <ToyBrick size={16} /> Especialistas en Niños
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Organización Infantil
                            </h1>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    Como organizadora profesional con más de 5 años de experiencia, formada en el método KonMari® y experta en el acompañamiento de personas con TDAH, entiendo que el orden en los espacios infantiles es clave para el bienestar familiar.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Diseñamos sistemas intuitivos, visuales y fáciles de mantener que fomentan la autonomía, reducen la sobreestimulación y se adaptan al ritmo de cada niño, aportando calma y estructura al hogar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Llegada del Bebé</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Organización integral, priorizando accesibilidad y el descanso.</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1 text-balance">Cambios de Etapa</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Adaptación del espacio a nuevas tallas y necesidades evolutivas.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar Espacio Infantil</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-baby-organized.png`}
                                alt="Habitación infantil con ropa de bebé doblegada en vertical y juguetes ordenados"
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
