// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Text: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontFamily: 'Helvetica',
    color: props.colorMode === 'dark' ? 'white' : 'gray.900',
  }),
  sizes: {},
  variants: {
    hero: {
      fontWeight: 'bold',
      fontSize: { base: '30', md: '72' },
      lineHeight: '100%',
      pb: { base: '12' },
    },
    h1: (props: StyleFunctionProps) => ({
      fontWeight: 'bold',
      fontSize: { base: '30', md: '40' },
      letterSpacing: '-0.03em',
    }),
    h2: {
      fontWeight: 'light',
      color: 'pink',
      fontSize: { base: '30', md: '40' },
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: 'Inter',
      fontWeight: 'light',
      fontSize: { base: '25', md: '30' },
      lineHeight: '120%',
      letterSpacing: '-0.03em',
    },
    bodyBig: {
      fontWeight: '400',
      fontSize: '16',
      lineHeight: '120%',
    },
    body: {
      fontWeight: '400',
      fontSize: 'lg',
      lineHeight: '150%',
    },
    disclaimer: {
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '11',
      lineHeight: '150%',
    },
    label: {
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: '12',
      lineHeight: 'normal',
    },
    mono: {
      fontFamily: 'Roboto',
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    uppercaseAccent: {
      fontFamily: 'Roboto',
      textTransform: 'uppercase',
      color: 'brand.green.active',
      lineHeight: '1.3em',
      fontSize: '10',
    },
    footerTitle: {
      fontFamily: 'Roboto',
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
