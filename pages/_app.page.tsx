import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { GoogleTagManager } from '@todocity/analytics/google-scripts/google-tag-manager';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { theme } from '@todocity/theme';

const AuthListener = dynamic(() => import('../libs/auth/authListener'), {
  ssr: false,
  suspense: true,
});

function TodoCity({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageSEOMeta />
      <GoogleTagManager />
      <AuthListener />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default TodoCity;
