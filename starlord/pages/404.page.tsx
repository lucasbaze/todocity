import { useTheme } from '@chakra-ui/react';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Container } from '@todocity/ui/core';
import { Box, Heading, Text } from '@todocity/ui/core';

export function NotFound() {
  const { sizes } = useTheme();

  return (
    <MainLayout>
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight={`calc(100vh - ${sizes.header})`}
        zIndex="15"
      >
        <Heading>404 | Page Not Found</Heading>
        <Box>
          <Text>The slothians may have deleted this page.</Text>
        </Box>
        <Box>
          <Text>If you think this was an error please contact support</Text>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default NotFound;
