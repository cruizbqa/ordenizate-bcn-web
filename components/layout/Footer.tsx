"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { handleInstagramDeepLink } from "@/lib/utils";
import { Container } from "../ui/Container";
import { InstagramIcon } from "../ui/Icons";


export function Footer() {
    return (
        <footer className="bg-sand-100 border-t border-sand-200 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="font-serif text-2xl font-bold text-charcoal-900">
                            Ordenízate Bcn
                        </Link>
                        <p className="mt-4 text-sm text-gray-600 max-w-xs">
                            Transformando espacios y vidas a través del orden profesional en Barcelona y alrededores.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">Menú</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-sage-600 transition-colors">Inicio</Link></li>
                            <li><Link href="/servicios" className="hover:text-sage-600 transition-colors">Servicios</Link></li>
                            <li><Link href="/sobre-mi" className="hover:text-sage-600 transition-colors">Sobre Mí</Link></li>
                            <li><Link href="/contacto" className="hover:text-sage-600 transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">Servicios</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/servicios#mudanzas" className="hover:text-sage-600 transition-colors">Mudanzas</Link></li>
                            <li><Link href="/servicios#hogar" className="hover:text-sage-600 transition-colors">Organización Hogar</Link></li>
                            <li><Link href="/servicios#armarios" className="hover:text-sage-600 transition-colors">Cambio de Armario</Link></li>
                            <li><Link href="/servicios#cocinas" className="hover:text-sage-600 transition-colors">Cocinas</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">Contacto</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>Barcelona, España</li>
                            <li><a href="mailto:info@ordenizate.es" className="hover:text-sage-600 transition-colors">info@ordenizate.es</a></li>
                            <li className="flex items-center gap-3">
                                <a href={SITE_CONFIG.contact.instagram.webUrl} onClick={handleInstagramDeepLink} className="hover:text-sage-600 transition-colors">@ordenizatebcn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sand-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ordenízate Bcn. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-sage-600">Aviso Legal</Link>
                        <Link href="#" className="hover:text-sage-600">Política de Privacidad</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
