import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import NextImage from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).sobreMi.meta, locale);
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const sobreMi = getContent(locale).sobreMi;

    return (
        <div className="pt-8">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
                    {/* Text */}
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-charcoal-900 mb-8">
                            {sobreMi.h1.text} <br /><span className="text-sage-600">{sobreMi.h1.accent}</span>
                        </h1>
                        <p className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
                            {sobreMi.greeting}
                        </p>
                        <div className="space-y-4 text-lg text-gray-600 mb-8 leading-relaxed">
                            {sobreMi.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                            <p className="font-bold text-charcoal-900 italic">
                                {sobreMi.closing}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button href="/contacto">{sobreMi.cta}</Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[3/4] bg-sand-200 rounded-lg overflow-hidden">
                        <NextImage
                            src={`${SITE_CONFIG.basePath}/images/about-profile.jpeg`}
                            alt={sobreMi.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}
