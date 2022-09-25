import { ReactNode, useEffect, useRef, useState } from 'react';

import { GroupProps } from '@react-three/fiber';
import { Box3, Group } from 'three';

import { useMenuManagerStore } from '@todocity/stores/menu-manager-store';

import { useNonDragClick } from '../../hooks/useNonDragClick';
import {
  INotificationPinProps,
  NotificationPin,
} from '../../models/notification-pin/notification-pin';

interface IProjectModelProps extends GroupProps, INotificationPinProps {
  objectModel: ReactNode;
}

export function ProjectModel({
  objectModel,
  count,
  fixed,
  ...props
}: IProjectModelProps) {
  const groupRef = useRef<Group>(null);
  const [maxY, setMaxY] = useState(0);
  const createMenu = useMenuManagerStore((state) => state.createMenu);
  const { handleMouseDown, handleMouseUp } = useNonDragClick(() => {
    createMenu({
      type: 'project',
    });
  });

  /**
   * Set the max float height of the notification pin using the bounding box of the object
   */
  useEffect(() => {
    if (groupRef.current) {
      // TODO: Possibly inefficient
      // https://stackoverflow.com/a/26189021
      const bbox = new Box3().setFromObject(groupRef.current);
      const floatDistance = 1.6;
      setMaxY(bbox.max.y + floatDistance);
    }
  }, [groupRef]);

  return (
    <group
      ref={groupRef}
      {...props}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
    >
      <NotificationPin fixed={fixed} count={2} position={[0, maxY, 0]} />
      {objectModel}
    </group>
  );
}
