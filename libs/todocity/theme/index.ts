import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { Button } from './components/button';
import { Container } from './components/container';
import { Text } from './components/text';
import { colors } from './foundations/colors';
import { fontSizes } from './foundations/font-sizes';
import { sizes } from './foundations/sizes';
import { styles } from './styles';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  colors,
  fontSizes,
  sizes,
  styles,
  components: {
    Button,
    Container,
    Text,
  },
});
