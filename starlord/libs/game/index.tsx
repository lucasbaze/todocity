import { QueryClient, QueryClientProvider } from 'react-query';

import { Box } from '@todocity/ui/core';

import { CityScene } from './city-scene';
import { LevaContext } from './components/leva/leva';
import { Toolbar } from './toolbar/toolbar';

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

export const Game = () => {
  return (
    <>
      <LevaContext />
      <QueryClientProvider client={queryClient}>
        <Box height="100vh" width="100vw">
          {/* Game Overlay */}
          <Toolbar />
          {/* Game */}
          <CityScene />
        </Box>
      </QueryClientProvider>
    </>
  );
};
