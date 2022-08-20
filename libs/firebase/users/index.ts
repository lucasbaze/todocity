import { User, UserCredential } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import router from 'next/router';

import { events } from '@todocity/analytics/events';

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
    const newDoc = await setDoc(doc(db, 'users', user.uid), details);
    console.log('New user Created: ', newDoc);
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

export function signInSuccessWithAuthResult(authResult: UserCredential) {
  console.log('AuthResult: ', authResult.user);

  const userDocRef = doc(db, 'users', authResult.user.uid);
  getDoc(userDocRef)
    .then((doc) => {
      if (doc.exists()) {
        // Navigate to the app
        console.log('user already exists: ', doc);
        // Analytics trigger
        window.dataLayer?.push({
          event: events.LOGIN,
        });
        updateUserLastLoginDate(authResult.user);
        router.push('/city');
      } else {
        window.dataLayer?.push({
          event: events.SIGN_UP,
        });
        addNewUserToFireStore(authResult.user);
        router.push('/city');
      }
    })
    .catch((error) => {
      console.error('Checking if user exists failed" ' + error);
    });

  // Required do not remove
  return false;
}
