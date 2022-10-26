import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

import { TLot, TStructure } from '@todocity/data/types';

import { db } from '../../config/db';
import { lotRef } from '../../refs/refs';

export interface ILotModel {
  lot: Partial<TLot>;
  lots: Partial<TLot>[];
  getLot(userId: string, lotId: string): Promise<ILotModel>;
  createLots(mapId: string, lots: Partial<TLot[]>): Promise<ILotModel>;
}

export class LotModel implements ILotModel {
  lot: Partial<TLot>;
  lots: Partial<TLot>[];

  constructor() {
    this.lots = null;
  }

  getLot = async (userId: string, lotId: string) => {
    try {
      console.log('Attempting to get lot: ', userId, lotId);
      const lot = await getDoc(lotRef(userId, lotId));
      this.lot = lot;
    } catch (error) {
      console.log('Failed to get lot: ', lotId, error);
    }
    return this;
  };

  addStructure = async (
    userId: string,
    lotId: string,
    structure: TStructure
  ) => {
    await updateDoc(lotRef(userId, lotId), {
      structures: arrayUnion(structure),
    });
  };

  createLots = async (userId: string, lots: Partial<TLot>[]) => {
    try {
      const lotPromises = lots.map(async (lot) => {
        console.log('Attempting to create lot: ', userId, lot);
        const mapDocRef = doc(db, 'users', userId);
        const lotRef = collection(mapDocRef, 'lots');
        return await addDoc(lotRef, lot);
      });
      const createdLots = await Promise.all(lotPromises);
      console.log('Created Lots: ', createdLots);
    } catch (error) {
      console.log('Failed to create lots: ', lots, error);
    }

    return this;
  };
}
