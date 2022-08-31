import { useAuth } from '@todocity/auth';
import { Avatar } from '@todocity/ui/core';

export const UserAvatar = () => {
  const { user } = useAuth();

  return <Avatar size="sm" src={user?.photoURL ?? undefined} />;
};
