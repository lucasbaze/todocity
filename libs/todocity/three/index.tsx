import { Suspense } from 'react';

import { useColorMode } from '@chakra-ui/react';
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  View,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Soda } from '@todocity/models';

export function HomeScene() {
  const { colorMode } = useColorMode();
  return (
    <Canvas
      camera={{ position: [8, 8, 8], fov: 30 }}
      onCreated={({ camera }) => camera.lookAt(-1, 0, -1)}
    >
      <Suspense fallback={null}>
        <pointLight position={[-20, 30, 10]} intensity={1} />
        {colorMode !== 'dark' && <Environment preset="forest" />}
        <Soda />
        {/* <gridHelper args={[30, 30, 30]} /> */}
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
}

export default HomeScene;
