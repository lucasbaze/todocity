import {
  connectFirestoreEmulator,
  getFirestore as _getFirestore,
} from 'firebase/firestore';

import { firebaseIsRunning, getApp } from '@todocity/data/config/firebase';

function getFirestore() {
  const isRunning = firebaseIsRunning();
  if (!isRunning) getApp();

  return _getFirestore();
}

export const db = getFirestore();

if (process.env.NEXT_PUBLIC_FIREBASE_EMULATE === 'true') {
  connectFirestoreEmulator(db, 'localhost', 8080);
}
