import { GoogleAuthProvider } from 'firebase/auth';
import firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { auth } from '@todocity/firebase/client-app';
import { signInSuccessWithAuthResult } from '@todocity/firebase/users';
import { Box } from '@todocity/ui/core';

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
        labelType === 'signup' ? 'Sign up with Google' : 'Sign in with Google',
    },
  ],
  callbacks: {
    signInSuccessWithAuthResult: signInSuccessWithAuthResult(navigateTo),
  },
});

interface ILoginSignupProps {
  labelType?: 'signup' | 'login';
  navigateTo?: string;
}

export function LoginSignup({
  labelType = 'signup',
  navigateTo,
}: ILoginSignupProps) {
  return (
    <Box minHeight="100px">
      <StyledFirebaseAuth
        uiConfig={uiConfig(labelType, navigateTo)}
        firebaseAuth={auth}
      />
    </Box>
  );
}

// Required for lazy loading
export default LoginSignup;
