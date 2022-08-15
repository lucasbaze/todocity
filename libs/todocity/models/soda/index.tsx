import { useEffect, useRef } from 'react';

import { PresentationControls, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Group } from 'three';

export function Soda(props: any) {
  const { camera } = useThree();
  const ref = useRef<Group>(null!);
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
    </>
  );
}
