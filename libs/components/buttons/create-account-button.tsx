import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';

import { eventTriggers } from '@todocity/analytics/events';
import { AnalButton } from '@todocity/components/buttons/button';
import { auth } from '@todocity/firebase/client-app';

export const CreateAccountButton = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Link href={user ? '/city' : '/signup'}>
        <AnalButton
          variant="primary"
          size="xl"
          mb="2"
          isLoading={loading}
          analytics={{ buttonName: eventTriggers.MAIN_CTA }}
        >
          {user ? (
            <>
              Go to Your City <IconArrowRight />
            </>
          ) : (
            'Create your city'
          )}
        </AnalButton>
      </Link>
    </>
  );
};

// Required for lazy loading
export default CreateAccountButton;