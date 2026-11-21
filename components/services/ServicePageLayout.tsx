import type { LucideIcon } from 'lucide-react';
import NextImage from 'next/image';
import { Check } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ServiceItem } from '@/components/ui/ServiceItem';
import type { ServicePageContent } from '@/content/types';

type ServicePageLayoutProps = {
    content: ServicePageContent;
    icon: LucideIcon;
    badgeClass: string;
    imageSrc: string;
    imageAspect?: string;
    reverse?: boolean;
    sectionClass?: string;
    itemIcons?: React.ReactNode[];
};

export function ServicePageLayout({
    content,
    icon: Icon,
    badgeClass,
    imageSrc,
    imageAspect = 'aspect-[4/5]',
    reverse = false,
    sectionClass,
    itemIcons,
}: ServicePageLayoutProps) {
    return (
        <Section className={sectionClass}>
            <Container>
                <article className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                    <div className="flex-1">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${badgeClass}`}>
                            <Icon size={16} /> {content.badge}
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">{content.h1}</h1>
                        <div className="text-gray-600 mb-6 text-lg space-y-4">
                            {content.intro.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                            {content.note && (
                                <p><strong>{content.note.label}</strong> {content.note.text}</p>
                            )}
                        </div>

                        {content.bullets && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                {content.bullets.map((list) => (
                                    <div key={list.title} className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                                        <h2 className="font-semibold text-lg mb-2">{list.title}</h2>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {list.items.map((item) => (
                                                <li key={item} className="flex gap-2"><Check size={16} className="text-sage-500" /> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {content.includes && (
                            <div className="mb-8">
                                <h2 className="font-semibold text-charcoal-900 mb-4">{content.includes.title}</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {content.includes.items.map((item) => (
                                        <div key={item} className="flex items-start gap-3">
                                            <Check className="mt-1 text-sage-600 shrink-0" size={20} />
                                            <p className="text-gray-600 text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {content.cards && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                {content.cards.map((card) => (
                                    <div key={card.title} className="bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
                                        <h2 className="font-semibold text-charcoal-900 mb-1 text-balance">{card.title}</h2>
                                        <p className="text-xs text-gray-500 leading-relaxed text-balance">{card.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {content.items && (
                            <div className="space-y-6 mb-8 text-balance">
                                {content.items.map((item, idx) => (
                                    <ServiceItem
                                        key={item.title}
                                        title={item.title}
                                        description={item.description}
                                        icon={itemIcons?.[idx]}
                                    />
                                ))}
                            </div>
                        )}

                        <Button href="/contacto" variant="primary" size="lg" className="w-full sm:w-auto">{content.cta}</Button>
                    </div>

                    <div className={`relative w-full md:w-1/3 ${imageAspect} bg-sand-200 rounded-3xl overflow-hidden shadow-xl`}>
                        <NextImage
                            src={`${SITE_CONFIG.basePath}${imageSrc}`}
                            alt={content.imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>
                </article>
            </Container>
        </Section>
    );
}
