import { MapControls, Sky, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Box } from '@todocity/ui';

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
        <Canvas camera={{ position: [20, 20, 20] }}>
          <ambientLight />
          <Sphere />
          <MapControls />
          <Sky />
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <circleBufferGeometry args={[200, 200]} />
            <meshStandardMaterial attach="material" color="green" />
          </mesh>
        </Canvas>
      </Box>
    </>
  );
};
