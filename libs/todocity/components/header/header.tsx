import Link from 'next/link';

import { LightDarkButton } from '@todocity/components';
import { Box, Container, Flex, Text } from '@todocity/ui';

export function Header() {
  return (
    <Container display="flex" alignItems="center" height="header">
      <Box flex="1">
        <Link href="/">
          <Text variant="h1" cursor="pointer">
            TODOCITY
          </Text>
        </Link>
      </Box>
      <Flex alignItems="center" gap="12">
        <Link href="/pricing">Early Pricing</Link>
        <LightDarkButton />
      </Flex>
    </Container>
  );
}
