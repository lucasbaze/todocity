import { ReactNode, useEffect, useRef, useState } from 'react';

import { GroupProps } from '@react-three/fiber';
import { Box3, Group } from 'three';

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
  const [notificationCount, setNotificationCount] = useState(count);
  const { handleMouseDown, handleMouseUp } = useNonDragClick(() => {
    setNotificationCount(notificationCount + 1);
  });

  useEffect(() => {
    if (notificationCount % 5 === 0) {
      // Spin the house and jump
    }
  }, [notificationCount]);

  useEffect(() => {
    if (groupRef.current) {
      // TODO: Possibly inefficient
      // https://stackoverflow.com/a/26189021
      const bbox = new Box3().setFromObject(groupRef.current);
      const floatDistance = 0.6;
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
      <NotificationPin
        fixed={fixed}
        count={notificationCount}
        position={[0, maxY, 0]}
      />
      {objectModel}
    </group>
  );
}
