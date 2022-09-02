import { Suspense } from 'react';

import { NextPage } from 'next';

import { useAuth } from '@todocity/auth';
import { Game } from '@todocity/game';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';
import { Box } from '@todocity/ui/core';

const City: NextPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      <PageSEOMeta title="City" metaTitle="City" />
      <Suspense fallback={null}>
        <Game />
      </Suspense>
    </>
  );
};

export default City;
