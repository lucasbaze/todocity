import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Leva } from 'leva';
import type { AppProps } from 'next/app';

import { GoogleTagManager } from '@todocity/analytics';
import { SEOMetaTags } from '@todocity/components';
import { useLevaStore } from '@todocity/store';
import { theme } from '@todocity/theme';

function TodoCity({ Component, pageProps }: AppProps) {
  const levaHidden = useLevaStore((state) => state.hidden);
  return (
    <>
      <SEOMetaTags />
      <GoogleTagManager />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <Leva hidden={levaHidden} />
      </ChakraProvider>
    </>
  );
}

export default TodoCity;
