import React from 'react';

import { useColorModeValue } from '@chakra-ui/react';

import { Box, Grid } from '@todocity/ui/core';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import styles from './main-layout.module.css';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  const showStars = useColorModeValue(
    null,
    <>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
    </>
  );

  return (
    <>
      {showStars}
      <Box zIndex="docked" position="relative">
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          gridTemplateRows="auto"
          position="relative"
        >
          <Box gridColumn="1 / span 12" position="sticky" top="0">
            <Header />
          </Box>
          <Box gridColumn="1 / span 12">{children}</Box>
          <Box gridColumn="1 / span 12">
            <Footer />
          </Box>
        </Grid>
      </Box>
    </>
  );
};
