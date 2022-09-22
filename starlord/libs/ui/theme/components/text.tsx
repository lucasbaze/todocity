// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Text: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('gray.900', 'white')(props),
  }),
  sizes: {},
  variants: {
    h1: {
      fontWeight: 'bold',
      fontSize: { base: '40', sm: '48', md: '56' },
      lineHeight: '100%',
      letterSpacing: '-0.03em',
      py: { base: '2' },
    },
    h2: {
      fontSize: { base: '32', md: '40' },
      letterSpacing: '-0.03em',
      lineHeight: '120%',
    },
    h3: {
      fontSize: { base: '24', md: '30' },
      letterSpacing: '-0.05em',
      lineHeight: '120%',
    },
    bodyBig: {
      fontWeight: '400',
      fontSize: '18',
      lineHeight: '150%',
    },
    body: {
      fontWeight: '400',
      fontSize: '16',
      lineHeight: '150%',
    },
    inverseBody: {
      color: 'white',
      fontWeight: '400',
      fontSize: '16',
      lineHeight: '150%',
    },
    disclaimer: {
      fontWeight: 400,
      fontSize: '14',
      lineHeight: '150%',
    },
    description: (props: StyleFunctionProps) => ({
      color: mode('gray.700', 'gray.300')(props),
      lineHeight: '120%',
      fontSize: '14',
    }),
  },
  // The default size and variant values
  defaultProps: {
    variant: 'body',
  },
};
