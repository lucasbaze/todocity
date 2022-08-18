import { useRef } from 'react';

import { AmbientLightProps } from '@react-three/fiber';
import { AmbientLight as ThreeAmbientLight } from 'three';

export type TAmbientLightProps = {
  threeProps: AmbientLightProps;
};

export function AmbientLight({ threeProps }: TAmbientLightProps) {
  const lightRef = useRef<ThreeAmbientLight>(null!);
  return (
    <>
      <ambientLight ref={lightRef} {...threeProps} />
    </>
  );
}
