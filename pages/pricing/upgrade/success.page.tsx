import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { MainLayout } from '@todocity/components';
import { Container } from '@todocity/ui';

const UpgradeSuccess: NextPage = () => {
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container
        display="grid"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
      >
        Payment Success!!
      </Container>
    </MainLayout>
  );
};

export default UpgradeSuccess;
