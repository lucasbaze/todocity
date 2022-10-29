import { ButtonProps } from '@chakra-ui/react';
import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

import { eventTriggers } from '@todocity/analytics/events/constants';
import { useAuth } from '@todocity/auth';
import { Icon } from '@todocity/ui/core';

import { AnalButton } from '../../../analytics/components/anal-button/anal-button';

// TODO: use Chakra ui typescript
interface ICreateAccountButtonProps {
  size: ButtonProps['size'];
  ctaText?: string;
  includeAsterisk?: boolean;
}

export const CreateAccountButton = ({
  size = 'xl',
  ctaText,
  includeAsterisk,
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
          _hover={{
            '> .arrow-right': {
              transform: 'translateX(10px)',
            },
          }}
        >
          {user ? (
            <>
              Go to Your City <IconArrowRight className="arrow-right" />
            </>
          ) : (
            ctaText || (
              <>
                Create Your City{includeAsterisk && '*'}
                <Icon
                  as={IconArrowRight}
                  ml="2"
                  transition="transform 0.2s"
                  className="arrow-right"
                />
              </>
            )
          )}
        </AnalButton>
      </Link>
    </>
  );
};

// Required for lazy loading
export default CreateAccountButton;
