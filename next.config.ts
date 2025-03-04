import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
}

export default nextConfig
