import { User as TFirebaseUser } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import kebabCase from 'lodash/kebabCase';

import { TUser } from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { generate } from '@todocity/utils/referral-codes/referral-codes';

import { db } from '../../config/db';

export interface IUserModel {
  user: Partial<TUser>;
  createUser(params: Partial<TUser>): Promise<IUserModel>;
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
}
