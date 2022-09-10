import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { WithAuth } from '@todocity/auth';
import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { PreOrderButton } from '@todocity/components/pre-order-button/pre-order-button';
import { Button, Container, Flex, Link, Text } from '@todocity/ui/core';

const UpgradeCancelPage: NextPage = () => {
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          height={`calc(100vh - ${sizes.header})`}
        >
          <Text mb="2" variant="h2" fontWeight="bold">
            Decided against pre-ordering?
          </Text>
          <Text mb={6} variant="bodyBig">
            Too bad. Maybe you can pre-order later... maybe... 😬
          </Text>
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems="center"
            gap={3}
          >
            <PreOrderButton
              variant="outline"
              size="sm"
              ctaText="I've changed my mind"
            />
          </Flex>
        </Flex>
      </Container>
    </MainLayout>
  );
};

export default WithAuth(UpgradeCancelPage);
