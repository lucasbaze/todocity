// The Lot is a core concept
// Read more here: TODO:
import React, { Suspense } from 'react';

import type { TLot, TLotPreview, TProject } from '@todocity/data/types';

import { BasePrimitiveModel } from '../../models/base-primitive-model/base-primitive-model';
import { Land } from '../land/land';
import { ProjectModel } from '../project-model/project-model';

interface ILotProps {
  lot: TLot;
  projects: TProject[];
  preview: TLotPreview;
}

export function Lot({
  lot: { position, rotation, land, structures, id },
  projects,
  preview,
}: ILotProps) {
  const hasStructures = !!structures.length;

  return (
    <group position={position} rotation={rotation}>
      {hasStructures ? (
        <>
          {structures.map((structure) => {
            const project = projects.find(
              (project) => project.id === structure.projectId
            );
            return (
              <React.Fragment key={structure.slug}>
                <ProjectModel
                  key={structure.slug}
                  count={project?.incompleteTodosCount || 0}
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
