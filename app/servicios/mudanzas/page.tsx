import type { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Mudanzas (Pre + Post)',
    description: 'La mudanza suele venir acompañada de decisiones, tiempos ajustados y una carga añadida. Nos ocupamos de estructurar el proceso para que se viva de forma tranquila y organizada.',
    alternates: { canonical: '/servicios/mudanzas' },
};

export default function MudanzasPage() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow-700 text-sm font-medium mb-4">
                            <Truck size={16} /> Control
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Mudanzas (Pre + Post)</h1>
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
    );
}
