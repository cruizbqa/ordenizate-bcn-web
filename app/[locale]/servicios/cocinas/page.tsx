import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { ChefHat } from 'lucide-react';
import { getContent } from '@/content';
import { buildMetadata } from '@/lib/metadata';
import { ServicePageLayout } from '@/components/services/ServicePageLayout';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return buildMetadata(getContent(locale).cocinas.meta);
}

export default async function CocinasPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const cocinas = getContent(locale).cocinas;

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
