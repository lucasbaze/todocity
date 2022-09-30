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
  /**
   * The rendered object using react composition
   */
  objectModel: ReactNode;
  /**
   * The id from the db of the project (todo) list this object is associated with
   */
  projectId: string;
  /**
   * The url for an thumbnail of the structure
   */
  structureThumbnailUrl: string;
  /**
   * The id from the db of the lot this object is associated with
   */
  lotId?: string;
}

export function ProjectModel({
  objectModel,
  count,
  projectId,
  structureThumbnailUrl,
  lotId,
  fixed,
  ...props
}: IProjectModelProps) {
  const groupRef = useRef<Group>(null);
  const [maxY, setMaxY] = useState(0);
  const createMenu = useMenuManagerStore((state) => state.createMenu);

  const { handleMouseDown, handleMouseUp } = useNonDragClick(() => {
    createMenu({
      id: projectId,
      type: 'project',
      // TODO: reduce this to what is required
      content: {
        projectId,
        name: 'project',
        cost: 24,
        description: 'something',
        structureThumbnailUrl,
        locked: false,
        lotId: lotId,
      },
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
      onPointerDown={(e) => {
        e.stopPropagation();
        handleMouseDown(e);
      }}
      onPointerUp={(e) => {
        e.stopPropagation();
        handleMouseUp(e);
      }}
    >
      <NotificationPin fixed={fixed} count={count} position={[0, maxY, 0]} />
      {objectModel}
    </group>
  );
}
