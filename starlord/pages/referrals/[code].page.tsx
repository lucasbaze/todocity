import { Suspense, useEffect } from 'react';

import { useColorModeValue, useTheme } from '@chakra-ui/react';
import { getLocalStorage } from 'libs/utils/global/get-local-storage';
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

const ReferralSignupPage: NextPage = () => {
  const router = useRouter();
  const { sizes } = useTheme();
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  const { code } = router.query;
  const referralCode = Array.isArray(code) ? code[0] : code;

  useEffect(() => {
    getLocalStorage()?.setItem('@todocity:referral-code', referralCode);
  }, [referralCode]);

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
              Welcome to TodoCity!
            </Text>
            <Text
              as="h2"
              variant="h3"
              color={secondaryTextColor}
              pb={12}
              width={{ base: '80%', md: '40%' }}
              textAlign="center"
            >
              Sign up today and you and your referral will get 1 mo free 💰!
            </Text>
            <Card boxProps={{ boxShadow: 'none', mb: 4 }}>
              <Flex direction="column" alignItems="center">
                <Suspense fallback={<Box minHeight="100px" width="200px" />}>
                  <LoginSignupButton />
                </Suspense>
                <Text variant="disclaimer" width="60%" textAlign="center">
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
            <Link href="/">
              <Text variant="disclaimer" textAlign="center">
                Not ready yet? Learn more.
              </Text>
            </Link>
          </Flex>
        </Container>
      </MainLayout>
    </>
  );
};

export default ReferralSignupPage;
