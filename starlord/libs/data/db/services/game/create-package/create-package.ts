import { arrayUnion } from 'firebase/firestore';

import { CityModel } from '../../../models/city/city-model';
import { PackageModel } from '../../../models/package/package-model';

export async function createPackage(userId: string) {
  // Create new package
  const packageModel = new PackageModel();
  const newPackage = await packageModel.createPackage(userId);

  // Update power level of the city
  const powerReduction =
    Math.max(newPackage.cityPoints, newPackage.lotPoints) * 3;

  const cityModel = new CityModel();
  await cityModel.updateCity(userId, {
    powerLevel: -powerReduction,
    packages: arrayUnion(newPackage),
  });
}
