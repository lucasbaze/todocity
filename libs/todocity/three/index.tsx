import { Suspense } from 'react';

import { useColorMode } from '@chakra-ui/react';
import {
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
    <Canvas>
      <Suspense fallback={null}>
        <pointLight position={[-20, 30, 10]} intensity={1} />
        {colorMode !== 'dark' && <Environment preset="dawn" />}
        <Soda />
        {/* <gridHelper args={[30, 30, 30]} /> */}
        <PerspectiveCamera
          args={[45, 1, 1, 1000]}
          makeDefault
          fov={30}
          position={[8, 8, 8]}
        />
        <OrbitControls makeDefault />
      </Suspense>
    </Canvas>
  );
}

export default HomeScene;
