import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@todocity/firebase';
import { Avatar } from '@todocity/ui/core';

export const UserAvatar = () => {
  const [user, loading, error] = useAuthState(auth);

  return <Avatar size="sm" src={user?.photoURL ?? undefined} />;
};
