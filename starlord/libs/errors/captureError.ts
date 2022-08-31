import { captureException } from '@sentry/nextjs';
import { Context } from '@sentry/types';

// docs/errors.md
// https://github.com/getsentry/sentry-javascript/issues/1607#issuecomment-825887112
export function captureError(msg: string, err: Error, data?: Context) {
  captureException(err, (scope) => {
    scope.addBreadcrumb({
      type: 'error', // predefined types
      category: 'error',
      level: 'error',
      message: msg,
    });
    if (data) scope.setContext('extra-data', data);
    return scope;
  });
}
