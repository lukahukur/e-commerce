/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'],
    formats: ['image/webp'],
    minimumCacheTTL: 70,
  },
}

module.exports = nextConfig
