import { MutableRefObject, Suspense, useEffect, useRef, useState } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  ContactShadows,
  Edges,
  Html,
  OrbitControls,
  useContextBridge,
  useCursor,
  useGLTF,
  View,
} from '@react-three/drei';
import { Canvas, GroupProps, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { GLTF } from 'three-stdlib';

interface IBaseModelProps extends GroupProps {
  url: string;
}

export function BaseModel({ url, ...props }: IBaseModelProps) {
  const [hovering, setHovering] = useState(false);
  const ref = useRef<Group>(null!);

  const gltf = useGLTF(url) as GLTF;
  console.log('GLTF: ', gltf);
  useCursor(hovering);

  return (
    <>
      <group
        ref={ref}
        {...props}
        dispose={null}
        onPointerEnter={(e) => {
          e.stopPropagation();
          setHovering(true);
        }}
        onPointerOut={(e) => setHovering(false)}
      >
        <group rotation={[0, 0, 0]} scale={1} position={[0, 0, 0]}>
          <primitive object={gltf.scene} />
        </group>
      </group>
    </>
  );
}
