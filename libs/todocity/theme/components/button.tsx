// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { Props } from 'react-firebaseui';

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
  },
  sizes: {
    xl: {
      // fontSize: 'lg',
      p: '22px 62px',
      fontSize: '24',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    primary: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'purple.300' : 'purple.600',
      borderRadius: 99,
      color: 'white',
      boxShadow:
        '0px 20px 25px -5px rgba(0, 0, 0, 0.15), 0px 10px 10px -5px rgba(0, 0, 0, 0.1)',
    }),
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
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
