// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Accordion: ComponentStyleConfig = {
  baseStyle: {
    panel: {
      py: '4',
      px: '0',
    },
    button: {
      py: '6',
      px: '0',
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
};
