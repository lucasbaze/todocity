import { Suspense, useContext, useEffect, useState } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import { useFirestoreQueryData } from '@react-query-firebase/firestore';
import {
  Html,
  OrbitControls,
  PerformanceMonitor,
  PerspectiveCamera,
  Sky,
  Stars,
  useContextBridge,
} from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { FogExp2 } from 'three';

import { useAuth } from '@todocity/auth';
import { lotsRef, projectsQueryRef } from '@todocity/data/db';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';
import { ThreeDLoader } from '@todocity/ui/components/three-d-loader/three-d-loader';
import { getWindow } from '@todocity/utils/global/get-window';

import { Lot } from './components/lot/lot';
import { PackageManager } from './components/package-manager/package-manager';
import { ScaleAnimation } from './hocs/scale-animation';
import { Toast } from './hocs/toast';
import { BasePrimitiveModel } from './models/base-primitive-model/base-primitive-model';

function Scene({ lots, projects }) {
  const { scene } = useThree();
  const { colorMode } = useContext(ColorModeContext);
  const lotPreview = useLotsManagerStore((state) => state.lotPreview);

  useEffect(() => {
    // Attach Fog
    if (colorMode === 'light') {
      scene.fog = new FogExp2(0xdfe9f3, 0.002);
    } else {
      scene.fog = null;
    }
  }, [colorMode]);

  return (
    <>
      {/* <Stats /> */}
      {/* {showGrid && <gridHelper />} */}
      <OrbitControls
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={0}
        enablePan={false}
        maxDistance={55}
        minDistance={15}
      />

      {/* Package Manager */}
      <PackageManager />

      {/* Ground */}
      <BasePrimitiveModel
        modelName="Floating Rock"
        url="./static/models/floating_mountain.glb"
        scale={16}
        castShadow={false}
      />

      {/* Far away ground */}
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[0, -20, -500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[500, 0, -500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[500, -20, 0]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[500, 0, 500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[0, 10, 500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[-500, 5, 500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[-500, 0, -500]}
        />
      </Toast>
      <Toast>
        <BasePrimitiveModel
          modelName="Floating Rock"
          url="./static/models/floating_mountain.glb"
          scale={16}
          castShadow={false}
          position={[-500, -20, 0]}
        />
      </Toast>

      {/* Lots */}

      {lots.map((lot) => (
        <Lot
          key={lot.id}
          lot={lot}
          projects={projects}
          preview={
            lotPreview && lotPreview.lotId === lot.id ? lotPreview : null
          }
        />
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
  const [dpr, setDpr] = useState(1.5);
  // https://github.com/pmndrs/drei#usecontextbridge
  const ContextBridge = useContextBridge(
    ColorModeContext,
    // docs/react-query.md
    getWindow()?.ReactQueryClientContext
  );

  const { user } = useAuth();
  const userLotsQuery = useFirestoreQueryData(
    ['lots', user.uid],
    lotsRef(user.uid),
    { subscribe: true }
  );

  const userProjectsQuery = useFirestoreQueryData(
    ['projects', user.uid],
    projectsQueryRef(user.uid),
    { subscribe: true }
  );

  // const setLevaStoreToDisplay = useEditModeStore(
  //   (state) => state.setLevaStoreToDisplay
  // );

  // // Resets the store to be the scene store
  // // Like "deselecting an object basically"
  // const handleMissed = (e) => {
  //   setLevaStoreToDisplay(defaultLevaStore);
  // };

  return (
    <Canvas shadows frameloop="demand" dpr={dpr}>
      {/* <Canvas shadows onPointerMissed={handleMissed} frameloop="demand" dpr={dpr}> */}
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      />
      <PerspectiveCamera makeDefault position={[25, 10, 25]} fov={60} />
      <ContextBridge>
        <Suspense
          fallback={
            <Html>
              <ThreeDLoader />
            </Html>
          }
        >
          <Scene
            lots={userLotsQuery.data || []}
            projects={userProjectsQuery.data || []}
          />
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}
