import { connectAuthEmulator, getAuth as _getAuth } from 'firebase/auth';

import { firebaseIsRunning, getApp } from '@todocity/data/config/firebase';

function getAuth() {
  if (!firebaseIsRunning()) getApp();
  return _getAuth();
}

export const auth = getAuth();

if (process.env.NEXT_PUBLIC_FIREBASE_EMULATE === 'true') {
  connectAuthEmulator(auth, 'http://localhost:9099');
}
