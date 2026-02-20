import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
        exclude: ['node_modules', '.next', 'out'],
        server: {
            deps: {
                inline: [/@testing-library\/jest-dom/],
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('.', import.meta.url)),
        },
    },
});
