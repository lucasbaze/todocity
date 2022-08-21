import { Container, Flex, Link, Text } from '@todocity/ui/core';

export function Footer() {
  return (
    <Container>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        width="100%"
        color="white"
      >
        <Text color="white">© {new Date().getFullYear()} TodoCity, LLC.</Text>
        <Flex flex={1} justifyContent="flex-end" gap={2}>
          <Link href="/terms">Terms</Link>&
          <Link href="/privacy">Privacy Policy</Link>
        </Flex>
      </Flex>
    </Container>
  );
}
