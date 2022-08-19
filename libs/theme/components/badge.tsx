// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Badge: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    sm: {
      borderRadius: '4',
      px: '2',
      py: '0',
    },
    md: {
      borderRadius: '8',
      px: '2',
      py: '1',
    },
  },
};
