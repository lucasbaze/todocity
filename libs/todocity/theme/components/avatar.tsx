// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Avatar: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: (props: StyleFunctionProps) => ({
      container: {
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: props.colorMode === 'dark' ? 'gray.900' : 'orange.50',
      },
    }),
  },
};
