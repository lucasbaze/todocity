import NextLink from 'next/link';

import { LightDarkButton } from '@todocity/components/light-dark-button/light-dark-button';
import { Box, Container, Flex, Link, Text } from '@todocity/ui/core';

export function Header() {
  return (
    <Container display="flex" alignItems="center" height="header">
      <Box flex="1">
        <NextLink href="/">
          <Text variant="h1" cursor="pointer">
            TODOCITY
          </Text>
        </NextLink>
      </Box>
      <Flex alignItems="center" gap="12">
        <Link variant="headerNav" href="/pricing">
          Early Pricing
        </Link>
        <LightDarkButton variant="ghost" />
      </Flex>
    </Container>
  );
}
