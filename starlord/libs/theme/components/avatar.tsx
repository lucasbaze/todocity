// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Avatar: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: (props: StyleFunctionProps) => ({
      container: {
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: mode('orange.50', 'gray.900')(props),
      },
    }),
  },
};
