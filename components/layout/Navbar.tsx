"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { handleInstagramDeepLink } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { Container } from "../ui/Container";
import { Menu, X } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "../ui/Icons";


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
                                src={`${SITE_CONFIG.basePath}/images/logo.png`}
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
                                href={SITE_CONFIG.contact.instagram.webUrl}
                                onClick={handleInstagramDeepLink}
                                className="p-2 rounded-full bg-instagram text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
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
                                    href={SITE_CONFIG.contact.instagram.webUrl}
                                    onClick={handleInstagramDeepLink}
                                    className="p-3 rounded-full bg-instagram text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
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
