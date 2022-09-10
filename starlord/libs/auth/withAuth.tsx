import { useEffect, useState } from 'react';

import { ThreeDLoader } from '../components/three-d-loader/three-d-loader';
import { Flex, Spinner } from '../ui/core';
import { getWindow } from '../utils/global/get-window';
import { useAuth } from './useAuth';

type TOptions = {
  redirectTo?: string;
  use3Dloader?: boolean;
};

export function WithAuth<TProps, TInjectedKeys extends keyof TProps>(
  Component: React.JSXElementConstructor<TProps>,
  options?: TOptions
) {
  return function ComponentWithAuth(props: Omit<TProps, TInjectedKeys>) {
    const [hasUser, setHasUser] = useState<boolean>(false);
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!user && !loading) {
        getWindow<{ location: Location }>()?.location.assign(
          options?.redirectTo ?? '/login'
        );
      }
      if (user && !loading) {
        setHasUser(true);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    if (hasUser) {
      return <Component {...(props as TProps)} {...options} />;
    }

    return (
      <Flex
        height="100vh"
        width="100vw"
        justifyContent="center"
        alignItems="center"
      >
        {options?.use3Dloader ? <ThreeDLoader /> : <Spinner />}
      </Flex>
    );
  };
}
