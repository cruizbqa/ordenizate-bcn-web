"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { handleInstagramDeepLink } from "@/lib/utils";
import { Container } from "../ui/Container";
import { InstagramIcon } from "../ui/Icons";


export function Footer() {
    const t = useTranslations('footer');

    return (
        <footer className="bg-sand-100 border-t border-sand-200 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="font-serif text-2xl font-bold text-charcoal-900">
                            Ordenízate
                        </Link>
                        <p className="mt-4 text-sm text-gray-600 max-w-xs">
                            {t('tagline')}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">{t('menu')}</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/" className="hover:text-sage-600 transition-colors">{t('home')}</Link></li>
                            <li><Link href="/servicios" className="hover:text-sage-600 transition-colors">{t('services')}</Link></li>
                            <li><Link href="/sobre-mi" className="hover:text-sage-600 transition-colors">{t('about')}</Link></li>
                            <li><Link href="/contacto" className="hover:text-sage-600 transition-colors">{t('contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">{t('services')}</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/servicios/mudanzas" className="hover:text-sage-600 transition-colors">{t('servicesList.mudanzas')}</Link></li>
                            <li><Link href="/servicios/armarios" className="hover:text-sage-600 transition-colors">{t('servicesList.armarios')}</Link></li>
                            <li><Link href="/servicios/cocinas" className="hover:text-sage-600 transition-colors">{t('servicesList.cocinas')}</Link></li>
                            <li><Link href="/servicios/estancias" className="hover:text-sage-600 transition-colors">{t('servicesList.estancias')}</Link></li>
                            <li><Link href="/servicios/infantil" className="hover:text-sage-600 transition-colors">{t('servicesList.infantil')}</Link></li>
                            <li><Link href="/servicios/online" className="hover:text-sage-600 transition-colors">{t('servicesList.online')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 mb-4">{t('contact')}</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>{t('location')}</li>
                            <li><a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-sage-600 transition-colors">{SITE_CONFIG.contact.email}</a></li>
                            <li className="flex items-center gap-3">
                                <a href={SITE_CONFIG.contact.instagram.webUrl} onClick={handleInstagramDeepLink} className="hover:text-sage-600 transition-colors">@{SITE_CONFIG.contact.instagram.username}</a>
                            </li>
                            <li><a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-sage-600 transition-colors">{SITE_CONFIG.contact.phone}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sand-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ordenízate. {t('rights')}</p>
                    <div className="flex gap-6">
                        <Link href="/aviso-legal" className="hover:text-sage-600">{t('legalNotice')}</Link>
                        <Link href="/politica-privacidad" className="hover:text-sage-600">{t('privacy')}</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
