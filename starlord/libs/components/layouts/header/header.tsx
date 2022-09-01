import { Suspense } from 'react';

import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { LightDarkButton } from '@todocity/components/light-dark-button/light-dark-button';
import { Box, Button, Container, Flex, Link, Text } from '@todocity/ui/core';

const HeaderLoginButton = dynamic(() => import('./header-login-button'), {
  ssr: false,
  suspense: true,
});

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
      <Flex alignItems="center" gap="4">
        <Link variant="headerNav" href="/pricing">
          Early Pricing
        </Link>
        <LightDarkButton variant="ghost" />
        <Suspense
          fallback={
            <Button isLoading={true} variant="outline" size="md">
              Login
            </Button>
          }
        >
          <HeaderLoginButton />
        </Suspense>
      </Flex>
    </Container>
  );
}
