import { MapControls, Sky, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Toolbar } from './toolbar/toolbar';

import styles from './game.module.css';

export const Game = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      {/* Game Overlay */}
      <Toolbar />
      {/* Game */}
      <Canvas camera={{ position: [20, 20, 20] }}>
        <ambientLight />
        <Sphere />
        <MapControls />
        <Sky />
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
          <circleBufferGeometry args={[200, 200]} />
          <meshStandardMaterial attach="material" color="green" />
        </mesh>
      </Canvas>
    </div>
  );
};
