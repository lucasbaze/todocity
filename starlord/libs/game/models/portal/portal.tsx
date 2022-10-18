import { useRef, useState } from 'react';

import { Torus, useCursor, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';

/**
 * Portal in the sky. Unused at the moment
 * @returns portal
 */
export function Portal() {
  const groupRef = useRef<Mesh>(null);
  const torusOneRef = useRef<Mesh>(null);
  const torusTwoRef = useRef<Mesh>(null);
  const [hovering, setHovering] = useState(false);
  const texture = useTexture('./static/textures/portal.jpeg');
  useFrame((state, delta) => {
    groupRef.current.rotation.z += 0.01;
    torusOneRef.current.rotation.y += 0.01;
    torusOneRef.current.rotation.x -= 0.01;
    torusTwoRef.current.rotation.x += 0.01;
    torusTwoRef.current.rotation.y -= 0.01;
  });

  useCursor(hovering);

  return (
    <group
      position={[-300, 80, -900]}
      rotation={[0, 0.5, 0]}
      onPointerEnter={(e) => {
        setHovering(true);
      }}
      onPointerOut={(e) => {
        setHovering(false);
      }}
    >
      <mesh ref={groupRef}>
        <meshStandardMaterial attach="material" map={texture} />
        <circleBufferGeometry args={[20, 30]} />
      </mesh>
      <Torus ref={torusOneRef} args={[25, 1, 40, 40]}>
        <meshStandardMaterial color="black" />
      </Torus>
      <Torus ref={torusTwoRef} args={[22, 1, 40, 40]}>
        <meshStandardMaterial color="black" />
      </Torus>
    </group>
  );
}
