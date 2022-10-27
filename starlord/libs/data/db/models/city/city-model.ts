import { runTransaction } from 'firebase/firestore';

import { userRef } from '@todocity/data/db';
import { TCity } from '@todocity/data/types';

import { db } from '../../config/db';

export interface ICityModel {
  city: Partial<TCity>;
  updateCity(
    userId: string,
    values: Record<string, unknown>
  ): Promise<ICityModel>;
}

export class CityModel implements ICityModel {
  city: Partial<TCity> & { id: string };

  constructor() {
    this.city = null;
  }

  updateCity = async (userId: string, values: Record<string, unknown>) => {
    try {
      const newValues = { ...values };
      await runTransaction(db, async (transaction) => {
        const userDoc = await transaction.get(userRef(userId));
        if (!userDoc.exists()) {
          throw 'User does not exist!';
        }

        // Append `city` to all values for update
        for (let key in newValues) {
          newValues[`city.${key}`] = newValues[key];
          delete newValues[key];
        }

        // Enfore rules for powerLevel to not max over 100 or under 0
        if (newValues['city.powerLevel']) {
          newValues['city.powerLevel'] = Math.min(
            100,
            Math.max(
              0,
              userDoc.data().city.powerLevel + newValues['city.powerLevel']
            )
          );
        }

        console.log('Attempting to update City for user: ', userId, newValues);
        transaction.update(userRef(userId), newValues);
      });
      console.log('Updated City for user: ', userId, newValues);
    } catch (error) {
      console.error('Failed to create new user: ', error);
    }
    return this;
  };
}
