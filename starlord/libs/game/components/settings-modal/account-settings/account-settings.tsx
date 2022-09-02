import { useAuth } from '@todocity/auth';
import { UserAvatar } from '@todocity/components/user-avatar/user-avatar';
import { Box, Heading, Text } from '@todocity/ui/core';

export function AccountSettings() {
  const { user } = useAuth();

  return (
    <Box>
      <Heading>Account</Heading>
      <UserAvatar />
      <Text>Name: {user.displayName}</Text>
      <Text>Email: {user.email}</Text>
    </Box>
  );
}
