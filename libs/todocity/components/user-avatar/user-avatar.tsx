import { Avatar } from '@todocity/ui';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@todocity/firebase';

export const UserAvatar = () => {
  const [user, loading, error] = useAuthState(auth);

  return <Avatar size="sm" src={user?.photoURL ?? undefined} />;
};
