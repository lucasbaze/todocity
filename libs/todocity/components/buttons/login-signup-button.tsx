import React from 'react';

import { GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth, signInSuccessWithAuthResult } from '@todocity/firebase';
import { Box } from '@todocity/ui/core';

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
  return (
    <Box minHeight="100px">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </Box>
  );
}

// Required for lazy loading
export default LoginSignup;
