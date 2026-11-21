import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Bubbles, Home, LampDesk, Container as LucideContainer } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).estancias.meta);
}

const itemIcons = [
    <Bubbles key="bubbles" className="text-brand-yellow" />,
    <LampDesk key="desk" className="text-brand-yellow" />,
    <LucideContainer key="container" className="text-brand-yellow" />,
];

export default async function EstanciasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const estancias = getContent(locale).estancias;

    return (
        <ServicePageLayout
            content={estancias}
            icon={Home}
            badgeClass="bg-yellow-50 text-brand-yellow-700"
            imageSrc="/images/service-home.jpg"
            reverse
            sectionClass="bg-white"
            itemIcons={itemIcons}
        />
    );
}
