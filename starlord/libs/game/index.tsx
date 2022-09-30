import { MenuManager } from '@todocity/features/menu-manager/menu-manager';
import { Onboarding } from '@todocity/features/onboarding/onboarding';
import { Toolbar } from '@todocity/features/toolbar/toolbar';
import { TopBar } from '@todocity/features/topbar/topbar';
import { Box } from '@todocity/ui/core';

import { CityScene } from './city-scene';
// import { LevaContext } from './components/leva/leva';

export const Game = () => {
  return (
    <>
      {/* <LevaContext /> */}
      <Box height="100vh" width="100vw">
        {/* Game Overlay */}
        <Onboarding />
        <Toolbar />
        <TopBar />
        <MenuManager />
        {/* Game */}
        <CityScene />
      </Box>
    </>
  );
};
