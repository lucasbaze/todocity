import { Suspense, useRef } from 'react';

import { useMediaQuery, useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Show,
  Text,
} from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';
const HomeScene = dynamic(
  () => import('../libs/features/scenes/home-page/index'),
  {
    ssr: false,
    suspense: true,
  }
);
const CreateAccountButton = dynamic(
  () =>
    import(
      '../libs/data/auth/components/create-account-button/create-account-button'
    ),
  { ssr: false, suspense: true }
);

const Home: NextPage = () => {
  const { sizes } = useTheme();
  const viewRef = useRef<HTMLDivElement>(null);
  const [isMedium, isLargerThanLarge] = useMediaQuery([
    '(min-width: 768px) and (max-width: 992px)',
    '(min-width: 992px)',
  ]);

  return (
    <>
      <MainLayout>
        <Container flex={1} minHeight={`calc(100vh - ${sizes.header})`}>
          <Flex
            alignItems={{ lg: 'center' }}
            direction={{ base: 'column', lg: 'row' }}
          >
            <Flex
              flex={{ lg: 2 }}
              alignItems={{ base: 'center', lg: 'start' }}
              zIndex={4}
              direction="column"
              pb={{ base: '8', md: '12', lg: '16' }}
            >
              <Text
                as="h1"
                variant="h1"
                textAlign={{ base: 'center', lg: 'initial' }}
                maxWidth={{ sm: '450px' }}
                pt={{ base: '8', sm: '12', md: '16' }}
                pb={{ base: '4', sm: '4' }}
              >
                Your New Favorite Todo App
              </Text>
              <Text
                as="h2"
                variant="h3"
                color="gray.600"
                pb={{ base: '8', md: '12', lg: '16' }}
                textAlign={{ base: 'center', lg: 'initial' }}
              >
                <Show below="lg">
                  Complete your Todos. <br /> Unlock assets. Build your city.
                </Show>
                <Show above="lg">
                  Complete your Todos. Unlock assets. <br /> Build your city.
                </Show>
              </Text>
              <Box width="max-content">
                <Suspense
                  fallback={
                    <Button variant="primary" size="xl" mb="2">
                      Get Early Access*
                    </Button>
                  }
                >
                  <CreateAccountButton
                    ctaText="Get Early Access*"
                    size={{ base: 'md', md: 'md', lg: 'lg' }}
                  />
                </Suspense>
                <Link href="/pricing">
                  <Text
                    variant="disclaimer"
                    textAlign="center"
                    maxWidth="250px"
                    margin="0 auto"
                  >
                    *Offer may expire randomly.
                  </Text>
                </Link>
              </Box>
            </Flex>
            <Box
              flex={{ lg: 2 }}
              height={{
                base: '300px',
                md: '420px',
                lg: `calc(100vh - ${sizes.header})`,
              }}
            >
              <Box
                cursor="grab"
                _active={{ cursor: 'grabbing' }}
                ref={viewRef}
                height="100%"
                width="100%"
              />
            </Box>
          </Flex>
        </Container>
      </MainLayout>
      <Suspense fallback={null}>
        <HomeScene
          viewRef={viewRef}
          zoom={isMedium ? 0.8 : isLargerThanLarge ? 0.6 : 0.9}
        />
      </Suspense>
    </>
  );
};

export default Home;
