// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

// https://github.com/chakra-ui/chakra-ui/issues/4581#issuecomment-900011232
export const Modal: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    overlay: {},
    dialogContainer: {},
    dialog: {
      borderRadius: '15px',
      backgroundColor: mode('orange.50', 'gray.900')(props),
      overflowY: 'auto',
    },
    header: {},
    closeButton: {},
    body: {},
    footer: {},
  }),
  variants: {},
  defaultProps: {},
};
