import React from 'react';

import { GoogleAuthProvider, User, UserCredential } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, signInSuccessWithAuthResult } from '@todocity/firebase';

// Configure FirebaseUI.
const uiConfig: firebaseui.auth.Config = {
  signInSuccessUrl: '/city',
  signInFlow: 'popup',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: signInSuccessWithAuthResult,
  },
};

export function LoginSignup() {
  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
}
