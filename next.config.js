/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки для GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/tim-guide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tim-guide/' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig 