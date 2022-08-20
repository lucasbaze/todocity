import { useEffect, useState } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Stripe from 'stripe';

import { events } from '@todocity/analytics/events';
import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { auth } from '@todocity/firebase/client-app';
import { Container } from '@todocity/ui/core';

async function getOrderData(url = '') {
  const response = await fetch(url);
  return response.json();
}

const UpgradeSuccessPage: NextPage = () => {
  const { sizes } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const [user, userLoading, error] = useAuthState(auth);
  const [orderData, setOrderData] = useState<{
    session: Stripe.Checkout.Session;
    customer: Stripe.Customer;
  } | null>(null);

  const sessionId = router.query.session_id;

  useEffect(() => {
    if (user && !userLoading && sessionId) {
      getOrderData(
        `/api/stripe/get-order-success?session_id=${sessionId}`
      ).then((data) => {
        console.log('Data: ', data);
        setOrderData(data);
        setLoading(false);
        window.dataLayer?.push({
          event: events.PURCHASE,
        });
        // TODO, tie this purchase to the user
      });
    }
  }, [user, userLoading, sessionId]);

  if (loading) return null;
  if (!sessionId) router.push('/pricing');
  if (error) {
    // Always log any errors that come out of the error object
  }

  if (user && orderData) {
    return (
      <MainLayout>
        <Container
          display="grid"
          alignItems="center"
          minHeight={`calc(100vh - ${sizes.header})`}
        >
          Payment Success!!
          {`${JSON.stringify(orderData)}`}
        </Container>
      </MainLayout>
    );
  } else {
    router.push('/pricing');
  }

  return null;
};

export default UpgradeSuccessPage;
