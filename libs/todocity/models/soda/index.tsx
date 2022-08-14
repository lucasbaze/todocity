import { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export function Soda(props: any) {
  const ref = useRef<Group>(null!);
  const gltf = useGLTF('./static/models/rocket/scene.gltf');
  useFrame((state, delta) => (ref.current.rotation.y += delta / 4));
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={gltf.nodes.Object_2.geometry}
          material={gltf.materials.Texture}
          material-envMapIntensity={0}
        />
      </group>
    </group>
  );
}
