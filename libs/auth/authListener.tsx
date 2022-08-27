import { useEffect } from 'react';

import { configureScope } from '@sentry/nextjs';
import { onAuthStateChanged } from 'firebase/auth';

import * as track from '@todocity/analytics/events/track';
import { auth } from '@todocity/firebase/client-app';

export function AuthListener() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Identify user in Sentry
        // no email for future GDPR / PII compliance
        configureScope((scope) => {
          scope.setUser({
            id: user.uid,
          });
        });
        // Identify user in google analytics
        track.identifyUser(user.uid);
      }
    });
  }, []);
  return null;
}

export default AuthListener;
