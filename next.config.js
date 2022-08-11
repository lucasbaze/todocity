/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

// docs/analyze.md
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};
