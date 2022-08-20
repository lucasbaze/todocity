import { Suspense } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Card } from '@todocity/ui/components/card/card';
import { Box, Flex, Text } from '@todocity/ui/core';
const LoginSignupButton = dynamic(
  () => import('../../libs/components/buttons/login-signup-button'),
  { ssr: false, suspense: true }
);

const Signup: NextPage = () => {
  const { sizes } = useTheme();
  return (
    <main>
      <MainLayout>
        <Flex
          direction="column"
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
          pt="24"
        >
          <Text as="h1" variant="h1" pb="2">
            Create your new Todo City!
          </Text>
          <Text
            as="h2"
            variant="h3"
            color="gray.600"
            pb={12}
            width={{ base: '80%', md: '50%' }}
            textAlign="center"
          >
            As the cheif city planner, you are responsible for your city&apos;s
            success.
          </Text>
          <Card>
            <Flex direction="column" alignItems="center">
              <Suspense fallback={<Box minHeight="100px" width="200px" />}>
                <LoginSignupButton />
              </Suspense>
              <Text variant="disclaimer" width="60%" textAlign="center">
                By doing so you agree to our terms of service and privacy policy
              </Text>
            </Flex>
          </Card>
        </Flex>
      </MainLayout>
    </main>
  );
};

export default Signup;
