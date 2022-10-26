import { LotModel } from 'libs/data/db/models/lot/lot-model';
import { StructureModel } from 'libs/data/db/models/strucure/structure-model';

import { ProjectModel } from '../../../models/project/project-model';

export async function placeStructure(
  userId: string,
  lotId: string,
  structureId: string
) {
  // Create new project
  const projectModel = new ProjectModel();
  await projectModel.createProject({
    ownerId: userId,
    title: 'Another Project 🤘',
    description: 'Projects are your real world todo lists',
  });

  // Get structure to attach to project
  const structureModel = new StructureModel();
  const structure = (await structureModel.getStructure(userId, structureId))
    .structure;

  // Create new structure object
  const newStructure = { ...structure, projectId: projectModel.project.id };

  // Attach structure to the lot
  const lotModel = new LotModel();
  await lotModel.addStructure(userId, lotId, newStructure);
}
