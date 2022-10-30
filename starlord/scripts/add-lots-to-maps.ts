import { addDoc, collection, doc } from 'firebase/firestore';

import { db } from '../libs/data/db/config/db';
import type { TLot } from '../libs/data/types/index';

async function createLots(mapId: string, lots: Partial<TLot[]>) {
  try {
    const lotPromises = lots.map(async (lot) => {
      console.log('Attempting to create lot: ', lot);
      const mapDocRef = doc(db, 'maps', mapId);
      const lotsRef = collection(mapDocRef, 'lots');
      return await addDoc(lotsRef, lot);
    });
    const createdLots = await Promise.all(lotPromises);
    console.log('Created Lots: ', createdLots);
  } catch (error) {
    console.log('Failed to create lots: ', lots, error);
  }
  process.exit(1);
}

// TODO: Upate this to be more generic in the future if needed
// Basically a practice migration
// createLots('80d3oGwQJTitodpJrQ5d', initialLots);
