import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jadelaketaythanglong.com',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
