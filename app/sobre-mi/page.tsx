import { Metadata } from 'next';
import NextImage from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heart, Shield, Leaf } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: 'Conoce a la organizadora profesional detrás de Ordenízate Bcn.',
};

export default function AboutPage() {
    return (
        <div className="pt-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
                    {/* Text */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-8">
                            Más que ordenar, <br /><span className="text-sage-600">creo bienestar.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Hola, soy <span className="font-bold">Silvia</span>. Fundadora de <span className="font-bold">Ordenízate Bcn</span>.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Mi pasión por el orden nació de la necesidad de encontrar calma en una vida ajetreada. Pronto descubrí que el entorno en el que vivimos tiene un impacto directo en cómo nos sentimos.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Mi método no se basa en el perfeccionismo, sino en la funcionalidad. Busco soluciones reales para familias reales. Trabajo desde la empatía, sin juicios y con total confidencialidad.
                        </p>
                        <div className="flex gap-4">
                            <Button href="/contacto">Hablemos</Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-sand-200 rounded-lg overflow-hidden">
                        <NextImage
                            src="/images/about-profile.jpeg"
                            alt="Organizadora Profesional"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>

            {/* Values */}
            <Section className="bg-sand-50">
                <Container>
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Por qué elegirnos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<Heart className="w-8 h-8 text-brand-pink" />}
                            title="Sin Juicios"
                            desc="Tu casa es tu refugio. Entro con respeto y empatía, nunca para criticar."
                        />
                        <ValueCard
                            icon={<Shield className="w-8 h-8 text-brand-purple" />}
                            title="Confidencialidad"
                            desc="Lo que veo en tu casa, se queda en tu casa. Discreción absoluta garantizada."
                        />
                        <ValueCard
                            icon={<Leaf className="w-8 h-8 text-brand-yellow" />}
                            title="Sostenibilidad"
                            desc="Fomentamos el consumo responsable y la donación de lo que ya no necesitas."
                        />
                    </div>
                </Container>
            </Section>
        </div>
    );
}

function ValueCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-sand-100 text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="bg-sage-50 p-3 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    )
}
