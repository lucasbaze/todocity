import { increment } from 'firebase/firestore';

import { CityModel } from '../../../models/city/city-model';
import { PackageModel } from '../../../models/package/package-model';

export async function openPackage(userId: string, packageId: string) {
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
