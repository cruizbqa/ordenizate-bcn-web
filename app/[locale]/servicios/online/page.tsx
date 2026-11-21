import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Monitor } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).online.meta);
}

export default async function OnlinePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const online = getContent(locale).online;

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
