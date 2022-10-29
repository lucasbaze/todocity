import { arrayRemove, getDoc, updateDoc } from 'firebase/firestore';

import { TPackage } from '@todocity/data/types';
import { getUid } from '@todocity/utils/global/get-uid';

import { userRef } from '../../refs/refs';

export interface IPackageModel {
  package: Partial<TPackage>;
  createPackage: (userId: string) => Promise<TPackage>;
  removePackage: (userId: string, packageId: string) => Promise<TPackage>;
}

export class PackageModel implements IPackageModel {
  package: Partial<TPackage>;

  constructor() {
    this.package = null;
  }

  /**
   * "Sucks" power from the city, but gives power level points afterward
   */
  createPackage = async (userId: string) => {
    let newPackage: TPackage = { id: getUid(), cityPoints: 0, lotPoints: 0 };
    try {
      const userDoc = await getDoc(userRef(userId));
      if (!userDoc.exists()) {
        throw 'User does not exist!';
      }

      const currPowerLevel = userDoc.data().city.powerLevel;
      const structuresPlaced = userDoc.data().city.stats.structuresPlaced;

      if (Math.random() > 0.6) {
        newPackage.cityPoints = Math.round(
          structuresPlaced + currPowerLevel / 20
        );
      } else {
        newPackage.lotPoints = Math.round(
          structuresPlaced + currPowerLevel / (Math.random() * 20)
        );
      }
      console.log('Created package: ', userId, newPackage);
    } catch (error) {
      console.error('Failed to create package: ', userId, error);
    }
    return newPackage;
  };

  removePackage = async (
    userId: string,
    packageId: string
  ): Promise<TPackage> => {
    try {
      const userDoc = await getDoc(userRef(userId));
      if (!userDoc.exists()) {
        throw 'User does not exist!';
      }

      const cityPackages = userDoc.data().city.packages;
      const packageToOpen = cityPackages.find(
        (pack: TPackage) => pack.id === packageId
      );

      if (!packageToOpen) {
        throw 'No package to open';
      }

      await updateDoc(userRef(userId), {
        'city.packages': arrayRemove(packageToOpen),
      });

      return packageToOpen;
    } catch (error) {
      console.error('Failed to open package: ', userId, packageId);
    }
  };
}
