import { Suspense } from 'react';

import { IconBrandDiscord } from '@tabler/icons';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { LightDarkButton } from '@todocity/components/light-dark-button/light-dark-button';
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Text,
} from '@todocity/ui/core';

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
        <Link variant="headerNav" href="/pricing" mr="4">
          Early Pricing
        </Link>
        <Flex alignItems="center">
          <Link href="https://discord.gg/DffHpt54dZ" isExternal>
            <IconButton
              variant="ghost"
              icon={<IconBrandDiscord />}
              aria-label="discord icon"
            />
          </Link>
          <LightDarkButton variant="ghost" />
        </Flex>
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
