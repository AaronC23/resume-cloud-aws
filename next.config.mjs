// next.config.mjs
const nextConfig = {
  // output: 'export',
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
