import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
    title: 'Sobre Mí',
    description: 'Conoce a la organizadora profesional detrás de Ordenízate Bcn.',
};

export default function AboutPage() {
    return (
        <div className="pt-0">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8 md:py-16">
                    {/* Text */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-8">
                            Más que ordenar, <br /><span className="text-sage-600">creo estructura que aporta calma</span>
                        </h1>
                        <p className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
                            Hola, soy Silvia, fundadora de Ordenízate.
                        </p>
                        <div className="space-y-4 text-lg text-gray-600 mb-8 leading-relaxed">
                            <p>
                                Durante años entendí el orden como una necesidad personal, una forma de reducir el estrés, aprovechar el tiempo al máximo y evitar tensiones innecesarias en el día a día. Con el tiempo descubrí que no se trataba de perfeccionismo, sino de funcionalidad real.
                            </p>
                            <p>
                                Soy una persona con TDAH y alta sensibilidad, y eso me ha enseñado algo importante, y es que el entorno influye directamente en cómo pensamos, nos organizamos y nos sentimos. Cuando todo está desestructurado, la mente también lo está, y cuando el espacio está ordenado, la mente gana calma y enfoque.
                            </p>
                            <p>
                                Para mí, el orden no es estética, es reducir ruido mental y crear estructura para que el día a día fluya con más claridad.
                            </p>
                            <p>
                                Cuando existe un sistema bien pensado, incluso si el caos aparece (porque aparece), el orden vuelve en pocos minutos y eso lo cambia todo.
                            </p>
                            <p>
                                Mi método no busca casas perfectas, busca estructuras reales para familias reales, espacios que funcionen incluso cuando la vida es intensa y se desordena un poco.
                            </p>
                            <p className="font-bold text-charcoal-900 italic">
                                Porque el orden no es rigidez, es claridad, y la claridad libera.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button href="/contacto">Hablemos</Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-sand-200 rounded-lg overflow-hidden">
                        <NextImage
                            src={`${SITE_CONFIG.basePath}/images/about-profile.jpeg`}
                            alt="Silvia - Organizadora Profesional de Ordenízate"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

