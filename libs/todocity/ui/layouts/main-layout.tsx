import React from 'react';
import { Box, Container, useColorMode } from '@chakra-ui/react';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box height="100vh" bg={colorMode === 'dark' ? 'gray.900' : 'orange.50'}>
      <Container display="flex" flexDirection="column" height="100%">
        {children}
      </Container>
    </Box>
  );
};
