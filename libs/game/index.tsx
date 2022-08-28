import { MapControls, Sky, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

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
        {/* Game */}
        <CityScene />
      </Box>
    </>
  );
};
