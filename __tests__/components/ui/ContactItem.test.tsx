import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { ContactItem } from '@/components/ui/ContactItem';
import { Mail } from 'lucide-react';

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('ContactItem', () => {
    it('renders the title and content', () => {
        render(
            <ContactItem
                icon={<Mail />}
                title="Email"
                content="info@ordenizate.es"
            />
        );
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('info@ordenizate.es')).toBeInTheDocument();
    });

    it('does NOT render a copy button when copyable is false', () => {
        render(
            <ContactItem
                icon={<Mail />}
                title="Área"
                content="Barcelona"
            />
        );
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('renders a copy button when copyable is true', () => {
        render(
            <ContactItem
                icon={<Mail />}
                title="Email"
                content="info@ordenizate.es"
                copyable
            />
        );
        expect(screen.getByRole('button', { name: /copiar email/i })).toBeInTheDocument();
    });

    it('copies content to clipboard on button click', async () => {
        const user = userEvent.setup();
        const writeText = vi.fn().mockResolvedValue(undefined);

        // Mock navigator.clipboard using vi.stubGlobal
        vi.stubGlobal('navigator', {
            ...global.navigator,
            clipboard: { writeText }
        });

        render(
            <ContactItem
                icon={<Mail />}
                title="Email"
                content="info@ordenizate.es"
                copyable
            />
        );

        await user.click(screen.getByRole('button', { name: /copiar email/i }));
        expect(writeText).toHaveBeenCalledWith('info@ordenizate.es');
    });
});
