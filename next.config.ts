import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/poke-api',
  assetPrefix: '/poke-api',
  distDir: 'docs',  // <-- GitHub Pages sirve desde /docs
  images: {
    unoptimized: true // <-- necesario para imágenes estáticas (si usas <Image>)
  },
  trailingSlash: true // <-- para que funcione bien en GH Pages
};

export default nextConfig;
