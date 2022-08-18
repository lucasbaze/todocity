import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { GoogleTagManager } from '@todocity/analytics';
import { SEOMetaTags } from '@todocity/components';
import { theme } from '@todocity/theme';

function TodoCity({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEOMetaTags />
      <GoogleTagManager />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default TodoCity;
