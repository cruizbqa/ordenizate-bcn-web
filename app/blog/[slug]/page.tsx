import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Reusing same mock data for simplicity in this demo
const POSTS: Record<string, { title: string, category: string, date: string, content: string }> = {
    'mantener-orden-pisos-pequenos': {
        title: 'Cómo mantener el orden en pisos pequeños en Barcelona',
        category: 'Hogar',
        date: '10 Ene, 2026',
        content: `
      <p>Vivir en un piso pequeño en Barcelona tiene su encanto, pero puede convertirse en un reto organizativo. La clave no está en tener más armarios, sino en tener menos cosas y mejores sistemas.</p>
      <h3>1. Aprovecha la altura</h3>
      <p>Cuando el suelo se acaba, mira hacia arriba. Estanterías altas, ganchos detrás de las puertas y armarios hasta el techo son tus mejores aliados.</p>
      <h3>2. Muebles multifuncionales</h3>
      <p>Elige una cama con canapé, un sofá con almacenaje o mesas extensibles. Cada mueble debe justificar ocupar su espacio.</p>
      <h3>3. La regla de "uno entra, uno sale"</h3>
      <p>Es vital para no saturar el espacio. Si compras unos zapatos nuevos, otros deben salir (donados o reciclados).</p>
      <p>Recuerda: El orden visual da paz mental. Especialmente en espacios reducidos.</p>
    `
    },
    'consejos-mudanza-sin-caos': {
        title: 'Consejos para una mudanza sin caos',
        category: 'Mudanzas',
        date: '02 Ene, 2026',
        content: '<p>Contenido simulado para el post...</p>'
    },
    'organizacion-cocina-sistema': {
        title: 'Organización de cocina: el sistema que se mantiene',
        category: 'Cocina',
        date: '20 Dic, 2025',
        content: '<p>Contenido simulado...</p>'
    },
    'cambio-armario-stress': {
        title: 'Cambio de armario sin estrés',
        category: 'Armarios',
        date: '15 Dic, 2025',
        content: '<p>Contenido simulado...</p>'
    },
    'beneficios-orden-mental': {
        title: 'Los beneficios del orden mental',
        category: 'Bienestar',
        date: '05 Dic, 2025',
        content: '<p>Contenido simulado...</p>'
    },
    'materiales-organizacion-imprescindibles': {
        title: 'Mis materiales de organización imprescindibles',
        category: 'Productos',
        date: '28 Nov, 2025',
        content: '<p>Contenido simulado...</p>'
    }
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = (await params).slug;
    const post = POSTS[slug];

    return {
        title: post ? post.title : 'Blog Post',
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = POSTS[slug];

    if (!post) {
        return (
            <Container className="py-20 text-center">
                <h1 className="text-2xl font-bold">Post no encontrado</h1>
                <Button href="/blog" className="mt-4">Volver al Blog</Button>
            </Container>
        );
    }

    return (
        <article className="pt-24 pb-16">
            <Container size="md">
                <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-sage-600 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Volver al blog
                </Link>

                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 text-sm text-sage-600 font-medium mb-4">
                        <span className="uppercase tracking-wider">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-charcoal-900 leading-tight">
                        {post.title}
                    </h1>
                </div>

                <div className="aspect-video w-full bg-sand-200 rounded-2xl mb-12 flex items-center justify-center text-gray-400">
                    [Imagen Principal del Post]
                </div>

                <div
                    className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal-900 prose-p:text-gray-600 prose-a:text-sage-600 hover:prose-a:text-sage-500 mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-sand-200 text-center">
                    <h3 className="font-serif text-2xl font-bold mb-4">¿Necesitas ayuda con esto?</h3>
                    <p className="text-gray-600 mb-6">Puedo ayudarte a implementar estos sistemas en tu hogar de forma personalizada.</p>
                    <Button href="/contacto">Consulta sin compromiso</Button>
                </div>
            </Container>
        </article>
    );
}
