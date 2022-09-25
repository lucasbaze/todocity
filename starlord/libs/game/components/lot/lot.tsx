// The Lot is a core concept
// Read more here: TODO:
import React, { useMemo } from 'react';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { Land } from '../land/land';
import { ProjectModel } from '../project-model/project-model';

export function Lot({ position, land, structures }) {
  const hasStructures = !!structures.length;

  // I think that there are some memory leaks here or handlers being recreated.
  const memodStructures = useMemo(
    () =>
      structures.map((structure) => (
        <React.Fragment key={structure.id}>
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
        </React.Fragment>
      )),
    []
  );

  return (
    <group position={position}>
      {hasStructures ? <>{memodStructures}</> : <Land {...land} />}
    </group>
  );
}
