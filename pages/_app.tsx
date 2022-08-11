import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { GoogleTagManager } from '@todocity/analytics';
import { theme } from '@todocity/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TodoCity</title>
        <meta name="description" content="A city themed todo app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoogleTagManager />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
