import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ordenízate Bcn',
        short_name: 'Ordenízate',
        description: 'Organización profesional del hogar en Barcelona. Mudanzas, armarios, cocinas y asesoría online.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            { src: '/icon.png', sizes: '1450x1348', type: 'image/png' },
        ],
    };
}
