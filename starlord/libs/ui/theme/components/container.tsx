// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Container: ComponentStyleConfig = {
  baseStyle: {
    padding: { base: '0 1em', sm: '0 1em', lg: '0 1em' },
    maxWidth: '1170px',
  },
  variants: {
    'two-column-md': {
      padding: { base: '0 1em', sm: '0 4em', lg: '0 8em' },
    },
  },
};
