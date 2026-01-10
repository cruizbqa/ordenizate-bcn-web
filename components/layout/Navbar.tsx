"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Sobre Mí", href: "/sobre-mi" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/contacto" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-sand-200 supports-[backdrop-filter]:bg-white/60">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-charcoal-900">
                            Ordenízate Bcn
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
                        <Button variant="primary" size="sm" href="whatsapp://send?phone=34636757684" className="ml-4">
                            WhatsApp
                        </Button>
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
            {isOpen && (
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
                        <div className="pt-2">
                            <Button variant="primary" size="md" href="whatsapp://send?phone=34636757684" className="w-full">
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
