// https://chakra-ui.com/docs/styled-system/theming/component-style
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Button: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {
    xl: {
      p: '22px 62px',
      fontSize: '24',
      fontWeight: 'bold',
    },
    lg: {
      p: '32px 48px',
      fontSize: '22',
      fontWeight: 'bold',
    },
    md: {
      p: '28px 32px',
      fontSize: '20',
    },
    sm: {
      p: '8px 16px',
      height: 'auto',
      fontSize: '16',
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: 'purple.600',
      borderRadius: 99,
      color: 'white',
      boxShadow:
        '0px 20px 25px -5px rgba(0, 0, 0, 0.15), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)',
      _hover: {
        bg: mode('purple.700', 'purple.500')(props),
      },
    }),
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    ghost: (props: StyleFunctionProps) => ({
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    }),
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => ({
      // bg: props.colorMode === 'dark' ? 'white' : 'gray.900',
    }),
    outline: (props: StyleFunctionProps) => ({
      borderWidth: '1px',
      borderColor: mode('#000000', '#ffffff')(props),
    }),
    link: (props: StyleFunctionProps) => ({
      color: mode('#000000', '#ffffff')(props),
      _hover: {
        textDecorationColor: mode('#000000', '#fffffff')(props),
      },
    }),
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
  },
};
