// The Lot is a core concept
// Read more here: TODO:
import React from 'react';

import type { TLot } from '@todocity/data/types';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { Land } from '../land/land';
import { ProjectModel } from '../project-model/project-model';

export function Lot({ position, land, structures, id, preview }: TLot) {
  const hasStructures = !!structures.length;

  return (
    <group position={position}>
      {hasStructures ? (
        <>
          {structures.map((structure) => (
            <React.Fragment key={structure.id}>
              <ProjectModel
                key={structure.id}
                count={1}
                lotId={id}
                projectId={structure.projectId}
                objectModel={
                  <BasePrimitiveModel
                    modelName={structure.name}
                    url={structure.src}
                  />
                }
              />
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          {preview && (
            <BasePrimitiveModel
              modelName="Change Me"
              url={preview.src}
              preview
            />
          )}
          <Land {...land} lotId={id} />
        </>
      )}
    </group>
  );
}
