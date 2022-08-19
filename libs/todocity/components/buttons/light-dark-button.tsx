import { useColorMode } from '@chakra-ui/react';
import { IconBrightness2, IconMoon } from '@tabler/icons';

import { eventTriggers } from '@todocity/analytics/events';
import { AnalIconButton } from '@todocity/components/icon-button/icon-button';

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
  return (
    <AnalIconButton
      icon={colorMode === 'light' ? <IconMoon /> : <IconBrightness2 />}
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
