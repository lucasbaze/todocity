import { increment } from 'firebase/firestore';
import { CityModel } from 'libs/data/db/models/city/city-model';
import { LotModel } from 'libs/data/db/models/lot/lot-model';

export async function unlockLot(
  userId: string,
  lotId: string,
  lotCost: number
) {
  try {
    // TODO: Fetch the user's stats and confrim "server side" the action is acceptable first
    // TODO: fetch the lot and return it as part of the update lot step
    // TODO: use the fetched lot's cost value instead of the client side passed value

    console.log('Attempting to unlock Lot: ', userId, lotId, lotCost);
    const lotModel = new LotModel();
    await lotModel.updateLot(userId, lotId, {
      'land.locked': false,
    });

    const cityModel = new CityModel();
    await cityModel.updateCity(userId, {
      'stats.unlockedLots': increment(1),
      'stats.lotPoints': increment(-lotCost),
    });
    console.log('Updated lot and user city stats: ', userId, lotId, lotCost);
  } catch (error) {
    console.error('Failed to unlock lot: ', userId, lotId, lotCost);
  }
}
