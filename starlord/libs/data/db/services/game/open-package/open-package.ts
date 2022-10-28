import { increment } from 'firebase/firestore';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';

import { CityModel } from '../../../models/city/city-model';
import { PackageModel } from '../../../models/package/package-model';

export async function openPackage(userId: string, packageId: string) {
  // Update local countdown
  // NOTE: race-condition requires this comes first!
  useLotsManagerStore.setState({ countdownStart: Date.now() + 5 * 60000 });

  // Remove opened package
  const packageModel = new PackageModel();
  const openedPackage = await packageModel.removePackage(userId, packageId);

  // Update city stats
  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    'stats.cityPoints': increment(openedPackage.cityPoints),
    'stats.lotPoints': increment(openedPackage.lotPoints),
  });
}
