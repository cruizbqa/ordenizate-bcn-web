import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ordenizate.es';

    return [
        {
            url: baseUrl,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/sobre-mi`,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/servicios`,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contacto`,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];
}
