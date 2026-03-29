/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/about', destination: '/' },
      { source: '/experience', destination: '/' },
      { source: '/projects', destination: '/' },
      { source: '/skills', destination: '/' },
      { source: '/contact', destination: '/' },
    ];
  },
};
module.exports = nextConfig;
