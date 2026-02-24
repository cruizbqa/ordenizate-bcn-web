import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export const metadata: Metadata = {
    title: 'Aviso Legal | Ordenízate Bcn',
    description: 'Aviso legal y términos de uso del sitio web de Ordenízate Bcn.',
};

export default function AvisoLegalPage() {
    return (
        <div className="pt-24 pb-16">
            <Section>
                <Container className="max-w-3xl">
                    <h1 className="text-4xl font-serif font-bold text-charcoal-900 mb-10">Aviso Legal</h1>

                    <div className="prose prose-sage max-w-none text-gray-600 space-y-8">
                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">1. Datos Identificativos</h2>
                            <p>
                                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio,
                                de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
                            </p>
                            <ul className="list-none space-y-2 mt-4">
                                <li><strong>Titular:</strong> {SITE_CONFIG.legal.owner}</li>
                                <li><strong>DNI:</strong> {SITE_CONFIG.legal.dni}</li>
                                <li><strong>Domicilio:</strong> {SITE_CONFIG.contact.address}</li>
                                <li><strong>Correo electrónico:</strong> {SITE_CONFIG.legal.email}</li>
                                <li><strong>Nombre del sitio web:</strong> {SITE_CONFIG.legal.domain}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">2. Usuarios</h2>
                            <p>
                                El acceso y/o uso de este portal de Silvia atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso,
                                las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente
                                de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">3. Uso del Portal</h2>
                            <p>
                                {SITE_CONFIG.legal.domain} proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos")
                                en Internet pertenecientes a {SITE_CONFIG.legal.owner} o a sus licenciantes a los que el USUARIO pueda tener acceso.
                                El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario
                                para acceder a determinados servicios o contenidos.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">4. Protección de Datos</h2>
                            <p>
                                Silvia cumple con las directrices del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016
                                relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la
                                libre circulación de estos datos (RGPD), velando por garantizar un correcto uso y tratamiento de los datos personales del usuario.
                            </p>
                            <p className="mt-4">
                                Para más información, consulte nuestra <Link href="/politica-privacidad" className="text-sage-600 underline">Política de Privacidad</Link>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">5. Propiedad Intelectual e Industrial</h2>
                            <p>
                                Silvia por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web,
                                así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos;
                                marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador
                                necesarios para su funcionamiento, acceso y uso, etc.), titularidad de Silvia o bien de sus licenciantes.
                            </p>
                            <p className="mt-4">
                                Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta
                                a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte
                                y por cualquier medio técnico, sin la autorización de Silvia.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">6. Exclusión de Garantías y Responsabilidad</h2>
                            <p>
                                Silvia no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar,
                                a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus
                                o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">7. Modificaciones</h2>
                            <p>
                                Silvia se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal,
                                pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma
                                en la que éstos aparezcan presentados o localizados en su portal.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-semibold text-charcoal-900 mb-4">8. Enlaces</h2>
                            <p>
                                En el caso de que en ordenizatebcn.com se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet,
                                Silvia no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso
                                Silvia asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                            </p>
                        </section>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
