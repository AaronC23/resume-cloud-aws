// next.config.mjs
const nextConfig = {
  webpack(config) {
    // Add a rule to handle SVGs
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
