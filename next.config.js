/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
