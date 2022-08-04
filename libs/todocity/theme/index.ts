import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { Button } from './components/button';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  components: {
    Button,
  },
});
