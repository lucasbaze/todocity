// https://chakra-ui.com/docs/styled-system/theming/component-style
// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/button.ts
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
  },
  sizes: {
    xl: {
      p: '22px 62px',
      fontSize: '24',
    },
    lg: {
      p: '32px 48px',
      fontSize: '20',
    },
  },
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: mode('purple.600', 'purple.300')(props),
      borderRadius: 99,
      color: 'white',
      boxShadow:
        '0px 20px 25px -5px rgba(0, 0, 0, 0.15), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)',
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
    // 5. We can add responsive variants
    sm: {
      bg: 'teal.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    size: 'lg',
    variant: 'sm',
  },
};
