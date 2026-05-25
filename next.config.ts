import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Let Next.js optimize images automatically on Vercel for faster load times.
  },
  experimental: {
    // turbopack options if needed
  },
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path((?!index$).*).html',
        destination: '/:path*',
        permanent: true,
      },
      // Service Redirects
      {
        source: '/servicios/mudanzas',
        destination: '/servicios/mudanzas-barcelona',
        permanent: true,
      },
      {
        source: '/servicios/armarios',
        destination: '/servicios/organizacion-armarios',
        permanent: true,
      },
      {
        source: '/servicios/cocinas',
        destination: '/servicios/organizacion-cocinas',
        permanent: true,
      },
      {
        source: '/servicios/hogar',
        destination: '/servicios/organizacion-hogar',
        permanent: true,
      },
      {
        source: '/servicios/infantil',
        destination: '/servicios/organizacion-infantil',
        permanent: true,
      },
      {
        source: '/servicios/online',
        destination: '/servicios/asesoria-online',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
