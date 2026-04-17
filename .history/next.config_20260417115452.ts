import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	skipMiddlewareUrlNormalize: true,
	experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  },
	async rewrites() {
    return [
      {
        source: '/la/:path*',
        destination: 'https://launch-atlas.vercel.app/:path*',
      },
    ]
  },
}

export default nextConfig