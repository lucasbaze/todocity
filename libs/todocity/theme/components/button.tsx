// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: 'bold', // Normally, it is "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  // 3. We can add a new visual variant
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    // 4. We can override existing variants
    solid: (props: StyleFunctionProps) => ({
      bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
    // 5. We can add responsive variants
    sm: {
      bg: 'teal.500',
      fontSize: 'md',
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    size: 'lg', // default is md
    variant: 'sm', // default is solid
    colorScheme: 'green', // default is gray
  },
};
