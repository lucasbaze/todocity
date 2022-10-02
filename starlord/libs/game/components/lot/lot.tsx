// The Lot is a core concept
// Read more here: TODO:
import React, { Suspense } from 'react';

import type { TLot } from '@todocity/data/types';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { Land } from '../land/land';
import { ProjectModel } from '../project-model/project-model';

export function Lot({
  position,
  rotation,
  land,
  structures,
  id,
  preview,
}: TLot) {
  // TODO: This is NOT good, definitely needs to be re-thought on how to pass the todo's the entirety of the model
  // Not just the project-list
  const projects = useLotsManagerStore((state) => state.projects);
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
                      modelName={structure.name}
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
          <Land {...land} lotId={id} />
        </>
      )}
    </group>
  );
}
