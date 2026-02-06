/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for Digital Ocean deployment
  // Remove basePath for root domain deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keep images unoptimized if you don't want to use Next.js Image Optimization API
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [],
  },
}

export default nextConfig
