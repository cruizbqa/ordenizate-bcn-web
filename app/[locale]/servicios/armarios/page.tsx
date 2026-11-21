import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Shirt } from 'lucide-react';
import { armarios } from '@/content/es/armarios';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export const generateMetadata = (): Metadata => buildMetadata(armarios.meta);

export default async function ArmariosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <ServicePageLayout
            content={armarios}
            icon={Shirt}
            badgeClass="bg-purple-50 text-brand-purple-700"
            imageSrc="/images/service-closet.png"
            reverse
            sectionClass="bg-sand-50/50"
        />
    );
}
