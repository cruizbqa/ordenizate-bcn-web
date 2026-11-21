import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import { cn } from "@/lib/utils";
import { htmlLang } from "@/lib/i18n";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const mosk = localFont({
  src: [
    { path: '../fonts/Mosk Thin 100.ttf', weight: '100', style: 'normal' },
    { path: '../fonts/Mosk Extra-Light 200.ttf', weight: '200', style: 'normal' },
    { path: '../fonts/Mosk Light 300.ttf', weight: '300', style: 'normal' },
    { path: '../fonts/Mosk Normal 400.ttf', weight: '400', style: 'normal' },
    { path: '../fonts/Mosk Medium 500.ttf', weight: '500', style: 'normal' },
    { path: '../fonts/Mosk Semi-Bold 600.ttf', weight: '600', style: 'normal' },
    { path: '../fonts/Mosk Bold 700.ttf', weight: '700', style: 'normal' },
    { path: '../fonts/Mosk Extra-Bold 800.ttf', weight: '800', style: 'normal' },
    { path: '../fonts/Mosk Ultra-Bold 900.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-mosk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ordenizate.es'),
  title: {
    template: '%s | Ordenízate Bcn',
    default: 'Ordenízate Bcn | Organizadora Profesional en Barcelona',
  },
  description: "Servicios de organización profesional en Barcelona. Transformamos tu hogar con orden, estilo y calma. Mudanzas, armarios, cocinas y más.",
  openGraph: {
    title: 'Ordenízate Bcn',
    description: 'Transforma tu espacio, transforma tu vida.',
    url: 'https://ordenizate.es',
    siteName: 'Ordenízate',
    locale: 'es_ES',
    type: 'website',
    images: ['/images/hero-home-2.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ordenízate Bcn | Organizadora Profesional en Barcelona',
    description: 'Transforma tu espacio, transforma tu vida.',
    images: ['/images/hero-home-2.jpg'],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={htmlLang[locale]} className="scroll-smooth">
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
              "name": "Ordenízate",
              "image": "https://ordenizate.es/images/hero-home-2.jpg",
              "@id": "https://ordenizate.es",
              "url": "https://ordenizate.es",
              "telephone": "+34636757684",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barcelona",
                "addressRegion": "Barcelona",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.3874,
                "longitude": 2.1686
              },
              "areaServed": "Barcelona y área metropolitana",
              "sameAs": ["https://instagram.com/ordenizatebcn/"],
              "description": "Servicios de organización profesional en Barcelona. Transformamos tu hogar con orden, estilo y calma. Mudanzas, armarios, cocinas y más.",
              "priceRange": "$$"
            })
          }}
        />
        <NextIntlClientProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
