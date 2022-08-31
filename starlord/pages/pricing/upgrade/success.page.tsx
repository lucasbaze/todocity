import { useEffect, useState } from 'react';

import { useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Stripe from 'stripe';

import * as track from '@todocity/analytics/events/track';
import { useAuth } from '@todocity/auth';
import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Container } from '@todocity/ui/core';

async function getOrderData(url = '') {
  const response = await fetch(url);
  return response.json();
}

const UpgradeSuccessPage: NextPage = () => {
  const { sizes } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  const { user, loading: userLoading } = useAuth();
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
        setOrderData(data);
        setLoading(false);
        track.purchasePreOrder();
        // TODO, tie this purchase to the user
      });
    }
  }, [user, userLoading, sessionId]);

  if (loading) return null;
  if (!sessionId) router.push('/pricing');

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
