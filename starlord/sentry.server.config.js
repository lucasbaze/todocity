// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  environment: process.env.NEXT_PUBLIC_WEB_APP_ENV || 'development',
  // ...
  // Note: if you want to override the automatic release value, do set the
  // `release` value to the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  // Sentry automatically sets this value to the Git commit sha
  release: process.env.SENTRY_RELEASE,
});
