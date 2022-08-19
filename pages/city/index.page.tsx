import { Suspense } from 'react';

import { NextPage } from 'next';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@todocity/firebase/client-app';
import { Game } from '@todocity/game';
import { Box } from '@todocity/ui/core';

const City: NextPage = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Suspense fallback={null}>
      <Game />
    </Suspense>
  );
};

export default City;
