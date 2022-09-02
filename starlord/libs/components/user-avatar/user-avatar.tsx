import { useAuth } from '@todocity/auth';
import { Avatar } from '@todocity/ui/core';

// TODO: Use Chakra ui exported types
interface IUserAvatarProps {
  size?: 'sm' | 'md' | 'lg';
}

export const UserAvatar = ({ size = 'sm' }: IUserAvatarProps) => {
  const { user } = useAuth();

  return <Avatar size={size} src={user?.photoURL ?? undefined} />;
};
