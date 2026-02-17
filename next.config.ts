import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  basePath: '/ordenizate-bcn-web',
  images: {
    unoptimized: true,
  },
  experimental: {
    // turbopack options if needed
  },
};

export default nextConfig;
