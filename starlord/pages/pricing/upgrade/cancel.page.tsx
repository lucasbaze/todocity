import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Container } from '@todocity/ui/core';

const UpgradeCancelPage: NextPage = () => {
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container
        display="grid"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
      >
        Payment Cancelled
      </Container>
    </MainLayout>
  );
};

export default UpgradeCancelPage;
