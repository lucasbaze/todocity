import { useEffect } from 'react';

import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import * as track from '@todocity/analytics/events/track';
import { captureError } from '@todocity/errors';

import { auth } from '../config/index';

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (error) {
      captureError('useAuthState Error', error);
    }
  }, [error]);

  const handleLogout = async () => {
    await signOut(auth);
    track.logout();
  };

  return { user, loading, logout: handleLogout };
}
