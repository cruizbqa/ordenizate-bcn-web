import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToyBrick } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).infantil.meta);
}

export default async function InfantilPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const infantil = getContent(locale).infantil;

    return (
        <ServicePageLayout
            content={infantil}
            icon={ToyBrick}
            badgeClass="bg-pink-50 text-brand-pink-700"
            imageSrc="/images/service-baby-organized.png"
            sectionClass="bg-white"
        />
    );
}
