import { Suspense } from 'react';

import { NextPage } from 'next';

import { WithAuth } from '@todocity/auth';
import { Game } from '@todocity/game';
import { PageSEOMeta } from '@todocity/seo/page-seo/page-seo';

const CityPage: NextPage = () => {
  return (
    <>
      <PageSEOMeta title="City" metaTitle="City" />
      <Suspense fallback={null}>
        <Game />
      </Suspense>
    </>
  );
};

export default WithAuth(CityPage, { use3Dloader: true });
