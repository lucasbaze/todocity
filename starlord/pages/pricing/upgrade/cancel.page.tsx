import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { WithAuth } from '@todocity/auth';
import { PreOrderButton } from '@todocity/features/pre-order-button/pre-order-button';
import { Container, Flex, Text } from '@todocity/ui/core';
import { MainLayout } from '@todocity/ui/layout/main-layout/main-layout';

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
