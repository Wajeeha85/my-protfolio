/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ❗ This allows production builds to succeed even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ❗ This allows production builds to succeed even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
