import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  outputFileTracingRoot: path.join(__dirname, './'),
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
    ],
  },
};

export default nextConfig;
