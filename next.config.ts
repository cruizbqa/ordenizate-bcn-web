import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // turbopack options if needed
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/es',
        permanent: true,
      },
      {
        source: '/:path((?!index$).*).html',
        destination: '/es/:path*',
        permanent: true,
      },
      {
        source: '/ca/aviso-legal',
        destination: '/es/aviso-legal',
        permanent: true,
      },
      {
        source: '/ca/politica-privacidad',
        destination: '/es/politica-privacidad',
        permanent: true,
      },
      {
        source: '/',
        destination: '/es',
        permanent: true,
      },
      {
        // Any legacy unprefixed path -> its Spanish prefixed URL.
        // Locale-prefixed, API, Next internals, images and files with a dot are excluded.
        source: '/:path((?!es(?:/|$)|ca(?:/|$)|api(?:/|$)|_next(?:/|$)|_vercel(?:/|$)|images(?:/|$))(?!.*\\.).*)',
        destination: '/es/:path',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
