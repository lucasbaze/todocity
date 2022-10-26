import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { QueryClientProvider } from 'react-query';

import { GoogleTagManager } from '@todocity/analytics/google-scripts/google-tag-manager';
import { queryClient } from '@todocity/data/config/react-query';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { theme } from '@todocity/theme';

const AuthListener = dynamic(
  () => import('../libs/data/auth/components/auth-listener'),
  {
    ssr: false,
    suspense: true,
  }
);

function TodoCity({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageSEOMeta />
      <GoogleTagManager />
      <AuthListener />
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default TodoCity;
