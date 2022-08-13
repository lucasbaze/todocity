import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

import { Badge } from './components/badge';
import { Button } from './components/button';
import { Container } from './components/container';
import { Text } from './components/text';
import { colors } from './foundations/colors';
import { fontSizes } from './foundations/font-sizes';
import { sizes } from './foundations/sizes';
import { zIndices } from './foundations/z-indices';
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
  zIndices,
  components: {
    Badge,
    Button,
    Container,
    Text,
  },
});
