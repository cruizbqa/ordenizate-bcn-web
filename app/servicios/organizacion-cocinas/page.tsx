import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ChefHat, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Organización de Cocinas y Despensas en Barcelona | Ordenízate Bcn',
    description: 'Recupera el control de tu cocina. Sistemas de orden prácticos para despensas y armarios que facilitan tu día a día en Barcelona y evitan el desperdicio.',
    alternates: {
        canonical: '/servicios/organizacion-cocinas',
    },
    openGraph: {
        title: 'Organización de Cocinas y Despensas en Barcelona | Ordenízate Bcn',
        description: 'Recupera el control de tu cocina. Sistemas de orden prácticos para despensas y armarios que facilitan tu día a día en Barcelona y evitan el desperdicio.',
        images: [
            {
                url: '/images/service-kitchen-organized-2.png',
                width: 800,
                height: 1000,
                alt: 'Cocinas y despensas organizadas por Ordenízate Bcn',
            }
        ]
    }
};

export default function CocinasPage() {
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-sm font-medium mb-4">
                                <ChefHat size={16} /> Criterio
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Organización de Cocinas y Despensas
                            </h1>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La cocina es un espacio de movimiento continuo. Cuando no existe una estructura clara, se generan duplicidades, acumulaciones y una sensación constante de desorden.
                                </p>
                                <p>
                                    Diseñamos una organización coherente y fácil de mantener, donde cada categoría tiene su lugar y cada zona responde a un uso real. Aplicamos soluciones prácticas que permiten visualizar mejor lo que hay, evitar compras innecesarias y mantener el equilibrio sin esfuerzo añadido.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg text-charcoal-900 mb-2">Cocina</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Distribución funcional de utensilios y vajilla, priorizando el acceso cómodo.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm">
                                    <h3 className="font-semibold text-lg text-charcoal-900 mb-2">Despensa</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Organización por categorías lógicas que facilitan la rotación de productos.
                                    </p>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mi Cocina</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-kitchen-organized-2.png`}
                                alt="Despensa de cocina organizada con botes etiquetados y cestas"
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
                            "name": "Servicio de Organización de Cocinas y Despensas en Barcelona",
                            "serviceType": "Professional Kitchen Organizing Service",
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
                            "description": "Optimización funcional de cocinas y organización metódica de despensas por categorías lógicas para evitar el desperdicio."
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
                                    "name": "Organización de Cocinas",
                                    "item": "https://ordenizate.es/servicios/organizacion-cocinas"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}
