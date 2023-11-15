/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['localhost', 'patrickfilm.net'],
  },
  env: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  },
}

module.exports = nextConfig
