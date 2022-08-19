import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { GoogleTagManager } from '@todocity/analytics/google-scripts/google-tag-manager';
import { SEOMetaTags } from '@todocity/components/seo-meta-tags/seo-meta-tags';
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
