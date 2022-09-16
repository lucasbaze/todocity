import { getApp as _getApp, getApps, initializeApp } from 'firebase/app';

const firebaseProdConfig = {
  apiKey: 'AIzaSyAyHecyXFvLh6Yhi6mwaeKPSZBLQWeB0Ac',
  authDomain: 'todocity-prod.firebaseapp.com',
  projectId: 'todocity-prod',
  storageBucket: 'todocity-prod.appspot.com',
  messagingSenderId: '504423188071',
  appId: '1:504423188071:web:f5c7f7324b882fe56236c2',
  measurementId: 'G-RPF6D29PBR',
};

const firebaseDevConfig = {
  apiKey: 'AIzaSyAeeBs0vLtY8VXJokhhYG0-APjiUNsi3hA',
  authDomain: 'todocity-dev.firebaseapp.com',
  projectId: 'todocity-dev',
  storageBucket: 'todocity-dev.appspot.com',
  messagingSenderId: '163658879554',
  appId: '1:163658879554:web:d9e1558de5450257e913db',
  measurementId: 'G-441VTK2MCS',
};

const firebaseEmulateConfig = {
  ...firebaseDevConfig,
  projectId: 'demo-todocity',
};

const clientCredentials =
  process.env.NEXT_PUBLIC_FIREBASE_EMULATE === 'true'
    ? firebaseEmulateConfig
    : process.env.NEXT_PUBLIC_WEB_APP_ENV === 'production'
    ? firebaseProdConfig
    : firebaseDevConfig;

export const firebaseIsRunning = () => !!getApps().length;

export function getApp() {
  if (!firebaseIsRunning()) initializeApp(clientCredentials);

  return _getApp();
}
