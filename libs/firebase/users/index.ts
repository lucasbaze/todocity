import { User, UserCredential } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import router from 'next/router';

import * as track from '@todocity/analytics/events/track';

import { db } from '../client-app';

export async function addNewUserToFireStore(user: User) {
  const details = {
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoUrl: user.photoURL,
    unlockedLots: 3,
    cityPoints: 15,
    createdAt: new Date(),
  };
  try {
    await setDoc(doc(db, 'users', user.uid), details);
    console.log('New user Created');
  } catch (e) {
    console.error('Error creating new user: ', e);
  }
}

export async function updateUserLastLoginDate(user: User) {
  const details = {
    lastLoginAt: new Date(),
  };
  try {
    const updatedDoc = await updateDoc(doc(db, 'users', user.uid), details);
    console.log('User Login last login updated: ', updatedDoc);
  } catch (e) {
    console.error('Error creating new user: ', e);
  }
}

export const signInSuccessWithAuthResult =
  (navigateTo = '/city') =>
  (authResult: UserCredential) => {
    const userDocRef = doc(db, 'users', authResult.user.uid);
    getDoc(userDocRef)
      .then((doc) => {
        if (doc.exists()) {
          track.login();
          updateUserLastLoginDate(authResult.user);
          router.push(navigateTo);
        } else {
          track.signup();
          addNewUserToFireStore(authResult.user);
          router.push(navigateTo);
        }
      })
      .catch((error) => {
        console.error('Checking if user exists failed" ' + error);
      });

    // Required do not remove
    return false;
  };
