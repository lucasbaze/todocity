import { useRef } from 'react';

import { useHelper as useDreiHelper } from '@react-three/drei';
import { SpotLightProps } from '@react-three/fiber';
import { SpotLight as ThreeSpotLight, SpotLightHelper } from 'three';

export type TSpotLightProps = {
  useHelper?: boolean;
  threeProps: SpotLightProps;
};

export function SpotLight({ useHelper, threeProps }: TSpotLightProps) {
  const lightRef = useRef<ThreeSpotLight>(null);
  useDreiHelper(useHelper && lightRef, SpotLightHelper, 1);
  return (
    <>
      <spotLight ref={lightRef} {...threeProps} />
    </>
  );
}
