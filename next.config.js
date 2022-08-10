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

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
