import type { Metadata } from 'next';
import type { PageMeta } from '@/content/types';

export function buildMetadata(meta: PageMeta): Metadata {
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: meta.canonical },
    };
}
