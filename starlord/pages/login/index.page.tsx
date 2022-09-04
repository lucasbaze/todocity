import { Suspense } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Card } from '@todocity/ui/components/card/card';
import { Link } from '@todocity/ui/core';
import { Box, Flex, Text } from '@todocity/ui/core';
const LoginSignupButton = dynamic(
  () => import('../../libs/components/login-signup-button/login-signup-button'),
  { ssr: false, suspense: true }
);

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

  return (
    <>
      <PageSEOMeta title="Login" metaTitle="Login" />
      <MainLayout>
        <Flex
          direction="column"
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
          pt="24"
        >
          <Text as="h1" variant="h1" pb="2">
            Welcome Back!
          </Text>
          <Text
            as="h2"
            variant="h3"
            color="gray.600"
            pb={12}
            width={{ base: '80%', md: '60%' }}
            textAlign="center"
          >
            Let&apos;s see what your city looks like today.
          </Text>
          <Card boxProps={{ boxShadow: 'none' }}>
            <Flex direction="column" alignItems="center">
              <Suspense fallback={<Box minHeight="100px" width="200px" />}>
                <LoginSignupButton
                  labelType="login"
                  navigateTo={loginSignupNavigateTo(navigateTo)}
                />
              </Suspense>
            </Flex>
          </Card>
          <Link href="/signup">
            <Text variant="disclaimer" textAlign="center">
              Don&apos;t have an account yet? Sign up.
            </Text>
          </Link>
        </Flex>
      </MainLayout>
    </>
  );
};

export default Signup;
