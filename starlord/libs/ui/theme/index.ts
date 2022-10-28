import { type ThemeConfig, extendTheme } from '@chakra-ui/react';

import { Accordion } from './components/accordion';
import { Alert } from './components/alert';
import { Avatar } from './components/avatar';
import { Badge } from './components/badge';
import { Button } from './components/button';
import { Container } from './components/container';
import { Divider } from './components/divider';
import { Link } from './components/link';
import { Modal } from './components/modal';
import { Text } from './components/text';
import { Tooltip } from './components/tooltip';
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
    Accordion,
    Alert,
    Avatar,
    Badge,
    Button,
    Container,
    Divider,
    Link,
    Modal,
    Text,
    Tooltip,
  },
});
