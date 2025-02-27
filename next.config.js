/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: true,
  // If you're using any experimental features like server components, enable them:
  experimental: {
    serverComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Other configuration options if needed
};
