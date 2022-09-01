import { useColorModeValue } from '@chakra-ui/react';

import { Box, Container, Flex, Link, Text } from '@todocity/ui/core';

export function Footer() {
  const backgroundColor = useColorModeValue('gray.200', '#000000');
  const borderTop = useColorModeValue('1px solid gray', '1px solid white');

  return (
    <Box p={6} bg={backgroundColor}>
      <Container>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems="center"
          width="100%"
        >
          <Text>© {new Date().getFullYear()} TodoCity, LLC.</Text>
          <Flex flex={1} justifyContent="flex-end" gap={2}>
            <Link href="/terms">Terms</Link>&
            <Link href="/privacy">Privacy Policy</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
