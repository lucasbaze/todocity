import { MenuManager } from '@todocity/features/menu-manager/menu-manager';
import { Box } from '@todocity/ui/core';

import { CityScene } from './city-scene';
import { LevaContext } from './components/leva/leva';
import { Toolbar } from './toolbar/toolbar';

export const Game = () => {
  return (
    <>
      <LevaContext />
      <Box height="100vh" width="100vw">
        {/* Game Overlay */}
        <Toolbar />
        <MenuManager />
        {/* Game */}
        <CityScene />
      </Box>
    </>
  );
};
