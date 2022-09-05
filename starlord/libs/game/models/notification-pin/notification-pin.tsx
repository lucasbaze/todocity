import { useEffect, useRef } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { Billboard, Float, Text, useGLTF } from '@react-three/drei';
import { BackSide, Color, Group, Mesh, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

import { RectAreaLight } from '@todocity/three/lights/rect-area-light';

import { BaseModel, IBaseModelProps } from '../base-model/base-model';

export interface INotificationPinProps
  extends Omit<IBaseModelProps, 'modelName' | 'children'> {
  /**
   * Count to display in the notifications section
   */
  count: number;
  /**
   * Don't billboard the text. Useful for PresentationControls
   */
  fixed?: boolean;
}

export function NotificationPin({
  count,
  fixed = false,
  position,
  ...props
}: INotificationPinProps) {
  const groupRef = useRef<Group>(null);
  const notificationColor = useColorModeValue('#ff0000', '#ffffff');
  const materialRef = useRef<MeshStandardMaterial>(new MeshStandardMaterial());

  const gltf = useGLTF('./static/models/notification_pin.glb') as GLTF;

  gltf.scene.traverse((node) => {
    if (node) node.castShadow = true;
    if (node) node.receiveShadow = true;
  });
  gltf.scene.castShadow = true;
  gltf.scene.receiveShadow = true;

  // set the material color
  useEffect(() => {
    materialRef.current.color = new Color(notificationColor);
    // Ensures that the count is highly visible
    materialRef.current.side = BackSide;
  }, [notificationColor]);

  // Set the visibility if count exists
  useEffect(() => {
    if (count) {
      groupRef.current.visible = true;
    } else {
      groupRef.current.visible = false;
    }
  }, [groupRef, count]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <Float
        speed={5}
        rotationIntensity={0.5}
        floatIntensity={1}
        position={position}
      >
        <RectAreaLight
          threeProps={{
            args: ['white', 7, 0.4, 0.4],
            position: [0, 0, 1],
          }}
        />
        <Billboard follow lockX={fixed} lockY={fixed} lockZ={fixed}>
          <Text
            fontSize={1}
            color="#000000"
            outlineWidth={'4%'}
            outlineColor="#000000"
            outlineOpacity={1}
          >
            {count}
          </Text>
          <BaseModel modelName="Notification Balloon" receiveShadow castShadow>
            <mesh
              geometry={gltf.nodes.Circle.geometry}
              material={materialRef.current}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </BaseModel>
        </Billboard>
      </Float>
    </group>
  );
}
