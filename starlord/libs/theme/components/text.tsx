// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Text: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    color: mode('gray.900', 'white')(props),
  }),
  sizes: {},
  variants: {
    hero: {
      fontWeight: 'bold',
      fontSize: { base: '48', md: '72' },
      lineHeight: '100%',
      letterSpacing: '-3px',
      py: { base: '6', md: '4' },
    },
    h1: (props: StyleFunctionProps) => ({
      fontWeight: 'bold',
      fontSize: { base: '36', md: '40' },
      letterSpacing: '-0.03em',
    }),
    h2: {
      fontSize: { base: '30', md: '28' },
      letterSpacing: '-0.05em',
      lineHeight: '120%',
      pb: { base: '8' },
    },
    h3: {
      fontWeight: 'regular',
      fontSize: { base: '24', md: '24' },
      lineHeight: '120%',
      letterSpacing: '-0.03em',
    },
    bodyBig: {
      fontWeight: '400',
      fontSize: '18',
      lineHeight: '120%',
    },
    body: {
      fontWeight: '400',
      fontSize: '16',
      lineHeight: '150%',
    },
    inverseBody: (props: StyleFunctionProps) => ({
      color: 'white',
      fontWeight: '400',
      fontSize: '16',
      lineHeight: '150%',
    }),
    disclaimer: {
      fontWeight: 400,
      fontSize: '14',
      lineHeight: '150%',
    },
    label: {
      fontWeight: '400',
      fontSize: '12',
      lineHeight: 'normal',
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    uppercaseAccent: {
      textTransform: 'uppercase',
      color: 'brand.green.active',
      lineHeight: '1.3em',
      fontSize: '10',
    },
    footerTitle: {
      mb: '1.5rem',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'uppercase',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: 'body',
  },
};
