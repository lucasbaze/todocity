import { useState } from 'react';

import { useRouter } from 'next/router';

import { AnalButton } from '@todocity/analytics/components/anal-button/anal-button';
import { useAuth } from '@todocity/auth';

export function PreOrderButton({
  variant = 'primary',
  size = 'lg',
  ctaText = 'Pre-order Today',
}) {
  const router = useRouter();
  const { user } = useAuth();
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
      variant={variant}
      size={size}
      isLoading={loadingCheckoutSession}
      analytics={{ buttonName: 'buy-now' }}
      onClick={handlePreorder}
    >
      {ctaText}
    </AnalButton>
  );
}

// Required for lazy-loading
export default PreOrderButton;
