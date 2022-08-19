import { useRef } from 'react';

import { useHelper as useDreiHelper } from '@react-three/drei';
import { PointLightProps } from '@react-three/fiber';
import { PointLight as ThreePointLight, PointLightHelper } from 'three';

export type TPointLight = {
  useHelper?: boolean;
  threeProps: PointLightProps;
};

export function PointLight({ useHelper, threeProps }: TPointLight) {
  const lightRef = useRef<ThreePointLight>(null);
  useDreiHelper(useHelper && lightRef, PointLightHelper, 1, 'teal');
  return (
    <>
      <pointLight ref={lightRef} {...threeProps} />
    </>
  );
}
