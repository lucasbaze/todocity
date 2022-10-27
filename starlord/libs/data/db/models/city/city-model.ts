import { updateDoc } from 'firebase/firestore';

import { userRef } from '@todocity/data/db';
import { TCity } from '@todocity/data/types';

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
      for (let key in newValues) {
        newValues[`city.${key}`] = newValues[key];
        delete newValues[key];
      }
      console.log('Attempting to update City for user: ', userId, newValues);
      await updateDoc(userRef(userId), newValues);
      console.log('Updated City for user: ', userId, newValues);
    } catch (error) {
      console.error('Failed to create new user: ', error);
    }
    return this;
  };
}
