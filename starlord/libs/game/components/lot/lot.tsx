// The Lot is a core concept
// Read more here: TODO:

import { useState } from 'react';

import { Line, Plane, useCursor } from '@react-three/drei';
import { MeshBasicMaterial } from 'three';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import type { TLand } from '../../types';
import { ProjectModel } from '../project-model/project-model';

const transparentPlaneMaterial = new MeshBasicMaterial({
  transparent: true,
  opacity: 0,
});

function Land({ cost, description, locked, name, size }: TLand) {
  const xBounds = size[0] / 2;
  const yBounds = size[1] / 2;
  const [hovering, setHovering] = useState(false);

  useCursor(hovering);

  const handleHoverOver = () => {
    setHovering(true);
  };

  const handleHoverOff = () => {
    setHovering(false);
  };

  const handleClick = () => {
    if (locked) {
    }
  };

  return (
    <group
      onPointerEnter={handleHoverOver}
      onPointerLeave={handleHoverOff}
      onClick={handleClick}
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

export function Lot({ id, position, land, structures }) {
  const hasStructures = !!structures.length;

  return (
    <group position={position}>
      {hasStructures ? (
        <>
          {structures.map((structure) => (
            <ProjectModel
              key={structure.id}
              count={1}
              objectModel={
                <BasePrimitiveModel
                  modelName={structure.name}
                  url={structure.src}
                />
              }
            />
          ))}
        </>
      ) : (
        <Land {...land} />
      )}
    </group>
  );
}

// Render an array of lots
// The lots will have the following data
/**
 * Lot:
 * - Position
 * - Size
 *
 * Land:
 * - Name
 * - Description
 * - Cost
 * - Locked / Unlocked
 *
 * Buildling
 * - Object
 * - Overdue Todo's / Notification count
 *
 */
