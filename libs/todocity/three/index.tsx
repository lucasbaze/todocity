import { Suspense } from 'react';
import { useEffect } from 'react';

import { useColorMode } from '@chakra-ui/react';
import { ContactShadows, Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { HomePageModel } from '@todocity/models';

export function HomeScene() {
  const { colorMode } = useColorMode();
  // useEffect(() => {
  //   document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  // }, []);
  return (
    <Canvas camera={{ position: [7, 7, 10], fov: 30 }}>
      <Suspense fallback={null}>
        {colorMode !== 'dark' ? (
          <Environment preset="forest" />
        ) : (
          <pointLight position={[-30, 30, 30]} intensity={0.3} />
        )}
        <HomePageModel />
        {/* <gridHelper args={[30, 30, 30]} /> */}
      </Suspense>
    </Canvas>
  );
}

export default HomeScene;
