import { Suspense, useContext, useEffect, useRef } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  Html,
  OrbitControls,
  Sky,
  Stars,
  useContextBridge,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { levaStore as defaultLevaStore, useControls } from 'leva';

import { ThreeDLoader } from '@todocity/components/three-d-loader/three-d-loader';
import { useEditModeStore } from '@todocity/stores/editModeStore';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';

import { BaseModel } from './models/base-model';

function Scene() {
  const { colorMode } = useContext(ColorModeContext);
  const levaStore = useEditModeStore((state) => state.levaStoreToDisplay);
  const { showGrid, showLights } = useControls(
    'Scene',
    {
      showGrid: false,
      showLights: false,
    },
    {
      store:
        levaStore?.getVisiblePaths !== undefined ? levaStore : defaultLevaStore,
    }
  );
  return (
    <>
      {showGrid && <gridHelper />}
      <BaseModel
        modelName="Floating Rock"
        url="./static/models/floating_mountain.glb"
        scale={3.2}
        castShadow={false}
      />
      <BaseModel
        modelName="Boring House"
        url="./static/models/house_boring.glb"
        position={[-1, 0, 1.3]}
        scale={0.27}
        receiveShadow={false}
      />
      <BaseModel
        modelName="Modern House"
        url="./static/models/main_house.glb"
        position={[2, 0, 0.3]}
        scale={0.26}
        receiveShadow={false}
      />
      <OrbitControls />
      <AmbientLight threeProps={{ args: ['white', 0.5] }} />
      {colorMode === 'light' ? (
        <>
          <DirectionalLight
            threeProps={{
              args: ['yellow', 0.3],
              position: [4, 5, 4],
              castShadow: true,
            }}
            useHelper={showLights}
          />
          <PointLight
            threeProps={{ args: ['white', 3, 0.5, 1], position: [-1, 2, 4] }}
            useHelper={showLights}
          />
          <PointLight
            threeProps={{ args: ['white', 3, 0.5, 1], position: [-2, 2, -2] }}
            useHelper={showLights}
          />
          <Sky
            distance={450}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
        </>
      ) : (
        <Stars
          radius={10}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      )}
    </>
  );
}

export function CityScene() {
  // https://github.com/pmndrs/drei#usecontextbridge
  const ContextBridge = useContextBridge(ColorModeContext);

  return (
    <Canvas
      camera={{ position: [7, 6, 10], fov: 30, castShadow: true }}
      shadows
    >
      <ContextBridge>
        <Suspense
          fallback={
            <Html>
              <ThreeDLoader />
            </Html>
          }
        >
          <Scene />
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}
