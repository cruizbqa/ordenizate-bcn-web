import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const mosk = localFont({
  src: [
    { path: './fonts/Mosk Thin 100.ttf', weight: '100', style: 'normal' },
    { path: './fonts/Mosk Extra-Light 200.ttf', weight: '200', style: 'normal' },
    { path: './fonts/Mosk Light 300.ttf', weight: '300', style: 'normal' },
    { path: './fonts/Mosk Normal 400.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Mosk Medium 500.ttf', weight: '500', style: 'normal' },
    { path: './fonts/Mosk Semi-Bold 600.ttf', weight: '600', style: 'normal' },
    { path: './fonts/Mosk Bold 700.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Mosk Extra-Bold 800.ttf', weight: '800', style: 'normal' },
    { path: './fonts/Mosk Ultra-Bold 900.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-mosk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ordenízate Bcn',
    default: 'Ordenízate Bcn | Organizadora Profesional en Barcelona',
  },
  description: "Servicios de organización profesional en Barcelona. Transformamos tu hogar con orden, estilo y calma. Mudanzas, armarios, cocinas y más.",
  openGraph: {
    title: 'Ordenízate Bcn',
    description: 'Transforma tu espacio, transforma tu vida.',
    url: 'https://ordenizatebcn.com',
    siteName: 'Ordenízate Bcn',
    locale: 'es_ES',
    type: 'website',
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
