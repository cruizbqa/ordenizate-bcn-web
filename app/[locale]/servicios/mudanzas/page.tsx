import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Truck } from 'lucide-react';
import { mudanzas } from '@/content/es/mudanzas';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export const generateMetadata = (): Metadata => buildMetadata(mudanzas.meta);

export default async function MudanzasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

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
