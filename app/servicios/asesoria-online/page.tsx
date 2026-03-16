import { Metadata } from 'next';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Monitor, Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Asesoría de Organización Online | Ordenízate',
    description: 'Servicio de organización profesional a distancia por videollamada. Evaluamos tu espacio y te entregamos un plan de acción para que ordenes a tu ritmo.',
};

export default function AsesoriaOnlinePage() {
    return (
        <div className="pt-24 pb-16">
            <Section className="bg-sand-50/50">
                <Container>
                    <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                        <div className="flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 text-sage-600 text-sm font-medium mb-4">
                                <Monitor size={16} /> A tu ritmo
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-charcoal-900 mb-6">
                                Asesoría de Organización Online
                            </h1>
                            <div className="text-gray-600 mb-6 text-lg space-y-4">
                                <p>
                                    La asesoría online está pensada para quienes necesitan acompañamiento profesional a distancia o desean implementar el sistema por su cuenta, manteniendo el mismo criterio y estructura que en el servicio presencial.
                                </p>
                                <p>
                                    A través de videollamadas estructuradas, analizamos el espacio y diseñamos un plan claro, realista y fácil de aplicar.
                                </p>
                                <p className="text-gray-600 mb-6 text-lg space-y-4">
                                    Es una modalidad práctica y resolutiva, pensada para organizar con autonomía pero sin improvisar.
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-semibold text-charcoal-900 mb-4">El servicio incluye:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Videollamada de diagnóstico y planificación.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Propuesta estructurada con recomendaciones.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Guía paso a paso adaptada al espacio.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                        <p className="text-gray-600 text-sm">Seguimiento durante la implementación.</p>
                                    </div>
                                </div>
                            </div>

                            <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">Reservar Asesoría Online</Button>
                        </div>

                        <div className="relative w-full md:w-5/12 aspect-[4/5] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
                            <NextImage
                                src={`${SITE_CONFIG.basePath}/images/service-online.png`}
                                alt="Sesión de organización online por videollamada desde un despacho"
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
