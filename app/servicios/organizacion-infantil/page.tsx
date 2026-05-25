import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ToyBrick, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Organización de Espacios Infantiles en Barcelona | Ordenízate Bcn',
    description: 'Sistemas de orden infantiles intuitivos y TDAH-friendly en Barcelona. Fomenta la autonomía de tus hijos con habitaciones y cuartos de juegos organizados.',
    alternates: {
        canonical: '/servicios/organizacion-infantil',
    },
    openGraph: {
        title: 'Organización de Espacios Infantiles en Barcelona | Ordenízate Bcn',
        description: 'Sistemas de orden infantiles intuitivos y TDAH-friendly en Barcelona. Fomenta la autonomía de tus hijos con habitaciones y cuartos de juegos organizados.',
        images: [
            {
                url: '/images/service-baby-organized.png',
                width: 800,
                height: 1000,
                alt: 'Habitación infantil organizada por Ordenízate Bcn',
            }
        ]
    }
};

export default function InfantilPage() {
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-brand-pink text-sm font-medium mb-4">
                                <ToyBrick size={16} /> Cuidado
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Organización Infantil
                            </h1>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La llegada de un bebé o los cambios de etapa traen ilusión, pero también decisiones y organización constante. Diseñamos espacios claros y funcionales que acompañan este proceso, aportando estructura sin añadir presión.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Creamos sistemas prácticos y fáciles de mantener, pensados para aliviar la carga mental y facilitar el día a día familiar.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1">Llegada del Bebé</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Organización integral de la habitación y zonas asociadas, priorizando accesibilidad, practicidad y descanso para la madre</p>
                                </div>
                                <div className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-charcoal-900 mb-1 text-balance">Crecimiento y Cambios de Etapa</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">Adaptación del espacio a nuevas tallas, materiales and necesidades, manteniendo un sistema coherente que evoluciona con cada etapa.</p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar Espacio Infantil</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-baby-organized.png`}
                                alt="Habitación infantil con ropa de bebé doblegada en vertical y juguetes ordenados"
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
                            "name": "Servicio de Organización de Espacios Infantiles en Barcelona",
                            "serviceType": "Professional Kids Space Organizing Service",
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
                            "description": "Sistemas de orden infantiles intuitivos, adaptativos y TDAH-friendly que promueven la autonomía del niño y reducen la carga mental en casa."
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
                                    "name": "Organización Infantil",
                                    "item": "https://ordenizate.es/servicios/organizacion-infantil"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
