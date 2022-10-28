import { runTransaction, updateDoc } from 'firebase/firestore';

import { TCity } from '@todocity/data/types';

import { db } from '../../config/db';
import { userRef } from '../../refs/refs';

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
      // Append `city` to all values for update
      for (let key in newValues) {
        newValues[`city.${key}`] = newValues[key];
        delete newValues[key];
      }

      if (newValues['powerLevel']) {
        await runTransaction(db, async (transaction) => {
          const userDoc = await transaction.get(userRef(userId));
          if (!userDoc.exists()) {
            throw 'User does not exist!';
          }

          // Enfore rules for powerLevel to not max over 100 or under 0
          newValues['city.powerLevel'] = Math.min(
            100,
            Math.max(
              0,
              userDoc.data().city.powerLevel + newValues['city.powerLevel']
            )
          );

          console.log(
            'Attempting to update City for user: ',
            userId,
            newValues
          );
          transaction.update(userRef(userId), newValues);
        });
      } else {
        console.log('Attempting to update City for user: ', userId, newValues);
        await updateDoc(userRef(userId), newValues);
      }
      console.log('Updated City for user: ', userId, newValues);
    } catch (error) {
      console.error('Failed to create new user: ', error);
    }
    return this;
  };
}
