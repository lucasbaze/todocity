import {
  connectFunctionsEmulator,
  getFunctions as _getFunctions,
} from 'firebase/functions';

import { firebaseIsRunning, getApp } from '@todocity/data/config/firebase';

function getFunctions() {
  if (!firebaseIsRunning()) getApp();
  return _getFunctions(getApp());
}

export const functions = getFunctions();

if (process.env.NEXT_PUBLIC_FIREBASE_EMULATE === 'true') {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}
