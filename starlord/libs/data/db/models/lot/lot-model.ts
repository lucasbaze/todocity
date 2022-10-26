import { addDoc, collection, doc } from 'firebase/firestore';

import { TLot } from '@todocity/data/types';

import { db } from '../../config/db';

export interface ILotModel {
  lots: Partial<TLot>;
  createLots(mapId: string, lots: Partial<TLot[]>): Promise<ILotModel>;
}

export class LotModel implements ILotModel {
  lots: Partial<TLot>;

  constructor() {
    this.lots = null;
  }

  createLots = async (userId: string, lots: Partial<TLot[]>) => {
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
