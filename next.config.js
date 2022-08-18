/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');

// docs/analyze.md
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // Off because StylesFirebaseAuth throws warnings everywhere otherwise
  reactStrictMode: false,
  swcMinify: true,

  // Only compile pages that end in .page.tsx
  pageExtensions:
    process.env.DRAFT_PAGES === 'true'
      ? ['page.tsx', 'draft-page.tsx']
      : ['page.tsx'],
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: false, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const composeplugins = () => {
  const plugins = [withBundleAnalyzer];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig,
  });
};

/* - Make sure adding Sentry options is the last code to run before exporting, to
 			ensure that your source maps include changes from all other Webpack plugins
    - Don't build and push sentry in test env
*/
module.exports =
  process.env.NEXT_PUBLIC_WEB_APP_ENV !== 'test'
    ? withSentryConfig(composeplugins(), sentryWebpackPluginOptions)
    : composeplugins();
