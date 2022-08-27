import { captureException } from '@sentry/nextjs';
import { Context } from '@sentry/types';

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
