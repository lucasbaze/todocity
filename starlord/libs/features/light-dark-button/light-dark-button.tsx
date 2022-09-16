import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IconBrightness2, IconMoon } from '@tabler/icons';

import { eventTriggers } from '@todocity/analytics/events/constants';

import { AnalIconButton } from '../../data/analytics/components/anal-icon-button/anal-icon-button';

// TODO: Use chakra cli to generate usable types
interface ILightDarkButtonProps {
  variant?: 'ghost' | 'solid';
  size?: 'sm' | 'lg';
  isRound?: boolean;
}

export function LightDarkButton({
  variant,
  size,
  isRound = false,
}: ILightDarkButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<IconMoon />, <IconBrightness2 />);

  return (
    <AnalIconButton
      icon={icon}
      variant={variant}
      onClick={toggleColorMode}
      aria-label="light / dark mode button"
      isRound={isRound}
      size={size}
      analytics={{
        buttonName: eventTriggers.LIGHT_DARK_MODE,
        params: {
          mode: colorMode,
        },
      }}
    />
  );
}
