import { useEffect, useRef } from 'react';

import { useHelper as useDreiHelper } from '@react-three/drei';
import { DirectionalLightProps, useFrame, useThree } from '@react-three/fiber';
import {
  DirectionalLight as ThreeDirectionalLight,
  DirectionalLightHelper,
  Object3D,
  Vector3,
} from 'three';

export type TDirectionalLightProps = {
  useHelper?: boolean;
  threeProps: DirectionalLightProps;
  targetPosition?: Vector3;
};

export function DirectionalLight({
  useHelper,
  threeProps,
  targetPosition,
}: // animationCallback,
TDirectionalLightProps) {
  const { scene } = useThree();
  const lightRef = useRef<ThreeDirectionalLight>(null);
  const objRef = useRef<Object3D>(null);
  useDreiHelper(useHelper && lightRef, DirectionalLightHelper, 2, 'teal');
  // useFrame(() => {
  //   if (lightRef.current) {
  //     animationCallback && animationCallback(lightRef.current);
  //   }
  //   // lightRef.current?.rotation.x += 2;
  //   // lightRef.current?.rotateOnAxis(new Vector3(0, 1, 0));
  // });

  useEffect(() => {
    scene.add(lightRef.current?.target!);
    scene.add(objRef.current!);
    if (lightRef.current) {
      lightRef.current.target = objRef.current!;
    }
  }, [scene, lightRef]);

  console.log('Directional Light Rendered');

  return (
    <>
      <directionalLight
        ref={lightRef}
        name="Directional Light"
        {...threeProps}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
      >
        <object3D ref={objRef} position={targetPosition} />
      </directionalLight>
    </>
  );
}
