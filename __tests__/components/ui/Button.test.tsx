import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';

// Mock next/link to avoid Next.js router context requirement
vi.mock('next/link', () => ({
    default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
        <a href={href} {...props}>{children}</a>
    ),
}));

describe('Button', () => {
    it('renders a <button> element by default', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
    });

    it('renders a <a> link when href is provided', () => {
        render(<Button href="/contacto">Contacto</Button>);
        const link = screen.getByRole('link', { name: 'Contacto' });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/contacto');
    });

    it('renders disabled state', () => {
        render(<Button disabled>Enviar</Button>);
        expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled();
    });

    it('renders size="lg" without crashing', () => {
        render(<Button size="lg">Grande</Button>);
        expect(screen.getByRole('button', { name: 'Grande' })).toBeInTheDocument();
    });

    it('renders size="sm" without crashing', () => {
        render(<Button size="sm">Pequeño</Button>);
        expect(screen.getByRole('button', { name: 'Pequeño' })).toBeInTheDocument();
    });

    it('renders variant="outline" without crashing', () => {
        render(<Button variant="outline">Outline</Button>);
        expect(screen.getByRole('button', { name: 'Outline' })).toBeInTheDocument();
    });

    it('renders variant="ghost" without crashing', () => {
        render(<Button variant="ghost">Ghost</Button>);
        expect(screen.getByRole('button', { name: 'Ghost' })).toBeInTheDocument();
    });
});
