/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Aura-Premium',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
