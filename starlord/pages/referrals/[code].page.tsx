import { Suspense, useEffect } from 'react';

import { useTheme } from '@chakra-ui/react';
import { getLocalStorage } from 'libs/utils/global/get-local-storage';
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

const ReferralSignupPage: NextPage = () => {
  const router = useRouter();
  const { sizes } = useTheme();

  const { code } = router.query;
  const referralCode = Array.isArray(code) ? code[0] : code;

  useEffect(() => {
    getLocalStorage()?.setItem('@todocity:referral-code', referralCode);
  }, [referralCode]);

  return (
    <>
      <PageSEOMeta title="Signup" metaTitle="Signup" />
      <MainLayout>
        <Flex
          direction="column"
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
          pt="24"
        >
          <Text as="h1" variant="h1" pb="2">
            Welcome to TodoCity!
          </Text>
          <Text
            as="h2"
            variant="h3"
            color="gray.600"
            pb={12}
            width={{ base: '80%', md: '60%' }}
            textAlign="center"
          >
            You came from a referral! By signing up today,{' '}
            <b>
              <u>you and the referrer will get 1 mo free!</u>
            </b>
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
      </MainLayout>
    </>
  );
};

export default ReferralSignupPage;
