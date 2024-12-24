const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals = {
        "@napi-rs/canvas": "commonjs @napi-rs/canvas",
      };
    }

    config.module.rules.push({
      test: /\.node$/,
      use: "node-loader",
    });

    config.resolve.fallback = { window: false };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
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
