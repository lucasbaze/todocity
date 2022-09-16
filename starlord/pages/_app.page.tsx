import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GoogleTagManager } from '@todocity/analytics/google-scripts/google-tag-manager';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { theme } from '@todocity/theme';

const AuthListener = dynamic(
  () => import('../libs/data/auth/components/auth-listener'),
  {
    ssr: false,
    suspense: true,
  }
);

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

function TodoCity({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageSEOMeta />
      <GoogleTagManager />
      <AuthListener />
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default TodoCity;
