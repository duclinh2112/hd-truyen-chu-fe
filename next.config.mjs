import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'varum.store',
      },
      {
        protocol: 'https',
        hostname: 'tibe-app.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'tibe.vn',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
