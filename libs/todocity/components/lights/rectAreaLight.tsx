import { useRef } from 'react';

import { useHelper as useDreiHelper } from '@react-three/drei';
import { RectAreaLightProps } from '@react-three/fiber';
import { RectAreaLight as ThreeRectAreaLight } from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

export type TRectAreaLightProps = {
  useHelper?: boolean;
  threeProps: RectAreaLightProps;
};

export function RectAreaLight({ useHelper, threeProps }: TRectAreaLightProps) {
  const lightRef = useRef<ThreeRectAreaLight>(null);
  useDreiHelper(useHelper && lightRef, RectAreaLightHelper);
  return <rectAreaLight ref={lightRef} {...threeProps} />;
}
