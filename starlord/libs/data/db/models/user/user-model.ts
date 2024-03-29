import { User as TFirebaseUser } from 'firebase/auth';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import kebabCase from 'lodash/kebabCase';

import { TUser } from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { generate } from '@todocity/utils/referral-codes/referral-codes';

import { db } from '../../config/db';

export interface IUserModel {
  user: Partial<TUser>;
  createUser(params: Partial<TUser>): Promise<IUserModel>;
  updateUser(userId: string, values: Partial<TUser>): Promise<IUserModel>;
}

export class UserModel implements IUserModel {
  user: Partial<TUser> & { id: string };

  constructor() {
    this.user = null;
  }

  createUser = async (user: TFirebaseUser) => {
    const referralCode = getLocalStorage()?.getItem('@todocity:referral-code');
    const newUserDetails = {
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoUrl: user.photoURL,
      createdAt: new Date().toISOString(),
      referralCode: generate({
        prefix: `${kebabCase(user.displayName)}-`,
        charset: 'alphabetic',
        length: 6,
        count: 1,
      })[0],
      onboarding: {
        demoCompleted: false,
      },
      city: {
        cityName: null,
        powerLevel: 60,
        packages: [],
        stats: {
          completedTodos: 0,
          createdTodos: 5,
          lotPoints: 10,
          unlockedLots: 1,
          cityPoints: 4,
          structuresPlaced: 1,
        },
      },
      referrals: [],
      ...(referralCode ? { referredBy: referralCode } : {}),
    };

    try {
      if (referralCode) {
        getLocalStorage()?.removeItem('@todocity:referral-code');
      }
      await setDoc(doc(db, 'users', user.uid), newUserDetails);
      this.user = { ...newUserDetails, id: user.uid };
    } catch (error) {
      console.error('Failed to create new user: ', error);
    }

    return this;
  };

  updateUser = async (userId: string, values: Partial<TUser>) => {
    try {
      console.log('Attempting to update user: ', userId, values);
      await updateDoc(doc(db, 'users', userId), {
        ...values,
      });
      console.log('Updated User: ', userId, values);
    } catch (error) {
      console.error('Error updating user: ', userId, values);
    }
    return this;
  };
}
