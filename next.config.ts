import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  // For static export, we'll handle i18n client-side
  experimental: {
    typedRoutes: false,
  },
  // Configure page extensions to avoid conflicts
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Exclude special files from being treated as dynamic routes
  async generateBuildId() {
    return 'build'
  },
  // Temporarily disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
