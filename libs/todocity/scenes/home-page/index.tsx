import { Suspense, useContext, useEffect, useRef } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  ContactShadows,
  Environment,
  PresentationControls,
  useContextBridge,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';

import { RectAreaLight } from '@todocity/components/lights/rectAreaLight';

export function HomePageModel(props: any) {
  const { camera } = useThree();
  const ref = useRef<Group>(null!);
  const { colorMode } = useContext(ColorModeContext);
  const gltf = useGLTF('./static/models/main_house.glb');
  useFrame((state, delta) => ref.current.rotateY(delta / 4));

  useEffect(() => {
    // Bad practice, but I just wanted to get this to work
    camera.lookAt(0, 1, 0);
  }, []);

  return (
    <>
      <PresentationControls
        global={true}
        config={{ mass: 10, tension: 0, friction: 1 }}
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        cursor
        speed={2}
      >
        <group ref={ref} {...props} dispose={null}>
          <group rotation={[0, 0, 0]} scale={0.4}>
            <primitive object={gltf.scene} />
          </group>
        </group>
      </PresentationControls>
      {colorMode === 'dark' ? (
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
      ) : (
        <Environment preset="forest" />
      )}
      <axesHelper />
      {/* <gridHelper /> */}
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

export function HomeScene() {
  const ContextBridge = useContextBridge(ColorModeContext);

  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);
  return (
    <Canvas camera={{ position: [7, 10, 10], fov: 30 }}>
      <ContextBridge>
        <Suspense fallback={null}>
          <HomePageModel />
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}

// Required for lazy loading
export default HomeScene;
