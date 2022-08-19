import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@todocity/firebase/client-app';
import { Avatar } from '@todocity/ui/core';

export const UserAvatar = () => {
  const [user, loading, error] = useAuthState(auth);

  return <Avatar size="sm" src={user?.photoURL ?? undefined} />;
};
