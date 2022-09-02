import { useAuth } from '@todocity/auth';
import { UserAvatar } from '@todocity/components/user-avatar/user-avatar';
import { Box, Flex, Heading, Text } from '@todocity/ui/core';

export function AccountSettings() {
  const { user } = useAuth();

  return (
    <Box>
      <Heading pb="4">Account</Heading>
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
    </Box>
  );
}
