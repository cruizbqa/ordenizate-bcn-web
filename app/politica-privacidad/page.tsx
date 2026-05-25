import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Política de Privacidad',
    description: 'Política de privacidad y protección de datos tratados por Ordenízate Bcn.',
    alternates: {
        canonical: '/politica-privacidad',
    },
};

export default function PoliticaPrivacidadPage() {
    return (
        <div className="pt-24 pb-16">
            <Section>
                <Container className="max-w-3xl">
                    <h1 className="text-4xl font-serif font-bold text-charcoal-900 mb-10">Política de Privacidad</h1>

                    <div className="prose prose-sage max-w-none text-gray-600 space-y-8">
                        <section>
                            <p className="lead text-lg">
                                La presente Política de Privacidad describe cómo se recogen, utilizan y protegen tus datos personales cuando visitas
                                nuestro sitio web o utilizas nuestro formulario de contacto.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">1. Responsable del Tratamiento</h2>
                            <p>
                                <strong>Nombre:</strong> {SITE_CONFIG.legal.owner} (en adelante, &quot;{SITE_CONFIG.name}&quot;)<br />
                                <strong>Email de contacto:</strong> {SITE_CONFIG.legal.email}<br />
                                <strong>Domicilio:</strong> {SITE_CONFIG.contact.address}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">2. Datos que se Recogen</h2>
                            <p>
                                A través de nuestro formulario de contacto en la web, recogemos los siguientes datos:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Nombre</li>
                                <li>Email</li>
                                <li>Ciudad</li>
                                <li>Tipo de servicio solicitado</li>
                                <li>Cualquier información adicional que incluyas en tu mensaje</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">3. Finalidad del Tratamiento</h2>
                            <p>
                                Utilizamos los datos proporcionados para:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Responder a tus consultas y peticiones de presupuesto enviados mediante el formulario de contacto.</li>
                                <li>Gestionar la relación profesional que en su caso se establezca tras el contacto inicial.</li>
                            </ul>
                            <p className="mt-4">
                                <strong>No envío spam.</strong> Tus datos nunca serán utilizados con fines publicitarios masivos ni cedidos a terceros
                                sin tu consentimiento expreso o salvo obligación legal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">4. Base Legal</h2>
                            <p>
                                La base legal para el tratamiento de tus datos es el <strong>consentimiento del interesado</strong> al enviarnos el formulario
                                de contacto aceptando esta política.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">5. Conservación de Datos</h2>
                            <p>
                                Tus datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recogieron y para determinar
                                las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">6. Tus Derechos</h2>
                            <p>
                                Puedes ejercer tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición
                                enviando un correo electrónico a <strong>{SITE_CONFIG.legal.email}</strong> indicando qué derecho deseas ejercer.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">7. Protección de la Información</h2>
                            <p>
                                Implementamos medidas de seguridad técnicas para proteger tus datos personales de accesos no autorizados o pérdida accidental.
                                Utilizamos servicios de proveedores de confianza (como Upstash para rate limiting y Resend para envío de correos)
                                que cumplen con estándares de seguridad del sector.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">8. Cambios en la Política</h2>
                            <p>
                                {SITE_CONFIG.name} se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales.
                            </p>
                        </section>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
