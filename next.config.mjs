/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer, dev }) => {
    if (isServer && !dev) {
      config.optimization.splitChunks = false;
    }
    return config;
  },
};

export default nextConfig;
