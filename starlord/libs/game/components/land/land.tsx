// The Lot is a core concept
// Read more here: TODO:
import React, { useState } from 'react';

import { Line, Plane, useCursor } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { useNonDragClick } from 'libs/game/hooks/useNonDragClick';
import { MeshBasicMaterial } from 'three';

import type { TLand } from '@todocity/data/types';
import { useMenuManagerStore } from '@todocity/stores/menu-manager-store';
import { getUid } from '@todocity/utils/global/get-uid';

const transparentPlaneMaterial = new MeshBasicMaterial({
  transparent: true,
  opacity: 0,
});

interface ILandProps extends TLand {
  lotId: string;
}

export function Land({
  lotId,
  cost,
  description,
  locked,
  name,
  size,
}: ILandProps) {
  const createMenu = useMenuManagerStore((state) => state.createMenu);
  const [hovering, setHovering] = useState(false);
  const [ephemeralLandId] = useState(getUid());
  const { handleMouseDown, handleMouseUp } = useNonDragClick(
    (event: ThreeEvent<MouseEvent>) => {
      if (locked) {
        createMenu({
          id: ephemeralLandId,
          type: 'lot',
          // @ts-ignore
          // TODO: Figure out why clientX & clientY are not showing as possible types;
          cssPosition: { left: event.clientX, top: event.clientY },
          content: {
            lotId,
            name,
            description,
            cost,
            locked,
          },
        });
      } else {
        createMenu({
          type: 'library',
        });
      }
    }
  );

  useCursor(hovering);

  const handleHoverOver = () => {
    setHovering(true);
  };

  const handleHoverOff = () => {
    setHovering(false);
  };

  const xBounds = size[0] / 2;
  const yBounds = size[1] / 2;

  return (
    <group
      onPointerEnter={handleHoverOver}
      onPointerLeave={handleHoverOff}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
    >
      {locked ? (
        <>
          <Plane
            args={size}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.1, 0]}
            material={transparentPlaneMaterial}
          />
          <Line
            key="1"
            points={[
              [-xBounds, 0, yBounds],
              [xBounds, 0, yBounds],
            ]}
            position={[0, 0.15, 0]}
            color={hovering ? 'lightgreen' : 'black'}
            lineWidth={1}
            dashed={true}
            dashSize={1}
            dashScale={5}
          />
          <Line
            points={[
              [-xBounds, 0, -yBounds],
              [xBounds, 0, -yBounds],
            ]}
            position={[0, 0.15, 0]}
            color={hovering ? 'lightgreen' : 'black'}
            lineWidth={1}
            dashed={true}
            dashScale={5}
          />
          <Line
            points={[
              [-xBounds, 0, -yBounds],
              [-xBounds, 0, yBounds],
            ]}
            position={[0, 0.15, 0]}
            color={hovering ? 'lightgreen' : 'black'}
            lineWidth={1}
            dashed={true}
            dashScale={5}
          />
          <Line
            points={[
              [xBounds, 0, -yBounds],
              [xBounds, 0, yBounds],
            ]}
            position={[0, 0.15, 0]}
            color={hovering ? 'lightgreen' : 'black'}
            lineWidth={1}
            dashed={true}
            dashScale={5}
          />
        </>
      ) : (
        <Plane
          args={size}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.1, 0]}
          material={
            new MeshBasicMaterial({ color: hovering ? 'pink' : 'lightgreen' })
          }
        />
      )}
    </group>
  );
}