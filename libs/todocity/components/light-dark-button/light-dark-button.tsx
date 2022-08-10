import { useColorMode, IconButton } from '@chakra-ui/react';
import { IconMoon, IconBrightness2 } from '@tabler/icons';

export function LightDarkButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      icon={colorMode === 'light' ? <IconMoon /> : <IconBrightness2 />}
      variant={'solid'}
      onClick={toggleColorMode}
      aria-label="light / dark mode button"
    />
  );
}
