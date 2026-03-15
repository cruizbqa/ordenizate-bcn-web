import type { NextConfig } from "next";

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
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path((?!index$).*).html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
