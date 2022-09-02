import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

import { useAuth } from '@todocity/auth';
import { Button } from '@todocity/ui/core';

interface ICreateAccountButtonProps {
  mobile?: boolean;
}

export const HeaderLoginButton = ({ mobile }: ICreateAccountButtonProps) => {
  const { user, loading } = useAuth();

  return (
    <>
      <Link href={user ? '/city' : '/login'}>
        <Button variant="outline" size="md" isLoading={loading}>
          {user ? (
            <>
              To City <IconArrowRight />
            </>
          ) : (
            'Login'
          )}
        </Button>
      </Link>
      {mobile && !user && (
        <Link href="/signup">
          <Button variant="outline" size="md" ml="4">
            Signup
          </Button>
        </Link>
      )}
    </>
  );
};

// Required for lazy loading
export default HeaderLoginButton;
