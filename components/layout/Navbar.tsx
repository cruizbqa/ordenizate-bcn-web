"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Container } from "../ui/Container";
import { Menu, X } from "lucide-react";

// Custom Instagram icon (lucide-react doesn't have Instagram)
function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

// Custom WhatsApp icon
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Sobre Mí", href: "/sobre-mi" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-sand-200 supports-[backdrop-filter]:bg-white/60">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 font-serif text-2xl font-bold tracking-tight text-charcoal-900">
                            <NextImage
                                src="/images/logo.png"
                                alt="Ordenízate Logo"
                                width={40}
                                height={40}
                                className="rounded-md"
                            />
                            Ordenízate
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:gap-x-8 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium leading-6 text-gray-700 hover:text-sage-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-2 ml-4">
                            <a
                                href="https://instagram.com/ordenizatebcn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-sand-100 text-charcoal-700 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                                title="Instagram"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                            <a
                                href={SITE_CONFIG.contact.whatsapp.getLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                                title="WhatsApp"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            {
                isOpen && (
                    <div className="md:hidden bg-white border-b border-sand-200">
                        <div className="space-y-1 px-4 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-sand-50 hover:text-sage-600"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2 flex items-center gap-3 justify-center">
                                <a
                                    href="https://instagram.com/ordenizatebcn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-sand-100 text-charcoal-700 hover:bg-sage-100 hover:text-sage-700 transition-colors"
                                    title="Instagram"
                                >
                                    <InstagramIcon className="w-6 h-6" />
                                </a>
                                <a
                                    href={SITE_CONFIG.contact.whatsapp.getLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                                    title="WhatsApp"
                                >
                                    <WhatsAppIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div >
                )
            }
        </header >
    );
}
