import { Suspense } from 'react';

import { NextPage } from 'next';

import { useAuth } from '@todocity/auth';
import { Game } from '@todocity/game';
import { Box } from '@todocity/ui/core';

const City: NextPage = () => {
  const { user, loading } = useAuth();

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
