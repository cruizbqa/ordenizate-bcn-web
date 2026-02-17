import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';
import NextImage from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | Consejos de Organización',
    description: 'Lee nuestros consejos sobre organización, mudanzas y bienestar en el hogar.',
};

// Mock Data
const POSTS = [
    {
        slug: 'mantener-orden-pisos-pequenos',
        title: 'Cómo mantener el orden en pisos pequeños en Barcelona',
        excerpt: 'Vivir en la ciudad condal a menudo significa optimizar metros cuadrados. Aquí tienes 5 trucos clave.',
        date: '10 Ene, 2026',
        category: 'Hogar',
        image: '/images/blog-hogar.jpg'
    },
    {
        slug: 'consejos-mudanza-sin-caos',
        title: 'Consejos para una mudanza sin caos',
        excerpt: '¿Te mudas pronto? Evita los errores más comunes con esta lista de verificación esencial.',
        date: '02 Ene, 2026',
        category: 'Mudanzas',
        image: '/images/blog-mudanzas.jpg'
    },
    {
        slug: 'organizacion-cocina-sistema',
        title: 'Organización de cocina: el sistema que se mantiene',
        excerpt: 'No sirve de nada ordenar si a la semana está igual. Descubre cómo crear zonas funcionales.',
        date: '20 Dic, 2025',
        category: 'Cocina',
        image: '/images/blog-cocina.jpg'
    },
    {
        slug: 'cambio-armario-stress',
        title: 'Cambio de armario sin estrés',
        excerpt: 'Llega la nueva temporada. Es el momento perfecto para revisar, descartar y reorganizar.',
        date: '15 Dic, 2025',
        category: 'Armarios',
        image: '/images/blog-armarios.jpg'
    },
    {
        slug: 'beneficios-orden-mental',
        title: 'Los beneficios del orden mental',
        excerpt: 'Cómo un espacio despejado puede ayudarte a reducir la ansiedad y mejorar tu productividad.',
        date: '05 Dic, 2025',
        category: 'Bienestar',
        image: '/images/blog-bienestar.jpg'
    },
    {
        slug: 'materiales-organizacion-imprescindibles',
        title: 'Mis materiales de organización imprescindibles',
        excerpt: 'Cajas, cestas y separadores que realmente funcionan y decoran.',
        date: '28 Nov, 2025',
        category: 'Productos',
        image: '/images/blog-productos.jpg'
    },
];

export default function BlogPage() {
    return (
        <div className="pt-8">
            <Section className="bg-sand-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-serif font-bold mb-4">Blog & Consejos</h1>
                        <p className="text-gray-600">Ideas prácticas para llevar el orden a tu día a día.</p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {POSTS.map((post) => (
                            <article key={post.slug} className="group flex flex-col bg-white rounded-2xl border border-sand-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div className="aspect-video w-full relative bg-sand-200">
                                    <NextImage
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-sage-600 font-medium mb-3">
                                        <span className="uppercase tracking-wider">{post.category}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 className="text-xl font-bold font-serif text-charcoal-900 mb-3 group-hover:text-sage-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-sage-600 hover:text-sage-700 flex items-center gap-1">
                                        Leer más <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
