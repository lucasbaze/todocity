import { addDoc, getDoc } from 'firebase/firestore';

import { structureRef, structuresRef } from '@todocity/data/db';
import { TStructure } from '@todocity/data/types';

export interface IStructureModel {
  structure: Partial<TStructure>;
  createStructures(
    userId: string,
    structures: TStructure[]
  ): Promise<IStructureModel>;
}

export class StructureModel implements IStructureModel {
  structure: Partial<TStructure>;

  constructor() {
    this.structure = null;
  }

  getStructure = async (userId: string, structureId: string) => {
    try {
      console.log('Attempting to get structures: ', userId, structureId);
      const structureDoc = await getDoc(structureRef(userId, structureId));
      this.structure = { ...structureDoc.data() };
      console.log('Retrieved structure: ', structureDoc);
    } catch (error) {
      console.error('Failed to create structures: ', userId, structureId);
    }
    return this;
  };

  createStructures = async (userId: string, structures: TStructure[]) => {
    try {
      const structurePromises = structures.map(async (structure) => {
        console.log('Attempting to create structures: ', userId, structure);
        return await addDoc(structuresRef(userId), {
          ...structure,
        });
      });
      const createdStructures = await Promise.all(structurePromises);
      console.log('Created structures: ', createdStructures);
    } catch (error) {
      console.error('Failed to create structures: ', userId, structures);
    }
    return this;
  };
}
