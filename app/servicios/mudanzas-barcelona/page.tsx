import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Truck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Pre y Post Mudanzas en Barcelona | Organización Profesional',
    description: 'Servicio integral de mudanzas en Barcelona. Descarte, embalaje profesional y desembalaje para que empieces en tu nueva casa con orden y tranquilidad.',
    alternates: {
        canonical: '/servicios/mudanzas-barcelona',
    },
    openGraph: {
        title: 'Pre y Post Mudanzas en Barcelona | Organización Profesional',
        description: 'Servicio integral de mudanzas en Barcelona. Descarte, embalaje profesional y desembalaje para que empieces en tu nueva casa con orden y tranquilidad.',
        images: [
            {
                url: '/images/service-moving.png',
                width: 800,
                height: 1000,
                alt: 'Mudanzas organizadas en Barcelona por Ordenízate Bcn',
            }
        ]
    }
};

export default function MudanzasPage() {
    return (
        <div className="pt-8 pb-12">
            <Section className="bg-sand-50/50">
                <Container>
                    <Link href="/servicios" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-sage-600 transition-colors mb-8">
                        <ArrowLeft size={16} />
                        Volver a Servicios
                    </Link>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Truck size={16} /> Control
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
                                sizes="(max-width: 768px) 100vw, 42vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Structured Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Servicio de Mudanza Organizada (Pre y Post Mudanza) en Barcelona",
                            "serviceType": "Professional Organizing Service",
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "Ordenízate Bcn",
                                "url": "https://ordenizate.es"
                            },
                            "areaServed": [
                                { "@type": "AdministrativeArea", "name": "Barcelona" },
                                { "@type": "AdministrativeArea", "name": "Sant Cugat del Vallès" },
                                { "@type": "AdministrativeArea", "name": "Sitges" },
                                { "@type": "AdministrativeArea", "name": "Castelldefels" },
                                { "@type": "AdministrativeArea", "name": "Maresme" }
                            ],
                            "description": "Estructuración, embalaje cuidadoso, descarte y desembalaje organizado con colocación funcional de estancias para asegurar una mudanza sin estrés."
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Inicio",
                                    "item": "https://ordenizate.es"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Servicios",
                                    "item": "https://ordenizate.es/servicios"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": "Mudanzas Barcelona",
                                    "item": "https://ordenizate.es/servicios/mudanzas-barcelona"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
