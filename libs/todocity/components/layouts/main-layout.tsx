import React from 'react';

import { Box, Container, useColorMode } from '@chakra-ui/react';

import { Header } from '@todocity/components';
export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box height="100vh" bg={colorMode === 'dark' ? 'gray.900' : 'orange.50'}>
        <Container display="flex" flexDirection="column" height="100%">
          <Header />
          {children}
        </Container>
      </Box>
      <Box p={2} bg="gray.900" borderTop="1px" color="gray.600">
        Footer
      </Box>
    </>
  );
};
