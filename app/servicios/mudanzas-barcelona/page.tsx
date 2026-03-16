import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pre y Post Mudanzas en Barcelona | Organización Profesional',
    description: 'Servicio integral de mudanzas en Barcelona. Descarte, embalaje profesional y desembalaje para que empieces en tu nueva casa con orden y tranquilidad.',
};

export default function MudanzasPage() {
    return (
        <div className="pt-24 pb-16">
            <Section className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Truck size={16} /> Especialistas en Mudanzas
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Mudanzas (Pre + Post)
                            </h1>
                            <p className="text-gray-600 mb-6 text-lg space-y-4">
                                La mudanza suele venir acompañada de decisiones, tiempos ajustados y una carga añadida. Nos ocupamos de estructurar el proceso para que se viva de forma tranquila y organizada.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg space-y-4">
                                <strong>Nota:</strong> El servicio es completamente adaptable: puede delegarse de forma integral o contratar únicamente la fase de pre-mudanza, mudanza o post-mudanza, según las necesidades de cada hogar.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-4 text-charcoal-900 border-b border-sand-100 pb-2">Pre-mudanza</h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Descarte guiado</span></li>
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Embalaje profesional</span></li>
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Etiquetado detallado</span></li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg mb-4 text-charcoal-900 border-b border-sand-100 pb-2">Post-mudanza</h3>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Desembalaje integral y colocación minuciosa</span></li>
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Organización funcional adaptada a tu estilo de vida</span></li>
                                        <li className="flex gap-3"><Check size={18} className="text-sage-500 shrink-0 mt-0.5" /> <span>Entrega final del hogar listo para disfrutar</span></li>
                                    </ul>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Pedir Presupuesto Mudanza</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-moving.png`}
                                alt="Cajas de mudanza perfectamente ordenadas con la marca Ordenizate Bcn"
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
