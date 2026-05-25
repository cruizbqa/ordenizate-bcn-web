import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Check, Shirt, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Organización de Armarios y Vestidores en Barcelona | Ordenízate Bcn',
    description: 'Servicio profesional de organización de armarios y vestidores en Barcelona. Optimiza tu ropa, aplica el doblado vertical y recupera el control de lo que vistes.',
    alternates: {
        canonical: '/servicios/organizacion-armarios',
    },
    openGraph: {
        title: 'Organización de Armarios y Vestidores en Barcelona | Ordenízate Bcn',
        description: 'Servicio profesional de organización de armarios y vestidores en Barcelona. Optimiza tu ropa, aplica el doblado vertical y recupera el control de lo que vistes.',
        images: [
            {
                url: '/images/service-closet.png',
                width: 800,
                height: 1000,
                alt: 'Armario y vestidor perfectamente organizado por Ordenízate Bcn',
            }
        ]
    }
};

export default function ArmariosPage() {
    return (
        <div className="pt-8 pb-12">
            <Section className="bg-sand-50/50">
                <Container>
                    <Link href="/servicios" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-sage-600 transition-colors mb-8">
                        <ArrowLeft size={16} />
                        Volver a Servicios
                    </Link>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-brand-purple text-sm font-medium mb-4">
                                <Shirt size={16} /> Funcionalidad
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
                            "name": "Servicio de Organización de Armarios y Vestidores en Barcelona",
                            "serviceType": "Professional Closet Organizing Service",
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
                            "description": "Optimización profunda de armarios y vestidores aplicando doblado vertical, categorización y distribución lógica."
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
                                    "name": "Organización de Armarios",
                                    "item": "https://ordenizate.es/servicios/organizacion-armarios"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
