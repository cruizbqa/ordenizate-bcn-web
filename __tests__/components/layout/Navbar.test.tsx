import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Navbar } from '@/components/layout/Navbar';

// Mock next/link
vi.mock('next/link', () => ({
    default: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
        <a href={href} {...props}>{children}</a>
    ),
}));

// Mock next/image
vi.mock('next/image', () => ({
    default: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { src: string }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} {...props} />
    ),
}));

// Mock the Instagram deep link utility — not under test here
vi.mock('@/lib/utils', async (importOriginal) => {
    const actual = await importOriginal<typeof import('@/lib/utils')>();
    return { ...actual, handleInstagramDeepLink: vi.fn() };
});

describe('Navbar', () => {
    it('renders the brand logo link pointing to "/"', () => {
        render(<Navbar />);
        const logoLink = screen.getAllByRole('link').find(
            (el) => el.getAttribute('href') === '/'
        );
        expect(logoLink).toBeInTheDocument();
    });

    it('renders all primary navigation links', () => {
        render(<Navbar />);
        expect(screen.getByRole('link', { name: /inicio/i })).toHaveAttribute('href', '/');
        expect(screen.getByRole('link', { name: /servicios/i })).toHaveAttribute('href', '/servicios');
        expect(screen.getByRole('link', { name: /sobre mí/i })).toHaveAttribute('href', '/sobre-mi');
        expect(screen.getByRole('link', { name: /contacto/i })).toHaveAttribute('href', '/contacto');
    });

    it('renders a WhatsApp link with the correct phone number in the href', () => {
        render(<Navbar />);
        const waLinks = screen.getAllByRole('link').filter(
            (el) => el.getAttribute('href')?.includes('34636757684')
        );
        expect(waLinks.length).toBeGreaterThan(0);
    });

    it('toggles mobile menu open and closed on button click', async () => {
        const user = userEvent.setup();
        render(<Navbar />);

        const menuButton = screen.getByRole('button', { name: /abrir menú principal/i });
        expect(menuButton).toBeInTheDocument();

        // Mobile menu items are rendered when open — check one nav link appears only in desktop by default
        // Open the menu
        await user.click(menuButton);
        const mobileLinks = screen.getAllByRole('link', { name: /servicios/i });
        // Should now have 2 links (desktop + mobile)
        expect(mobileLinks.length).toBeGreaterThanOrEqual(2);

        // Close the menu
        await user.click(menuButton);
        const afterClose = screen.getAllByRole('link', { name: /servicios/i });
        expect(afterClose.length).toBe(1);
    });
});
