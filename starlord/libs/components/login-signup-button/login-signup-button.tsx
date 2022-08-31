import React, { useEffect } from 'react';

import { GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '@todocity/firebase/client-app';
import { signInSuccessWithAuthResult } from '@todocity/firebase/users';
import { Box } from '@todocity/ui/core';

// Configure FirebaseUI.
const uiConfig = (navigateTo?: string): firebaseui.auth.Config => ({
  signInFlow: 'popup',
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: signInSuccessWithAuthResult(navigateTo),
  },
});

interface ILoginSignupProps {
  navigateTo?: string;
}

export function LoginSignup({ navigateTo }: ILoginSignupProps) {
  // TODO: This is stupid
  useEffect(() => {
    if (document) {
      const buttonText = document.querySelector('.firebaseui-idp-text-long');
      if (buttonText) buttonText.textContent = 'Continue with Google';
    }
  }, []);
  return (
    <Box minHeight="100px">
      <StyledFirebaseAuth uiConfig={uiConfig(navigateTo)} firebaseAuth={auth} />
    </Box>
  );
}

// Required for lazy loading
export default LoginSignup;
