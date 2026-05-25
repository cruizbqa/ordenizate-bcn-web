import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Home, Sparkles, LampDesk, Container as LucideContainer, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Organización de Estancias del Hogar en Barcelona | Ordenízate Bcn',
    description: 'Servicio de organización para trasteros, despachos y baños en Barcelona. Devolvemos la funcionalidad y la armonía a cualquier rincón de tu casa.',
    alternates: {
        canonical: '/servicios/organizacion-hogar',
    },
    openGraph: {
        title: 'Organización de Estancias del Hogar en Barcelona | Ordenízate Bcn',
        description: 'Servicio de organización para trasteros, despachos y baños en Barcelona. Devolvemos la funcionalidad y la armonía a cualquier rincón de tu casa.',
        images: [
            {
                url: '/images/service-home.jpg',
                width: 800,
                height: 1000,
                alt: 'Estancias del hogar organizadas por Ordenízate Bcn',
            }
        ]
    }
};

export default function HogarPage() {
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-brand-yellow text-sm font-medium mb-4">
                                <Home size={16} /> Armonía
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Organización de Estancias
                            </h1>
                            <div className="text-gray-600 mb-8 text-lg space-y-4">
                                <p>
                                    Cada rincón del hogar tiene una función. Cuando el orden se pierde, aumenta la sensación de saturación.
                                </p>
                                <p>
                                    Diseñamos sistemas adaptados al uso real del espacio, facilitando su mantenimiento y reduciendo el desorden acumulado, devolviendo equilibrio y funcionalidad al hogar.
                                </p>
                            </div>

                            <div className="space-y-6 mb-8 text-balance">
                                <ServiceItem
                                    title="Baños y Zonas de Lavado"
                                    description="Clasificación lógica de productos para simplificar la rutina diaria."
                                    icon={<Sparkles className="text-brand-yellow" />}
                                />
                                <ServiceItem
                                    title="Despachos"
                                    description="Estructuración de documentación y materiales para recuperar claridad y enfoque."
                                    icon={<LampDesk className="text-brand-yellow" />}
                                />
                                <ServiceItem
                                    title="Trasteros"
                                    description="Reorganización estratégica de almacenaje profundo, priorizando accesibilidad."
                                    icon={<LucideContainer className="text-brand-yellow" />}
                                />
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Organizar mis Estancias</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-home.jpg`}
                                alt="Estancia del hogar armonizada con estanterías ordenadas"
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
                            "name": "Servicio de Organización de Estancias del Hogar en Barcelona",
                            "serviceType": "Professional Home Organizing Service",
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
                            "description": "Orden integral y diseño de sistemas funcionales para baños, zonas de lavado, despachos personales y trasteros de almacenaje profundo."
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
                                    "name": "Organización de Estancias",
                                    "item": "https://ordenizate.es/servicios/organizacion-hogar"
                                }
                            ]
                        }
                    ])
                }}
            />
        </div>
    );
}

function ServiceItem({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <div className="flex gap-4 p-4 rounded-xl bg-white border border-sand-200 shadow-sm transition-shadow hover:shadow-md">
            <div className="mt-1 bg-yellow-50/50 p-3 rounded-lg h-fit">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-lg text-charcoal-900">{title}</h3>
                <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
