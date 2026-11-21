import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Monitor } from 'lucide-react';
import { online } from '@/content/es/online';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export const generateMetadata = (): Metadata => buildMetadata(online.meta);

export default async function OnlinePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <ServicePageLayout
            content={online}
            icon={Monitor}
            badgeClass="bg-sage-50 text-sage-700"
            imageSrc="/images/service-online.png"
            sectionClass="bg-sand-50/50"
        />
    );
}
