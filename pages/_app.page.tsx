import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { GoogleTagManager } from '@todocity/analytics/google-scripts/google-tag-manager';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { theme } from '@todocity/theme';

function TodoCity({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageSEOMeta />
      <GoogleTagManager />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default TodoCity;
