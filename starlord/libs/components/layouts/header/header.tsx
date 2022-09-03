import { Suspense } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import { IconBrandDiscord, IconMenu2 } from '@tabler/icons';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';

import { LightDarkButton } from '@todocity/components/light-dark-button/light-dark-button';
import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from '@todocity/ui/core';

const HeaderLoginButton = dynamic(() => import('./header-login-button'), {
  ssr: false,
  suspense: true,
});

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container display="flex" alignItems="center" height="header">
        <Box>
          <NextLink href="/">
            <Text variant="h1" cursor="pointer">
              TODOCITY
            </Text>
          </NextLink>
        </Box>
        <Box
          flex="1"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          gap="4"
          justifyContent="flex-end"
        >
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
        </Box>
        {/* Mobile Hamburger*/}
        <Box
          flex="1"
          display={{ base: 'flex', md: 'none' }}
          alignItems="center"
          gap="4"
          justifyContent="flex-end"
        >
          <IconButton
            variant="outline"
            size="md"
            icon={<IconMenu2 />}
            aria-label="hamburger menu"
            onClick={onOpen}
          />
        </Box>
      </Container>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading>TODOCITY</Heading>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              <Box mb="8">
                <Suspense
                  fallback={
                    <Button variant="outline" size="md">
                      Login
                    </Button>
                  }
                >
                  <HeaderLoginButton mobile />
                </Suspense>
              </Box>
              <Stack spacing="4">
                <Link variant="headerNav" href="/" mr="4">
                  Home
                </Link>
                <Link variant="headerNav" href="/pricing" mr="4">
                  Early Bird Pricing
                </Link>
              </Stack>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex alignItems="center">
              <LightDarkButton variant="ghost" />
              <Link href="https://discord.gg/DffHpt54dZ" isExternal>
                <IconButton
                  variant="ghost"
                  icon={<IconBrandDiscord />}
                  aria-label="discord icon"
                />
              </Link>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
