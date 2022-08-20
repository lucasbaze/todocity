import { Suspense } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Box, Button, Container, Flex, Link, Text } from '@todocity/ui/core';
const HomeScene = dynamic(() => import('../libs/scenes/home-page/index'), {
  ssr: false,
  suspense: true,
});
const CreateAccountButton = dynamic(
  () => import('../libs/components/buttons/create-account-button'),
  { ssr: false, suspense: true }
);

const Home: NextPage = () => {
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container
        display="grid"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
      >
        <Flex
          flex={1}
          alignItems="center"
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <Box flex={3} zIndex={4}>
            <Text as="h1" variant="hero">
              Your New Favorite Todo App
            </Text>
            <Text as="h2" variant="h2" color="gray.600" pb={24}>
              Complete your Todos. Get points. Build your city.
            </Text>
            <Box width="max-content">
              <Suspense
                fallback={
                  <Button variant="primary" size="xl" mb="2">
                    Create your city
                  </Button>
                }
              >
                <CreateAccountButton />
              </Suspense>
              <Link href="/pricing">
                <Text textAlign="center" color="gray.600">
                  Your todo city is free forever
                </Text>
              </Link>
            </Box>
          </Box>
          <Box flex={2} height={`calc(100vh - ${sizes.header})`}>
            <Box
              position={{ md: 'absolute' }}
              transform={{
                base: '',
                md: 'translateX(25%)',
                lg: 'translateX(20%)',
              }}
              height={{ base: '300px', md: `calc(100vh - ${sizes.header})` }}
              right="0"
              left="0"
              zIndex={2}
            >
              <Suspense fallback={null}>
                <HomeScene />
              </Suspense>
            </Box>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Home;
