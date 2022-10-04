import { useState } from 'react';

import { GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '@todocity/data/auth';
import { signInSuccessWithAuthResult } from '@todocity/data/db';
import { Box, Button, Spinner } from '@todocity/ui/core';
interface ILoginSignupProps {
  labelType?: 'signup' | 'login';
  navigateTo?: string;
}

export function LoginSignup({
  labelType = 'signup',
  navigateTo,
}: ILoginSignupProps) {
  const [loading, setLoading] = useState<boolean>(false);

  // Configure FirebaseUI.
  const uiConfig = (
    labelType: 'signup' | 'login',
    navigateTo?: string
  ): firebaseui.auth.Config => ({
    signInFlow: 'popup',
    signInOptions: [
      {
        provider: GoogleAuthProvider.PROVIDER_ID,
        fullLabel:
          labelType === 'signup'
            ? 'Sign up with Google'
            : 'Sign in with Google',
      },
    ],
    callbacks: {
      signInSuccessWithAuthResult: signInSuccessWithAuthResult(navigateTo, () =>
        setLoading(true)
      ),
    },
  });

  return (
    <Box minHeight="100px">
      {loading && <Spinner />}
      <StyledFirebaseAuth
        uiConfig={uiConfig(labelType, navigateTo)}
        firebaseAuth={auth}
      />
    </Box>
  );
}

// Required for lazy loading
export default LoginSignup;
