import { useEffect, useRef } from 'react';

import { useColorMode } from '@chakra-ui/react';
import { PresentationControls, useGLTF } from '@react-three/drei';
import { ContactShadows, Environment } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';

import { RectAreaLight } from '@todocity/components';

export function HomePageModel(props: any) {
  const { camera } = useThree();
  const ref = useRef<Group>(null!);
  const { colorMode } = useColorMode();
  const gltf = useGLTF('./static/models/main_house.glb');
  // useFrame((state, delta) => ref.current.rotateY(delta / 4));

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
            position: [1.5, 0, 0],
            rotation: [0, 0, 0],
          }}
          useHelper
        />
        {/* {colorMode === 'dark' && (
          <>
          </>
        )} */}
      </PresentationControls>
      <gridHelper />
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
