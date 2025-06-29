import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/poke-api',
  assetPrefix: '/poke-api',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
