import { addDoc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';

import { structureRef, structuresRef } from '@todocity/data/db';
import { TStructure } from '@todocity/data/types';

export interface IStructureModel {
  structure: Partial<TStructure>;
  updateStructure(
    userId: string,
    structureId: string,
    value: Record<string, unknown>
  ): Promise<void>;
  getStructure(
    userId: string,
    structureId: string
  ): Promise<Partial<TStructure>>;
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

  updateStructure = async (
    userId: string,
    structureId: string,
    values: Record<string, unknown>
  ) => {
    try {
      console.log('Attempting to update structure: ', userId, structureId);
      await updateDoc(structureRef(userId, structureId), values);
      console.log('Updated structure: ', userId, structureId);
      return;
    } catch (error) {
      console.error('Failed to create structures: ', userId, structureId);
      return;
    }
  };

  getStructure = async (userId: string, structureId: string) => {
    try {
      console.log('Attempting to get structure: ', userId, structureId);
      const structureDoc = await getDoc(structureRef(userId, structureId));
      console.log('Retrieved structure: ', structureDoc);
      return { id: structureDoc.id, ...structureDoc.data() };
    } catch (error) {
      console.error('Failed to create structures: ', userId, structureId);
      return;
    }
  };

  createStructures = async (
    userId: string,
    structures: Omit<TStructure, 'id'>[]
  ) => {
    try {
      const structurePromises = structures.map(async (structure) => {
        console.log('Attempting to create structures: ', userId, structure);
        return await addDoc(structuresRef(userId), {
          ...structure,
          createdAt: serverTimestamp(),
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
