/* eslint-disable react/no-unescaped-entities */
import { getFunctions, httpsCallable } from 'firebase/functions';

import { MainLayout } from '@todocity/components/layouts/main-layout/main-layout';
import { Button, Container } from '@todocity/ui/core';

export function FunctionsTest() {
  const handleTrigger = async () => {
    const functions = getFunctions();
    const addMessage = httpsCallable(functions, 'addMessage');
    const result = await addMessage({ text: 'Will this work?' });
    console.log('Result: ', result);
  };

  console.log('Web app env: ', process.env.NEXT_PUBLIC_WEB_APP_ENV);

  return (
    <MainLayout>
      <Container>
        <Button variant="primary" onClick={handleTrigger}>
          Trigger Function
        </Button>
      </Container>
    </MainLayout>
  );
}

export default FunctionsTest;
