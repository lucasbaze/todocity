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

const textCopy = (navigateTo: string | undefined) => {
  switch (navigateTo) {
    case 'checkout':
      return {
        title: "Let's construct your Metropolis!",
        description: 'Please first create an account to pre-order.',
      };
    default:
      return {
        title: 'Welcome to TodoCity!',
        description: (
          <>
            You came from a referral! By signing up today,{' '}
            <b>
              <u>you and the referrer will get 1 mo free!</u>
            </b>
          </>
        ),
      };
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
        <Flex
          direction="column"
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
          pt="24"
        >
          <Text as="h1" variant="h1" pb="2">
            {title}
          </Text>
          <Text
            as="h2"
            variant="h3"
            color="gray.600"
            pb={12}
            width={{ base: '80%', md: '60%' }}
            textAlign="center"
          >
            {description}
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

export default Signup;

{
  /* <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={`calc(100vh - ${sizes.header})`}
      >
        <Heading mb="2">Welcome to TodoCity!</Heading>
        <Text
          variant="bodyBig"
          mb={12}
          maxWidth={{ md: '500px' }}
          textAlign="center"
        >
          Looks like you came from a referral! By signing up today,{' '}
          <b>
            <u>you and the referrer will get 1 mo free!</u>
          </b>
        </Text>
        <Flex flexDirection={{ base: 'column' }} alignItems="center" gap={3}>
          <Link href="/signup">
            <AnalButton
              size="lg"
              variant="primary"
              analytics={{ buttonName: 'referrals-sign-up' }}
            >
              Get 1 mo free now!
            </AnalButton>
          </Link>
          <Link href="/">
            <AnalButton
              size="md"
              variant="link"
              width="150px"
              analytics={{ buttonName: 'referrals-learn-more' }}
            >
              Learn More
            </AnalButton>
          </Link>
        </Flex>
      </Container> */
}
