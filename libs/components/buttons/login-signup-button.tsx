import React from 'react';

import { GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '@todocity/firebase/client-app';
import { signInSuccessWithAuthResult } from '@todocity/firebase/users';
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
