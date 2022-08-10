import { Box, Text, Flex, Link, Button } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '@todocity/ui';
import { LightDarkButton } from '@todocity/components';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  View,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Soda } from '@todocity/models';

function Scene() {
  const { camera } = useThree();
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[-20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
      <Soda />
      <gridHelper args={[30, 30, 30]} />
      <PerspectiveCamera
        args={[45, 1, 1, 1000]}
        makeDefault
        fov={8}
        position={[2.8176288609275293, 4.870110528616384, 3.365151300662069]}
      />
      <OrbitControls makeDefault />
    </>
  );
}

export function HomeScene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default HomeScene;
