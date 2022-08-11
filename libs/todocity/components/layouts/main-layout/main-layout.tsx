import React from 'react';

import { Box, Container, useColorMode } from '@chakra-ui/react';

import { Header } from '@todocity/components';

import styles from './main-layout.module.css';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  const { colorMode } = useColorMode();
  return (
    <>
      {colorMode === 'dark' && (
        <>
          <div className={styles.stars}></div>
          <div className={styles.twinkling}></div>
        </>
      )}
      <Box height="100vh" zIndex="docked" position="relative">
        <Container display="flex" flexDirection="column" height="100%">
          <Header />
          {children}
        </Container>
        <Box
          p={2}
          bg="gray.900"
          borderTop="1px"
          color="gray.600"
          position="relative"
        >
          Footer
        </Box>
      </Box>
    </>
  );
};
