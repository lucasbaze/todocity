import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

import { eventTriggers } from '@todocity/analytics/events/constants';
import { useAuth } from '@todocity/auth';

import { AnalButton } from '../anal-button/anal-button';

interface ICreateAccountButtonProps {
  size?: 'lg' | 'xl';
  ctaText?: string;
}

export const CreateAccountButton = ({
  size = 'xl',
  ctaText,
}: ICreateAccountButtonProps) => {
  const { user, loading } = useAuth();

  return (
    <>
      <Link href={user ? '/city' : '/signup'}>
        <AnalButton
          variant="primary"
          size={size}
          mb="2"
          isLoading={loading}
          analytics={{ buttonName: eventTriggers.MAIN_CTA }}
        >
          {user ? (
            <>
              Go to Your City <IconArrowRight />
            </>
          ) : (
            ctaText || 'Create your city'
          )}
        </AnalButton>
      </Link>
    </>
  );
};

// Required for lazy loading
export default CreateAccountButton;
