import { useRef } from 'react';

import { useHelper as useDreiHelper } from '@react-three/drei';
import { HemisphereLightProps } from '@react-three/fiber';
import {
  HemisphereLight as ThreeHemisphereLight,
  HemisphereLightHelper,
} from 'three';

export type THemisphereLightProps = {
  useHelper?: boolean;
  threeProps: HemisphereLightProps;
};

export function HemisphereLight({
  useHelper,
  threeProps,
}: THemisphereLightProps) {
  const lightRef = useRef<ThreeHemisphereLight>(null);
  useDreiHelper(useHelper && lightRef, HemisphereLightHelper, 1, 'teal');
  return (
    <>
      <hemisphereLight ref={lightRef} {...threeProps} />
    </>
  );
}
