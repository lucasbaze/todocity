import { Suspense } from 'react';
import { useEffect } from 'react';

import { useColorMode } from '@chakra-ui/react';
import { ContactShadows, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Soda } from '@todocity/models';

import styles from './home.module.css';

export function HomeScene() {
  const { colorMode } = useColorMode();
  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);
  return (
    <Canvas camera={{ position: [7, 7, 10], fov: 30 }}>
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
