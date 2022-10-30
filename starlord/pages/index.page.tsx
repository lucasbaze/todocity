import { Suspense, useRef } from 'react';

import {
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import NextImage from 'next/image';

import { FeatureSection } from '@todocity/ui/components/feature-section/feature-section';
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Image,
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
  const { colorMode } = useColorMode();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const dividerColor = useColorModeValue('purple.600', 'purple.100');

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
                Your New Favorite Todo List.
              </Text>
              <Text
                as="h2"
                variant="h3"
                color={secondaryTextColor}
                pb={{ base: '8', md: '12', lg: '16' }}
                textAlign={{ base: 'center', lg: 'initial' }}
              >
                <Show below="lg">
                  Complete your todos. <br /> Unlock assets. Build your city.
                </Show>
                <Show above="lg">
                  Complete your todos. Unlock assets. <br /> Build your city.
                </Show>
              </Text>
              <Box width="max-content">
                <Suspense
                  fallback={
                    <Button variant="primary" size="xl" mb="2">
                      Create Your City
                    </Button>
                  }
                >
                  <CreateAccountButton
                    includeAsterisk
                    size={{ base: 'md', lg: 'lg' }}
                  />
                </Suspense>
                <Link href="/pricing">
                  <Text
                    variant="disclaimer"
                    textAlign="center"
                    maxWidth="250px"
                    margin="0 auto"
                  >
                    *Your TodoCity will always be free.
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
        <Container variant="two-column-md" mb={12}>
          <Box width="100px" m="0 auto">
            <Divider borderBottomWidth="2px" borderColor={dividerColor} />
          </Box>
          <FeatureSection
            title="It's a todo list"
            description="TodoCity is an intuitive todo list app allowing you to manage multiple todo lists at a time."
            image={
              <NextImage
                src={
                  colorMode === 'light'
                    ? '/static/images/todo-lists-light.png'
                    : '/static/images/todo-lists-dark.png'
                }
                aria-label="feature-image"
                loading="lazy"
                width="864px"
                height="1008px"
              />
            }
            textRight
          />
          <Box width="100px" m="0 auto">
            <Divider borderBottomWidth="2px" borderColor={dividerColor} />
          </Box>
          <FeatureSection
            title="It's a game"
            description="Earn, unlock, spend, collect, and more all from simply doing your normal todos over time."
            image={
              <NextImage
                src={
                  colorMode === 'light'
                    ? '/static/images/library-light.png'
                    : '/static/images/library-dark.png'
                }
                aria-label="feature-image"
                loading="lazy"
                width="650px"
                height="888px"
              />
            }
          />
          <Box width="100px" m="0 auto">
            <Divider borderBottomWidth="2px" borderColor={dividerColor} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            py="24"
          >
            <Box textAlign="center" mb={8}>
              <Text variant="h2" fontWeight="bold">
                It&apos;s TodoCity!
              </Text>
              <Text variant="h3" color={secondaryTextColor}>
                Your 3D world to play and be productive
              </Text>
            </Box>
            <Box position="relative" mb={8} width="689px" height="368px">
              <NextImage
                quality={100}
                src={
                  colorMode === 'light'
                    ? '/static/images/light-city-trans.png'
                    : '/static/images/dark-city-trans.png'
                }
                aria-label="todocity-sample"
                loading="lazy"
                layout="fill"
              />
            </Box>
            <Suspense
              fallback={
                <Button variant="primary" size="xl" mb="2">
                  Create Your City
                </Button>
              }
            >
              <CreateAccountButton size={{ base: 'md', lg: 'lg' }} />
            </Suspense>
          </Box>
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
