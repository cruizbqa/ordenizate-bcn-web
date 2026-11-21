import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Truck } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).mudanzas.meta);
}

export default async function MudanzasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const mudanzas = getContent(locale).mudanzas;

    return (
        <ServicePageLayout
            content={mudanzas}
            icon={Truck}
            badgeClass="bg-yellow-50 text-brand-yellow-700"
            imageSrc="/images/service-moving.png"
            imageAspect="aspect-[5/5]"
        />
    );
}
