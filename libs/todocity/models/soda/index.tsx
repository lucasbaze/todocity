import { useState, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';
import { Group } from 'three';

export function Soda(props) {
  const ref = useRef<Group>(null!);
  const gltf = useGLTF(
    'https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/soda-bottle/model.gltf'
  );
  useFrame((state, delta) => (ref.current.rotation.y += delta));
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={gltf.nodes.Mesh_sodaBottle.geometry}>
        <meshStandardMaterial
          color={'green'}
          roughness={0}
          metalness={0.8}
          envMapIntensity={2}
        />
      </mesh>
      <mesh
        geometry={gltf.nodes.Mesh_sodaBottle_1.geometry}
        material={gltf.materials.red}
        material-envMapIntensity={0}
      />
    </group>
  );
}
