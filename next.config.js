/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.traction.one', 'images.gameinfo.io', 'raw.githubusercontent.com']
  }
}

module.exports = nextConfig
