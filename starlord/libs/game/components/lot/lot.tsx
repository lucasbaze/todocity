// The Lot is a core concept
// Read more here: TODO:
import React, { Suspense } from 'react';

import type { TLot, TProject } from '@todocity/data/types';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { Land } from '../land/land';
import { ProjectModel } from '../project-model/project-model';

interface ILotProps {
  lot: TLot;
  projects: TProject[];
}

export function Lot({
  lot: { position, rotation, land, structures, id, preview },
  projects,
}: ILotProps) {
  const hasStructures = !!structures.length;

  return (
    <group position={position} rotation={rotation}>
      {hasStructures ? (
        <>
          {structures.map((structure) => {
            const projectTodos = projects.find(
              (project) => project.id === structure.projectId
            );
            const outstandingTodos = projectTodos.todos.filter(
              (todo) => !todo.completed
            ).length;
            return (
              <React.Fragment key={structure.id}>
                <ProjectModel
                  key={structure.id}
                  count={outstandingTodos}
                  lotId={id}
                  projectId={structure.projectId}
                  structureThumbnailUrl={structure.thumbnailSrc}
                  objectModel={
                    <BasePrimitiveModel
                      modelName={structure.details.name}
                      url={structure.src}
                    />
                  }
                />
              </React.Fragment>
            );
          })}
        </>
      ) : (
        <>
          {preview && (
            <Suspense fallback={null}>
              <BasePrimitiveModel
                modelName="Change Me"
                url={preview.src}
                preview
              />
            </Suspense>
          )}
          <Land land={land} lotId={id} />
        </>
      )}
    </group>
  );
}
