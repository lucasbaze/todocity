import { useMemo, useRef } from 'react';

import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { BufferAttribute, MathUtils } from 'three';

// Modified from: https://www.youtube.com/watch?v=wRmeFtRkF-8
export function ExplodeWithPoints({ explode }: { explode: boolean }) {
  const bufferRef = useRef<BufferAttribute>(null);
  const imgTexture = useTexture('./static/textures/circle.png');

  let positions = useMemo(() => {
    const array = Array.from({ length: 300 }, (i) => {
      const randomFloat = MathUtils.randFloat(-0.1, 0.1);
      return randomFloat;
    });
    const floatArray = new Float32Array(array);
    return floatArray;
  }, []);

  useFrame(() => {
    if (explode) {
      const currPositions = bufferRef.current.array;
      for (let i = 0; i < currPositions.length / 3; ) {
        // @ts-ignore
        currPositions[i * 3] = currPositions[i * 3] * 1.1;
        // @ts-ignore
        currPositions[i * 3 + 1] = currPositions[i * 3 + 1] * 1.1;
        // @ts-ignore
        currPositions[i * 3 + 2] = currPositions[i * 3 + 2] * 1.1;

        i += 1;
      }
      bufferRef.current.needsUpdate = true;
    }
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTexture}
        color="#9F79EA"
        size={0.6}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}
