const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { window: false };

    return config;
  },
  images: {
    remotePatterns: [],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/blog/:path*',
  //       destination: 'https://burneeble.com/:path*',
  //     },
  //   ];
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
