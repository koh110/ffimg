/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  appDir: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
