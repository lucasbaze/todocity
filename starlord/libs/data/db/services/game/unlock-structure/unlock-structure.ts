import { LotModel } from 'libs/data/db/models/lot/lot-model';
import { StructureModel } from 'libs/data/db/models/strucure/structure-model';

import { ProjectModel } from '../../../models/project/project-model';

export async function unlockStructure(userId: string, structureId: string) {
  try {
    console.error('Attempting to unlock structure: ', userId, structureId);
    const structureModel = new StructureModel();
    await structureModel.updateStructure(userId, structureId, {
      'details.locked': false,
    });
  } catch (error) {
    console.error('Failed to unlock structure: ', userId, structureId);
  }
}
