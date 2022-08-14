import { Suspense } from 'react';

import { useTheme } from '@chakra-ui/react';
import { IconArrowRight } from '@tabler/icons';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

import { eventTriggers } from '@todocity/analytics';
import { AnalButton, MainLayout } from '@todocity/components';
import { auth } from '@todocity/firebase';
import { Box, Container, Flex, Text } from '@todocity/ui';
const HomeScene = dynamic(() => import('../libs/todocity/three/index'), {
  suspense: true,
});

const Home: NextPage = () => {
  const [user, loading] = useAuthState(auth);
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container
        display="grid"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
      >
        <Flex flex={1} alignItems="center">
          <Box flex={3}>
            <Text as="h1" variant="hero">
              Your New Favorite Todo App
            </Text>
            <Text as="h2" variant="h2" color="gray.600" pb={24}>
              Complete your Todos. Get points. Build your city.
            </Text>
            <Box width="max-content">
              <Link href={user ? '/city' : '/signup'}>
                <AnalButton
                  variant="primary"
                  size="xl"
                  mb="2"
                  isLoading={loading}
                  analytics={{ buttonName: eventTriggers.MAIN_CTA }}
                >
                  {user ? (
                    <>
                      Go to Your City <IconArrowRight />
                    </>
                  ) : (
                    'Create your city'
                  )}
                </AnalButton>
              </Link>
              <Text textAlign="center" color="gray.600">
                Your todo city is free forever
              </Text>
            </Box>
          </Box>
          <Box flex={2} height={`calc(100vh - ${sizes.header})`}>
            <Suspense fallback={null}>
              <HomeScene />
            </Suspense>
          </Box>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default Home;
