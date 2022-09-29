import React, { useState } from 'react';

import { animated, config, useSpring } from '@react-spring/three';

export interface IScaleAnimationProps {
  children: JSX.Element;
}

export const ScaleAnimation = ({ children }: IScaleAnimationProps) => {
  const [active, setActive] = useState<boolean>(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: active ? 1 : 0,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      scale={x.to({
        range: [0, 0.25, 0.5, 0.75, 1],
        output: [1, 1.01, 1, 0.99, 1],
      })}
      onClick={() => setActive(!active)}
    >
      {children}
    </animated.mesh>
  );
};
