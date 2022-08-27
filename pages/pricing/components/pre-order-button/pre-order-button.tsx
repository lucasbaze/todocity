import { useState } from 'react';

import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { AnalButton } from '@todocity/components/anal-button/anal-button';
import { auth } from '@todocity/firebase/client-app';

export function PreOrderButton() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [loadingCheckoutSession, setLoadingCheckoutSession] =
    useState<boolean>(false);

  const handlePreorder = async () => {
    if (user) {
      setLoadingCheckoutSession(true);
      router.push('/api/stripe/create-checkout-session');
    } else {
      router.push('/signup?navigate_to=checkout');
    }
  };

  return (
    <AnalButton
      variant="primary"
      size="lg"
      isLoading={loadingCheckoutSession}
      analytics={{ buttonName: 'buy-now' }}
      onClick={handlePreorder}
    >
      Pre-order today
    </AnalButton>
  );
}

// Required for lazy-loading
export default PreOrderButton;
