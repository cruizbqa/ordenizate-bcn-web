import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const mosk = localFont({
  src: [
    { path: './fonts/Mosk Normal 400.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Mosk Medium 500.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Mosk Semi-Bold 600.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Mosk Bold 700.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-mosk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ordenizate.es'),
  alternates: {
    canonical: '/',
  },
  title: {
    template: '%s | Ordenízate Bcn',
    default: 'Ordenízate Bcn | Organizadora Profesional en Barcelona',
  },
  description: "Servicios de organización profesional en Barcelona. Transformamos tu hogar con orden, estilo y calma. Mudanzas, armarios, cocinas y más.",
  openGraph: {
    title: 'Ordenízate Bcn',
    description: 'Transforma tu espacio, transforma tu vida.',
    url: 'https://ordenizate.es',
    siteName: 'Ordenízate Bcn',
    images: [
      {
        url: '/images/hero-home-2.jpg',
        width: 1200,
        height: 630,
        alt: 'Ordenízate Bcn - Organizadora Profesional de Espacios en Barcelona',
      }
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordenízate Bcn | Organizadora Profesional en Barcelona',
    description: 'Transforma tu espacio, transforma tu vida.',
    images: ['/images/hero-home-2.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={cn(
          mosk.variable,
          "antialiased min-h-screen flex flex-col bg-sand-50"
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ordenízate Bcn",
              "image": "https://ordenizate.es/images/hero-home-2.jpg",
              "logo": "https://ordenizate.es/images/logo.png",
              "@id": "https://ordenizate.es",
              "url": "https://ordenizate.es",
              "telephone": "+34636757684",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barcelona",
                "addressRegion": "Cataluña",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.3851,
                "longitude": 2.1734
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "20:00"
                }
              ],
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Barcelona y alrededores"
              },
              "sameAs": [
                "https://instagram.com/ordenizatebcn/"
              ],
              "description": "Servicios de organización profesional en Barcelona. Transformamos tu hogar con orden, estilo y calma. Mudanzas, armarios, cocinas y más."
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
