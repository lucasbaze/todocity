import { MutableRefObject, Suspense, useEffect, useRef } from 'react';

import { ColorModeContext } from '@chakra-ui/react';
import {
  ContactShadows,
  Html,
  OrbitControls,
  useContextBridge,
  useGLTF,
  View,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { GLTF } from 'three-stdlib';

import { ThreeDLoader } from '@todocity/components/three-d-loader/three-d-loader';

import styles from './pricing-page.module.css';

export function BaseModel({ url, ...props }: any) {
  const ref = useRef<Group>(null!);
  const gltf = useGLTF(url) as GLTF;
  useFrame((state, delta) => ref.current.rotateY(delta / 4));

  return (
    <>
      <group ref={ref} {...props} dispose={null}>
        <group rotation={[0, 0, 0]} scale={0.5} position={[0, -2, 0]}>
          <primitive object={gltf.scene} />
        </group>
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <ambientLight intensity={1} />
      {/* <gridHelper /> */}
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

interface IPricingPageSceneProps {
  view1Ref: MutableRefObject<HTMLDivElement | null>;
  view2Ref: MutableRefObject<HTMLDivElement | null>;
}

export function PricingPageScene({
  view1Ref,
  view2Ref,
}: IPricingPageSceneProps) {
  const ContextBridge = useContextBridge(ColorModeContext);

  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);
  return (
    <Canvas
      camera={{ position: [7, 10, 7], fov: 35, zoom: 1 }}
      className={styles.canvas}
    >
      <ContextBridge>
        <Suspense fallback={null}>
          {/* @ts-ignore */}
          <View track={view1Ref} index={1}>
            <BaseModel url="./static/models/house_boring.glb" />
          </View>
          {/* @ts-ignore */}
          <View track={view2Ref} index={2}>
            <BaseModel url="./static/models/office_building_4x12_less_trees.glb" />
          </View>
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}

// Required for lazy loading
export default PricingPageScene;
