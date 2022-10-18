import { Suspense, useCallback, useState } from 'react';

import { useToast } from '@chakra-ui/react';
import { animated, config, useSpring } from '@react-spring/three';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { IconBuildingCommunity, IconFence } from '@tabler/icons';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Box, Flex, Icon, Text } from '@todocity/ui/core';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { ExplodeWithPoints } from './explode-with-points';

function PhysicsPlane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.1, 0],
  }));
  return (
    // @ts-ignore
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <meshLambertMaterial transparent opacity={0} />
    </mesh>
  );
}

interface IPhysicsBoxProps {
  children: React.ReactNode;
}

function PhysicsBox({ children }: IPhysicsBoxProps) {
  const [ref] = useBox(() => ({
    mass: 1,
    position: [0, 15, 4],
    rotation: [0.4, 0.2, 0.5],
  }));
  return (
    // @ts-ignore
    <group receiveShadow castShadow ref={ref}>
      {children}
    </group>
  );
}

interface IExplodingPackageProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function ExplodingPackage({ children, onClick }: IExplodingPackageProps) {
  const [active, setActive] = useState<boolean>(false);
  const [explode, setExplode] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setActive((active) => !active);
    setExplode(true);
  }, []);

  const { scale } = useSpring({
    from: { scale: 1 },
    scale: active ? 0 : 1,
    config: config.slow,
    onRest() {
      if (onClick) {
        onClick();
      }
    },
  });

  return (
    <>
      <group position={[0, 0.2, 0]}>
        <ExplodeWithPoints explode={explode} />
      </group>
      <animated.mesh scale={scale} onClick={handleClick}>
        {children}
      </animated.mesh>
    </>
  );
}

export function PackageManager() {
  const toast = useToast();
  const { packages, openPackage } = useLotsManagerStore((state) => ({
    packages: state.packages,
    openPackage: state.openPackage,
  }));

  const handleOpenPackage = (id: string) => {
    openPackage(id);
    const openedPackage = packages.find((pack) => pack.id === id);
    const { cityPoints, lotPoints } = openedPackage;
    toast({
      status: 'success',
      position: 'top',
      variant: 'toast',
      render: () => (
        <Flex
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          py="2"
          px="4"
          bg="green.500"
          top={5}
          color="white"
          minWidth="350px"
          alignItems="center"
          justifyContent="center"
          height="44px"
          borderRadius={20}
        >
          <Text fontWeight="bold" color="white">
            Package contained {cityPoints > 0 ? cityPoints : lotPoints}
          </Text>
          <Icon as={cityPoints > 0 ? IconBuildingCommunity : IconFence} />
          <Text fontWeight="bold" color="white">
            {cityPoints > 0 ? 'city points!' : 'lot points!'}
          </Text>
        </Flex>
      ),
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
      <Physics>
        {packages.map((singlePackage, i) => {
          return (
            <Suspense fallback={null} key={singlePackage.id}>
              <PhysicsBox>
                <ExplodingPackage
                  onClick={() => handleOpenPackage(singlePackage.id)}
                >
                  <BasePrimitiveModel
                    modelName="Amazon Package"
                    url="./static/models/amazon_prime_box.glb"
                    scale={1}
                    position={[0, 0, 0]}
                    castShadow
                  />
                </ExplodingPackage>
              </PhysicsBox>
            </Suspense>
          );
        })}
        <PhysicsPlane />
      </Physics>
    </>
  );
}
