import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
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
        className={cn(
          inter.variable,
          playfair.variable,
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
