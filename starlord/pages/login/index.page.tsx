import { Suspense } from 'react';

import { useColorModeValue, useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Card } from '@todocity/ui/components/card/card';
import { Link } from '@todocity/ui/core';
import { Box, Flex, Text } from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';
const LoginSignupButton = dynamic(
  () =>
    import(
      '../../libs/data/auth/components/login-signup-button/login-signup-button'
    ),
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

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { sizes } = useTheme();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

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
            Welcome back!
          </Text>
          <Text
            as="h2"
            variant="h3"
            color={secondaryTextColor}
            pb={12}
            width={{ base: '60%', sm: '40%', lg: '25%' }}
            textAlign="center"
          >
            Let&apos;s crush another todo list 🎯
          </Text>
          <Card
            boxProps={{ boxShadow: 'none', mb: 4, minWidth: { sm: '415px' } }}
          >
            <Flex direction="column" alignItems="center">
              <Suspense fallback={<Box minHeight="100px" width="200px" />}>
                <LoginSignupButton
                  labelType="login"
                  navigateTo={loginSignupNavigateTo(navigateTo)}
                />
              </Suspense>
              <Text
                variant="disclaimer"
                width={{ base: '80%', sm: '65%' }}
                textAlign="center"
              >
                We missed you while you were gone.
              </Text>
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

export default LoginPage;
