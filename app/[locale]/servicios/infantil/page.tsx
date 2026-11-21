import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ToyBrick } from 'lucide-react';
import { infantil } from '@/content/es/infantil';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export const generateMetadata = (): Metadata => buildMetadata(infantil.meta);

export default async function InfantilPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

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
