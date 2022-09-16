import { Suspense, useContext } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  useContextBridge,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { levaStore as defaultLevaStore, useControls } from 'leva';

import { useEditModeStore } from '@todocity/stores/editModeStore';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';
import { ThreeDLoader } from '@todocity/ui/components/three-d-loader/three-d-loader';

import { ProjectModel } from './components/project-model/project-model';
import { BasePrimitiveModel } from './models/base-primitive-model/base-primitive-model';

function Scene() {
  const { colorMode } = useContext(ColorModeContext);
  const { showGrid, showLights } = useControls(
    'Scene',
    {
      showGrid: false,
      showLights: false,
    },
    {
      store: defaultLevaStore,
    }
  );

  return (
    <>
      {showGrid && <gridHelper />}
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        enablePan={false}
        maxDistance={35}
        minDistance={15}
      />
      <BasePrimitiveModel
        modelName="Floating Rock"
        url="./static/models/floating_mountain.glb"
        scale={13}
        castShadow={false}
      />
      <ProjectModel
        count={1}
        objectModel={
          <BasePrimitiveModel
            modelName="Boring House"
            url="./static/models/house_boring.glb"
          />
        }
        position={[-5, 0, 6]}
      />
      <ProjectModel
        count={1}
        objectModel={
          <BasePrimitiveModel
            modelName="Modern House"
            url="./static/models/main_house.glb"
          />
        }
        position={[7, 0, 2]}
      />
      <ProjectModel
        count={2}
        objectModel={
          <BasePrimitiveModel
            modelName="Office Building"
            url="./static/models/office_building_4x12_trees.glb"
          />
        }
        position={[-3, 0, -3]}
      />
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

  const setLevaStoreToDisplay = useEditModeStore(
    (state) => state.setLevaStoreToDisplay
  );

  // Resets the store to be the scene store
  // Like "deselecting an object basically"
  const handleMissed = (e) => {
    setLevaStoreToDisplay(defaultLevaStore);
  };

  return (
    <Canvas shadows onPointerMissed={handleMissed}>
      <PerspectiveCamera makeDefault position={[12, 12, 20]} fov={60} />
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
