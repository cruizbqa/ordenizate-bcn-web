import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ContactForm } from '@/components/contact/ContactForm';

// Mock SITE_CONFIG
vi.mock('@/lib/constants', () => ({
    SITE_CONFIG: {
        basePath: '',
        legal: {
            owner: 'Test Owner'
        }
    }
}));

// Mock Select component to be a standard HTML select for easier testing
vi.mock('@/components/ui/Select', () => ({
    Select: ({ options, value, onChange, label, error }: any) => (
        <div>
            {label && <label htmlFor="mock-select">{label}</label>}
            <select
                id="mock-select"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                data-testid="mock-select"
            >
                <option value="">Selecciona una opción</option>
                {options.map((opt: any) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
            {error && <span>{error}</span>}
        </div>
    )
}));

// Mock fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('ContactForm Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockFetch.mockResolvedValue({
            ok: true,
            json: async () => ({ message: 'Success' }),
        });
    });

    it('renders all form fields', () => {
        render(<ContactForm />);

        expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Ciudad/i)).toBeInTheDocument();
        expect(screen.getByText(/Tipo de servicio/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/He leído y acepto/i)).toBeInTheDocument();
    });

    it('shows "Campo obligatorio" errors when submitting empty form', async () => {
        render(<ContactForm />);

        const submitBtn = screen.getByRole('button', { name: /Enviar mensaje/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            const errors = screen.getAllByText('Campo obligatorio');
            // name, email, city, service, message, privacy
            expect(errors.length).toBeGreaterThanOrEqual(5);
        });
    });

    it('shows "Email no válido" for incorrect email format', async () => {
        render(<ContactForm />);

        const emailInput = screen.getByLabelText(/Email/i);
        fireEvent.change(emailInput, { target: { value: 'invalid-email', name: 'email' } });

        const submitBtn = screen.getByRole('button', { name: /Enviar mensaje/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText('Email no válido')).toBeInTheDocument();
        });
    });

    it('submits correctly with valid data', async () => {
        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Test User', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com', name: 'email' } });
        fireEvent.change(screen.getByLabelText(/Ciudad/i), { target: { value: 'Test City', name: 'city' } });
        fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'This is a test message.', name: 'message' } });

        // Use the mock select
        fireEvent.change(screen.getByTestId('mock-select'), { target: { value: 'estancias' } });

        // Consent
        fireEvent.click(screen.getByLabelText(/He leído y acepto/i));

        const submitBtn = screen.getByRole('button', { name: /Enviar mensaje/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText(/¡Mensaje enviado correctamente!/i)).toBeInTheDocument();
        });

        expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/api/contact'), expect.any(Object));
    });

    it('handles server errors gracefully', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            json: async () => ({ message: 'Rate limit exceeded' }),
        });

        render(<ContactForm />);

        fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Test User', name: 'name' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com', name: 'email' } });
        fireEvent.change(screen.getByLabelText(/Ciudad/i), { target: { value: 'Test City', name: 'city' } });
        fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Valid message', name: 'message' } });
        fireEvent.change(screen.getByTestId('mock-select'), { target: { value: 'estancias' } });
        fireEvent.click(screen.getByLabelText(/He leído y acepto/i));

        const submitBtn = screen.getByRole('button', { name: /Enviar mensaje/i });
        fireEvent.click(submitBtn);

        await waitFor(() => {
            expect(screen.getByText('Rate limit exceeded')).toBeInTheDocument();
        });
    });
});
