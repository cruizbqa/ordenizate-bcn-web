import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactElement } from 'react';
import es from '@/messages/es.json';
import ca from '@/messages/ca.json';

const messages = { es, ca } as const;

export function renderWithIntl(ui: ReactElement, locale: 'es' | 'ca' = 'es') {
    return render(
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            {ui}
        </NextIntlClientProvider>
    );
}
