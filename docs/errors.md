# Errors and Error Handling

We use Sentry for capturing and recording errors.

## CaptureError

Sentry will automatically capture any uncaught errors. For any known errors, you can use `captureError` that wraps the captureException from Sentry.
