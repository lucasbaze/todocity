import { LotModel } from 'libs/data/db/models/lot/lot-model';

import { TStructure } from '@todocity/data/types';

import { ProjectModel } from '../../../models/project/project-model';

export async function placeStructure(
  userId: string,
  lotId: string,
  structure: TStructure
) {
  // Create new project
  const projectModel = new ProjectModel();
  await projectModel.createProject({
    ownerId: userId,
    title: 'Another Project 🤘',
    description: 'Projects are your real world todo lists',
  });

  // Create new structure object
  const newStructure = { ...structure, projectId: projectModel.project.id };

  // Attach structure to the lot
  const lotModel = new LotModel();
  await lotModel.addStructure(userId, lotId, newStructure);
}
