import { User, UserCredential } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import router from 'next/router';

import { db } from '../client-app';

export function addNewUserToFireStore(user: User) {
  const details = {
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoUrl: user.photoURL,
    unlockedLots: 3,
    cityPoints: 15,
  };
  setDoc(doc(db, 'users', user.uid), details)
    .then((doc) => {
      console.log('New user Created: ', doc);
      router.push('/home');
    })
    .catch((e) => {
      console.error('Error creating new user: ', e);
    });
}

export function signInSuccessWithAuthResult(authResult: UserCredential) {
  console.log('AuthResult: ', authResult.user);

  const userDocRef = doc(db, 'users', authResult.user.uid);
  getDoc(userDocRef)
    .then((doc) => {
      if (doc.exists()) {
        // Navigate to the app
        console.log('user already exists: ', doc);
        router.push('/city');
      } else {
        addNewUserToFireStore(authResult.user);
      }
    })
    .catch((error) => {
      console.error('Checking if user exists failed" ' + error);
    });

  // Required do not remove
  return false;
}
