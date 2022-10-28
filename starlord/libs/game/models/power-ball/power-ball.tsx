import { useEffect, useRef } from 'react';

import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, Group, Mesh, Sprite, SpriteMaterial } from 'three';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';

/**
 * Floating ball that will spin around the Y axis and oscilate up and down. Unused
 * @returns
 */
export function PowerBall({ position }) {
  const yPosition = useRef(0);
  // const powerLevel = useLotsManagerStore((state) => state.powerLevel);
  const pointRef = useRef<Group>(null);
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture('./static/textures/glow.png');

  useFrame(() => {
    // pointRef.current.rotation.y += powerLevel * 0.01;
    pointRef.current.position.y = Math.sin(yPosition.current);
    yPosition.current += 0.02;
  });

  useEffect(() => {
    let spriteMaterial = new SpriteMaterial({
      map: texture,
      color: '#82CB48',
      opacity: 0.1,
      transparent: true,
      blending: AdditiveBlending,
    });
    let sprite = new Sprite(spriteMaterial);
    sprite.scale.set(1.5, 1.5, 1.0);
    meshRef.current.add(sprite);
  }, []);

  return (
    <group ref={pointRef} position={[0, 0, 0]}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 20, 20]} />
        <meshStandardMaterial color="0000ff" />
      </mesh>
    </group>
  );
}
