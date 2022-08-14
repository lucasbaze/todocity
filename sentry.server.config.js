// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://fde10a9ae6b341baa8a49e35e7d2ec8d@o1357998.ingest.sentry.io/6644808',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  environment: process.env.NEXT_PUBLIC_WEB_APP_ENV || 'development',
  release: process.env.SENTRY_RELEASE,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
