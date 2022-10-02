import { Suspense, useContext } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  Stars,
  Stats,
  useContextBridge,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { levaStore as defaultLevaStore, useControls } from 'leva';
import { ScaleAnimation } from 'libs/game/hocs/scale-animation';

import { useEditModeStore } from '@todocity/stores/edit-mode-store';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';
import { ThreeDLoader } from '@todocity/ui/components/three-d-loader/three-d-loader';

import { Lot } from './components/lot/lot';
import { BasePrimitiveModel } from './models/base-primitive-model/base-primitive-model';

function Scene() {
  const lots = useLotsManagerStore((state) => state.lots);
  const { colorMode } = useContext(ColorModeContext);

  return (
    <>
      {/* <Stats /> */}
      {/* {showGrid && <gridHelper />} */}
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        enablePan={false}
        maxDistance={45}
        minDistance={15}
      />

      {/* Ground */}
      <BasePrimitiveModel
        modelName="Floating Rock"
        url="./static/models/floating_mountain.glb"
        scale={16}
        castShadow={false}
      />

      {/* Lots */}
      {lots.map((lot) => (
        <Lot key={lot.id} {...lot} />
      ))}

      {/* <ScaleAnimation>
					<BasePrimitiveModel
						modelName="Tree Curve"
						url="./static/models/egg.glb"
						position={[0, 0, 0]}
						rotation={[0, 0.0, 0]}
						scale={0.01}
					/>
				</ScaleAnimation> */}
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Tree Curve"
          url="./static/models/tree_curve.glb"
          position={[0, 0, -14]}
          rotation={[0, 0.1, 0]}
        />
      </ScaleAnimation>
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Tree Curve"
          url="./static/models/tree_curve.glb"
          position={[12, 0, -8]}
          rotation={[0, -1, 0]}
        />
      </ScaleAnimation>
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Tree Curve"
          url="./static/models/tree_curve.glb"
          position={[-12, 0, -8]}
          rotation={[0, 1, 0]}
        />
      </ScaleAnimation>
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Tree Curve"
          url="./static/models/tree_curve.glb"
          position={[-13, 0, 6]}
          rotation={[0, Math.PI / 1.5, 0]}
        />
      </ScaleAnimation>

      {/* Fences */}
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Fence"
          url="./static/models/long_fence.glb"
          position={[-3.6, 0, 14.8]}
          rotation={[0, -0.2, 0]}
        />
      </ScaleAnimation>
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Fence"
          url="./static/models/long_fence.glb"
          position={[6.4, 0, 14]}
          rotation={[0, 0.5, 0]}
        />
      </ScaleAnimation>
      <ScaleAnimation>
        <BasePrimitiveModel
          modelName="Fence"
          url="./static/models/long_fence.glb"
          position={[-13.2, 0, 7.6]}
          rotation={[0, -1, 0]}
        />
      </ScaleAnimation>

      {/* Lighting */}
      <AmbientLight threeProps={{ args: ['white', 0.5] }} />
      {colorMode === 'light' ? (
        <>
          <DirectionalLight
            threeProps={{
              args: ['yellow', 0.3],
              position: [4, 5, 4],
              castShadow: true,
            }}
            // useHelper={showLights}
          />
          <PointLight
            threeProps={{ args: ['white', 3, 0.5, 1], position: [-1, 2, 4] }}
            // useHelper={showLights}
          />
          <PointLight
            threeProps={{ args: ['white', 3, 0.5, 1], position: [-2, 2, -2] }}
            // useHelper={showLights}
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
      <PerspectiveCamera makeDefault position={[20, 20, 20]} fov={60} />
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
