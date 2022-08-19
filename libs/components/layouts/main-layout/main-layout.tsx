import React from 'react';

import { useColorMode } from '@chakra-ui/react';

import { Box, Grid } from '@todocity/ui/core';

import { Header } from '../header/header';

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
      <Box zIndex="docked" position="relative">
        <Grid gridTemplateColumns="repeat(1fr, 12)" gridTemplateRows="auto">
          <Box gridColumn="1 / span 12">
            <Header />
          </Box>
          <Box gridColumn="1 / span 12">{children}</Box>
          <Box gridColumn="1 / span 12">
            <Box p={2} bg="gray.900" borderTop="1px" color="gray.600">
              Footer
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};
