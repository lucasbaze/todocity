import { increment } from 'firebase/firestore';
import { CityModel } from 'libs/data/db/models/city/city-model';
import { StructureModel } from 'libs/data/db/models/strucure/structure-model';

export async function unlockStructure(
  userId: string,
  structureId: string,
  structureCost: number
) {
  try {
    console.log('Attempting to unlock structure: ', userId, structureId);
    const structureModel = new StructureModel();
    await structureModel.updateStructure(userId, structureId, {
      'details.locked': false,
    });

    const cityModel = new CityModel();
    await cityModel.updateCity(userId, {
      'stats.cityPoints': increment(-structureCost),
    });
  } catch (error) {
    console.error('Failed to unlock structure: ', userId, structureId);
  }
}
