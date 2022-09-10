import { Suspense } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Card } from '@todocity/ui/components/card/card';
import { Link } from '@todocity/ui/core';
import { Box, Container, Flex, Text } from '@todocity/ui/core';
const LoginSignupButton = dynamic(
  () => import('../../libs/components/login-signup-button/login-signup-button'),
  { ssr: false, suspense: true }
);

const textCopy = (navigateTo: string | undefined) => {
  switch (navigateTo) {
    case 'checkout':
      return {
        title: "Let's create your Metropolis!",
        description: 'Create an account first to pre-order.',
      };
    default:
      return {
        title: 'Get Early Access Today!',
        description: 'Create an account and get free premium for a year!',
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
              color="gray.600"
              pb={12}
              width={{ base: '100%', sm: '50%', lg: '40%' }}
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
                  width={{ base: '80%', sm: '60%' }}
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
