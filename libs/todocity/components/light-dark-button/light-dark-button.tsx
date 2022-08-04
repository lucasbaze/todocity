import { useColorMode, Button } from '@chakra-ui/react';

export function LightDarkButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button variant={'solid'} onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  );
}
