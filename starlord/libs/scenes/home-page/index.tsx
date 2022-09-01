import { Suspense, useContext, useEffect, useRef } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  ContactShadows,
  Html,
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
  PresentationControls,
  useContextBridge,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { ProjectModel } from 'libs/game/components/project-model/project-model';
import { BasePrimitiveModel } from 'libs/game/models/base-primitive-model/base-primitive-model';
import { Group } from 'three';

import { ThreeDLoader } from '@todocity/components/three-d-loader/three-d-loader';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';
import { RectAreaLight } from '@todocity/three/lights/rect-area-light';

export function NightLights() {
  return (
    <>
      <directionalLight
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, 10, 0]}
        intensity={0.5}
      />
      <ambientLight intensity={0.05} />
      <group>
        <RectAreaLight
          threeProps={{
            args: ['orange', 1, 2.5, 1.2],
            position: [0, 0, 1.5],
            rotation: [Math.PI / 4, 0, 0],
          }}
        />
        <RectAreaLight
          threeProps={{
            args: ['orange', 1, 2.5, 1.2],
            position: [0, 0, -1.5],
            rotation: [(3 * Math.PI) / 4, 0, 0],
          }}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]}>
        <RectAreaLight
          threeProps={{
            args: ['orange', 1, 2.5, 1.2],
            position: [0, 0, 1.5],
            rotation: [Math.PI / 4, 0, 0],
          }}
        />
        <RectAreaLight
          threeProps={{
            args: ['orange', 1, 2.5, 1.2],
            position: [0, 0, -1.5],
            rotation: [(3 * Math.PI) / 4, 0, 0],
          }}
        />
      </group>
    </>
  );
}

export function DayLights() {
  return (
    <>
      <AmbientLight threeProps={{ args: ['white', 0.6] }} />
      <DirectionalLight
        threeProps={{
          args: ['white', 1],
          position: [7, 10, 0],
        }}
      />
      <PointLight
        threeProps={{ args: ['white', 3, 0.5, 1], position: [2, 2, 2] }}
      />
    </>
  );
}

export function HomePageModel(props: any) {
  const { camera } = useThree();
  const orbitControlsRef = useRef(null);
  const ref = useRef<Group>(null!);
  const { colorMode } = useContext(ColorModeContext);
  useFrame((state, delta) => {
    ref.current.rotateY(delta / 4);
  });

  useEffect(() => {
    // Bad practice, but I just wanted to get this to work
    camera.lookAt(-0.03, 0.16, -0.088);
  }, [camera]);

  const getCamera = () => {
    console.log('position: ', camera.position);
    console.log('target: ', orbitControlsRef.current.target);
  };

  return (
    <>
      <group ref={ref} {...props} dispose={null}>
        {/* <Html>
          <button onClick={getCamera}>getCamera</button>
        </Html> */}
        <PresentationControls
          config={{ mass: 10, tension: 0, friction: 1 }}
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          cursor
          speed={2}
        >
          <group rotation={[0, 0, 0]} scale={0.4}>
            <ProjectModel
              count={0}
              fixed
              objectModel={
                <BasePrimitiveModel
                  modelName="Home Page Model"
                  url="./static/models/main_house.glb"
                  scale={0.2}
                />
              }
            />
          </group>
        </PresentationControls>
      </group>
      {colorMode === 'light' ? <DayLights /> : <NightLights />}
      {/* <gridHelper /> */}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.75}
        scale={2}
        blur={2.5}
        far={4}
      />
      {/* <OrbitControls ref={orbitControlsRef} target={[-0.03, 0.16, -0.088]} /> */}
    </>
  );
}

export function HomeScene() {
  const frustrum = 500;
  const ContextBridge = useContextBridge(ColorModeContext);
  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);

  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        left={(frustrum * 1.6) / -2}
        right={(frustrum * 1.6) / 2}
        top={frustrum / 2}
        bottom={frustrum / -2}
        near={1}
        far={1000}
        zoom={270}
        position={[3, 2.3, 2.8]}
      />
      <ContextBridge>
        <Suspense
          fallback={
            <Html>
              <ThreeDLoader />
            </Html>
          }
        >
          <HomePageModel />
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}

// Required for lazy loading
export default HomeScene;
