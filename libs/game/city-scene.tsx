import { Suspense, useContext, useEffect, useRef } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  ContactShadows,
  Html,
  PresentationControls,
  useContextBridge,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
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
  const ref = useRef<Group>(null!);
  const { colorMode } = useContext(ColorModeContext);
  const { area } = useControls('grid', {
    area: {
      value: 10,
      step: 1,
    },
  });
  const { scale, position } = useControls('house', {
    scale: {
      value: 0.4,
      step: 0.05,
    },
    position: {
      value: [0, 0, 0],
      joystick: false,
    },
  });
  console.log('Area: ', area);
  const gltf = useGLTF('./static/models/main_house.glb');
  useFrame((state, delta) => ref.current.rotateY(delta / 4));

  useEffect(() => {
    // Bad practice, but I just wanted to get this to work
    // This "positions" the object down as the camera looks slightly up
    camera.lookAt(0, 1, 0);
  }, []);

  return (
    <>
      <PresentationControls
        config={{ mass: 10, tension: 0, friction: 1 }}
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        cursor
        speed={2}
      >
        <group ref={ref} {...props} dispose={null} position={position}>
          <group rotation={[0, 0, 0]} scale={scale}>
            <primitive object={gltf.scene} />
          </group>
        </group>
      </PresentationControls>
      {colorMode === 'light' ? <DayLights /> : <NightLights />}
      <gridHelper args={[area, 20]} />
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

export function CityScene() {
  const ContextBridge = useContextBridge(ColorModeContext);

  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);
  return (
    <Canvas camera={{ position: [7, 10, 10], fov: 30 }}>
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
