import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ChefHat } from 'lucide-react';
import { cocinas } from '@/content/es/cocinas';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export const generateMetadata = (): Metadata => buildMetadata(cocinas.meta);

export default async function CocinasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <ServicePageLayout
            content={cocinas}
            icon={ChefHat}
            badgeClass="bg-sage-50 text-sage-700"
            imageSrc="/images/service-kitchen-organized-2.png"
            reverse
            sectionClass="bg-sand-50/50"
        />
    );
}
