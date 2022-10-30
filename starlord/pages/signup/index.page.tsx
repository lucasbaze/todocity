import { Suspense } from 'react';

import { useColorModeValue, useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Card } from '@todocity/ui/components/card/card';
import { Link } from '@todocity/ui/core';
import { Box, Container, Flex, Text } from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';
const LoginSignupButton = dynamic(
  () =>
    import(
      '../../libs/data/auth/components/login-signup-button/login-signup-button'
    ),
  { ssr: false, suspense: true }
);

const textCopy = (navigateTo: string | undefined) => {
  switch (navigateTo) {
    case 'checkout':
      return {
        title: 'Super charge your city!',
        description: 'Sign up to get metropolis 🤩',
      };
    default:
      return {
        title: 'Your new city is waiting!',
        description: 'Create an account and start doing 💪',
      };
  }
};

const loginSignupNavigateTo = (navigateTo: string | undefined) => {
  switch (navigateTo) {
    case 'checkout':
      return '/api/stripe/create-checkout-session';
    default:
      return undefined;
  }
};

const Signup: NextPage = () => {
  const router = useRouter();
  const { sizes } = useTheme();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  const { navigate_to } = router.query;
  const navigateTo = Array.isArray(navigate_to) ? navigate_to[0] : navigate_to;
  const { title, description } = textCopy(navigateTo);

  return (
    <>
      <PageSEOMeta title="Signup" metaTitle="Signup" />
      <MainLayout>
        <Container>
          <Flex
            direction="column"
            alignItems="center"
            minHeight={`calc(100vh - ${sizes.header})`}
            pt="24"
          >
            <Text as="h1" variant="h1" pb="2" textAlign="center">
              {title}
            </Text>
            <Text
              as="h2"
              variant="h3"
              color={secondaryTextColor}
              pb={12}
              width={{ base: '90%', sm: '100%' }}
              textAlign="center"
            >
              {description}
            </Text>
            <Card boxProps={{ boxShadow: 'none', mb: 4 }}>
              <Flex direction="column" alignItems="center">
                <Suspense fallback={<Box minHeight="100px" width="200px" />}>
                  <LoginSignupButton
                    navigateTo={loginSignupNavigateTo(navigateTo)}
                  />
                </Suspense>
                <Text
                  variant="disclaimer"
                  width={{ base: '80%', sm: '65%' }}
                  textAlign="center"
                >
                  By doing so you agree to our{' '}
                  <Link textDecoration="underline" href="/terms">
                    terms of service
                  </Link>{' '}
                  and{' '}
                  <Link textDecoration="underline" href="/privacy">
                    privacy policy
                  </Link>
                </Text>
              </Flex>
            </Card>
            <Link href="/login">
              <Text variant="disclaimer" textAlign="center">
                Already have an account? Login.
              </Text>
            </Link>
          </Flex>
        </Container>
      </MainLayout>
    </>
  );
};

export default Signup;
