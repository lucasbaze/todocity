import { useColorMode } from '@chakra-ui/react';
import { IconBrightness2, IconMoon } from '@tabler/icons';

import { eventTriggers } from '@todocity/analytics';
import { AnalIconButton } from '@todocity/components';

export function LightDarkButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <AnalIconButton
      icon={colorMode === 'light' ? <IconMoon /> : <IconBrightness2 />}
      variant={'solid'}
      onClick={toggleColorMode}
      aria-label="light / dark mode button"
      analytics={{
        buttonName: eventTriggers.LIGHT_DARK_MODE,
        params: {
          mode: colorMode,
        },
      }}
    />
  );
}
