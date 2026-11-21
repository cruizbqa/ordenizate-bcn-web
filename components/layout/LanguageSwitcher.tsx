'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { onlyDefaultLocalePaths } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
    const locale = useLocale();
    const pathname = usePathname();
    const onlyDefaultLocale = (onlyDefaultLocalePaths as readonly string[]).includes(pathname);

    const linkClass = (active: boolean) =>
        cn(
            'px-2 py-1 rounded-md transition-colors',
            active ? 'bg-sage-600 text-white' : 'text-gray-600 hover:text-sage-600'
        );

    return (
        <nav aria-label="Idioma" className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide">
            <Link
                href={pathname}
                locale="es"
                className={linkClass(locale === 'es')}
                aria-current={locale === 'es' ? 'page' : undefined}
            >
                ES
            </Link>
            {!onlyDefaultLocale && (
                <Link
                    href={pathname}
                    locale="ca"
                    className={linkClass(locale === 'ca')}
                    aria-current={locale === 'ca' ? 'page' : undefined}
                >
                    CA
                </Link>
            )}
        </nav>
    );
}
