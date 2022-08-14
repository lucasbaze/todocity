import { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, Matrix4 } from 'three';

export function Soda(props: any) {
  const ref = useRef<Group>(null!);
  const gltf = useGLTF('./static/models/main_house.glb');
  useFrame((state, delta) => ref.current.rotateY(delta / 4));

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[0, 0, 0]} scale={0.4}>
        <primitive object={gltf.scene} />
      </group>
    </group>
  );
}
