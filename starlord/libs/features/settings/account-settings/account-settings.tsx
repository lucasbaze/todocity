import { useRouter } from 'next/router';

import { useAuth } from '@todocity/auth';
import { UserAvatar } from '@todocity/features/user-avatar/user-avatar';
import { Box, Button, Flex, Text } from '@todocity/ui/core';

export function AccountSettings() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/logout');
  };

  return (
    <Box>
      <Text pb="4" variant="h3" fontWeight="bold">
        Account
      </Text>
      <Flex alignItems="center">
        <UserAvatar size="md" />
        <Flex direction="column" ml="4">
          <Text variant="body">
            <b>Name: </b>
            {user?.displayName}
          </Text>
          <Text variant="body">
            <b>Email: </b>
            {user?.email}
          </Text>
        </Flex>
      </Flex>
      <Box pt="4">
        <Button
          size="sm"
          onClick={handleLogout}
          variant="outline"
          colorScheme="red"
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
