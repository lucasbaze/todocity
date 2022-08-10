import { Box, Text, Flex, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '@todocity/ui';
import { LightDarkButton } from '@todocity/components';
import { Suspense, useRef } from 'react';
import dynamic from 'next/dynamic';
const HomeScene = dynamic(() => import('../libs/todocity/three/index'), {
  suspense: true,
});

function Header() {
  return (
    <Flex p="2" alignItems="center">
      <Text variant="h1" flex="1">
        TODOCITY
      </Text>
      <Flex alignItems="center" gap="12">
        <Link href="/pricing">Early Pricing</Link>
        <LightDarkButton />
      </Flex>
    </Flex>
  );
}

const Home: NextPage = () => {
  const mainRef = useRef<HTMLDivElement>(null!);

  return (
    <>
      <Head>
        <title>Welcome to TodoCity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={mainRef}>
        <MainLayout>
          <Header />
          <Flex flex={1} alignItems="center">
            <Box flex={3}>
              <Text as="h1" variant="hero">
                Your New Favorite Todo App
              </Text>
              <Text as="h2" variant="h2" color="gray.600" pb={24}>
                Complete your Todos. Get points. Build your city.
              </Text>
              <Box width="max-content">
                <Button variant="primary" size="xl" mb="2">
                  Create your city
                </Button>
                <Text textAlign="center" color="gray.600">
                  Your todo city is free forever
                </Text>
              </Box>
            </Box>
            <Box flex={2} height="100%">
              <Suspense fallback={null}>
                <HomeScene />
              </Suspense>
            </Box>
          </Flex>
        </MainLayout>
      </main>
    </>
  );
};

export default Home;
