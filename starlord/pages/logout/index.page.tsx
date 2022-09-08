import { useEffect } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';

import { useAuth } from '@todocity/auth';
import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Button, Container, Flex, Text } from '@todocity/ui/core';

const Logout: NextPage = () => {
  const { sizes } = useTheme();
  const { logout } = useAuth();

  // Logging out the user on a page that is utilizing `useAuth` will throw errors
  // because firebase will logout and re-update the state before the logout actually
  // happens. Navigating to a logout page and then logging out ensure this doesn't happen.
  useEffect(() => {
    async function logoutUser() {
      await logout();
    }
    logoutUser();
  }, [logout]);

  return (
    <MainLayout>
      <Container>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height={`calc(100vh - ${sizes.header})`}
        >
          <Text mb="2" variant="h2" fontWeight="bold">
            Good Bye
          </Text>
          <Text mb={6} variant="bodyBig">
            Hope to see you soon :)
          </Text>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            gap={3}
          >
            <Link href="/login">
              <Button size="sm" variant="outline">
                Back to city
              </Button>
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.mentalfloss.com/amazingfactgenerator"
            >
              <Button size="sm" variant="outline">
                Random Fact
              </Button>
            </a>
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Logout;
