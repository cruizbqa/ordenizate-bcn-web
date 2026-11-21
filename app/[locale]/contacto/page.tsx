import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ContactItem } from '@/components/ui/ContactItem';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata, localizedUrl } from '@/lib/metadata';
import { ogLocale, localeOrDefault } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const contacto = getContent(locale).contacto;
    return {
        ...buildMetadata(contacto.meta, locale),
        openGraph: {
            title: contacto.meta.ogTitle,
            description: contacto.meta.ogDescription,
            url: localizedUrl('/contacto', locale),
            locale: ogLocale[localeOrDefault(locale)],
            images: ['/images/contact-ordenizate.jpg'],
        },
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const contacto = getContent(locale).contacto;

    return (
        <div className="pt-8">
            <Section className="bg-sand-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-serif font-bold mb-4 text-charcoal-900">{contacto.h1}</h1>
                        <p className="text-lg text-gray-600">
                            {contacto.intro[0]}<br className="hidden sm:block" />
                            {contacto.intro[1]}
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
                        {/* Contact Info (Left) */}
                        <div className="order-1 flex flex-col gap-6 h-full">
                            <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm shrink-0">
                                <h2 className="font-serif text-xl font-bold mb-6">{contacto.infoHeading}</h2>
                                <div className="space-y-6">
                                    <ContactItem
                                        icon={<Mail className="text-sage-600" />}
                                        title={contacto.labels.email}
                                        content={SITE_CONFIG.contact.email}
                                        copyable
                                    />
                                    <ContactItem
                                        icon={<MessageCircle className="text-sage-600" />}
                                        title={contacto.labels.whatsapp}
                                        content={SITE_CONFIG.contact.phone}
                                        copyable
                                    />
                                    <ContactItem
                                        icon={<MapPin className="text-sage-600" />}
                                        title={contacto.labels.area}
                                        content={contacto.areaText}
                                    />
                                </div>
                            </div>

                            {/* Image (Desktop only) */}
                            <div className="relative w-full flex-grow rounded-2xl overflow-hidden bg-sand-200 hidden lg:block min-h-[200px]">
                                <NextImage
                                    src={`${SITE_CONFIG.basePath}/images/contact-ordenizate.jpg`}
                                    alt={contacto.imageAlt}
                                    fill
                                    className="object-cover object-[center_31%]"
                                />
                            </div>
                        </div>

                        {/* Form (Right on desktop) */}
                        <div className="order-2">
                            <ContactForm />
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
