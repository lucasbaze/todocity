import { Box, Button, Text } from '@chakra-ui/react';
import { LightDarkButton, UserAvatar } from '@todocity/components';

function HomePage() {
  return (
    <Box>
      <Text fontSize="4xl">Home Page</Text>
      <LightDarkButton />
      <UserAvatar />
    </Box>
  );
}

export default HomePage;
