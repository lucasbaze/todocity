import {
  MutableRefObject,
  Suspense,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { ColorModeContext, useBreakpointValue } from '@chakra-ui/react';
import {
  ContactShadows,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useContextBridge,
  View,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ProjectModel } from 'libs/game/components/project-model/project-model';
import { BasePrimitiveModel } from 'libs/game/models/base-primitive-model/base-primitive-model';
import { Group, Vector3 } from 'three';

import { ThreeDLoader } from '@todocity/components/three-d-loader/three-d-loader';
import { AmbientLight } from '@todocity/three/lights/ambient-light';
import { DirectionalLight } from '@todocity/three/lights/directional-light';
import { PointLight } from '@todocity/three/lights/point-light';
import { RectAreaLight } from '@todocity/three/lights/rect-area-light';

import styles from './home-page.module.css';

export function NightLights() {
  return (
    <>
      <directionalLight
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        position={[0, 10, 0]}
        intensity={0.5}
      />
      <ambientLight intensity={0.05} />
      <group>
        <RectAreaLight
          threeProps={{
            args: ['#ffd09e', 1.5, 5, 2],
            position: [0, 0, 6],
            rotation: [Math.PI / 4, 0, 0],
          }}
        />
        <RectAreaLight
          threeProps={{
            args: ['#ffd09e', 1.5, 5, 2],
            position: [0, 0, -6],
            rotation: [(3 * Math.PI) / 4, 0, 0],
          }}
        />
      </group>
      <group rotation={[0, Math.PI / 2, 0]}>
        <RectAreaLight
          threeProps={{
            args: ['#ffd09e', 1.5, 5, 2],
            position: [0, 0, 6],
            rotation: [Math.PI / 4, 0, 0],
          }}
        />
        <RectAreaLight
          threeProps={{
            args: ['#ffd09e', 1.5, 5, 2],
            position: [0, 0, -6],
            rotation: [(3 * Math.PI) / 4, 0, 0],
          }}
        />
      </group>
    </>
  );
}

export function DayLights() {
  return (
    <>
      <AmbientLight threeProps={{ args: ['white', 0.6] }} />
      <DirectionalLight
        threeProps={{
          args: ['white', 1],
          position: [7, 10, 0],
        }}
      />
      <PointLight
        threeProps={{ args: ['white', 3, 0.5, 1], position: [2, 2, 2] }}
      />
    </>
  );
}

export function HomePageModel({ target }) {
  const { camera } = useThree();
  const orbitControlsRef = useRef(null);
  const ref = useRef<Group>(null!);
  const { colorMode } = useContext(ColorModeContext);
  useFrame((state, delta) => {
    ref.current.rotateY(delta / 4);
  });

  useEffect(() => {
    orbitControlsRef.current.target = new Vector3(target.x, target.y, target.z);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera]);

  return (
    <>
      <group ref={ref} dispose={null}>
        <BasePrimitiveModel
          modelName="Home Page Model"
          url="./static/models/main_house.glb"
        />
      </group>
      {colorMode === 'light' ? <DayLights /> : <NightLights />}
      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.5}
        scale={15}
        blur={5}
        far={3}
      />
      <OrbitControls
        ref={orbitControlsRef}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
    </>
  );
}

interface IHomeSceneProps {
  viewRef: MutableRefObject<HTMLDivElement | null>;
  zoom?: number;
}

export function HomeScene({ viewRef }: IHomeSceneProps) {
  const ContextBridge = useContextBridge(ColorModeContext);
  const variant = useBreakpointValue({
    base: {
      position: new Vector3(9.6, 8.9, 10.3),
      zoom: 0.9,
      target: {
        x: 0.35,
        y: 1.27,
        z: 0.69,
      },
    },
    md: {
      position: new Vector3(9.6, 8.9, 10.3),
      zoom: 0.8,
      target: {
        x: 0.35,
        y: 1.27,
        z: 0.69,
      },
    },
    lg: {
      position: new Vector3(13.11, 9.9, -1.98),
      zoom: 0.6,
      target: {
        x: 0.01,
        y: 2.21,
        z: 0.2,
      },
    },
  });

  useEffect(() => {
    document.querySelector('canvas')?.setAttribute('touch-action', 'none');
  }, []);

  return (
    <Canvas
      camera={{ position: variant.position, fov: 50, zoom: variant.zoom }}
      className={styles.canvas}
    >
      <ContextBridge>
        <Suspense
          fallback={
            <Html>
              <ThreeDLoader />
            </Html>
          }
        >
          {/* @ts-ignore */}
          <View track={viewRef} index={1}>
            <HomePageModel target={variant.target} />
          </View>
        </Suspense>
      </ContextBridge>
    </Canvas>
  );
}

// Required for lazy loading
export default HomeScene;
