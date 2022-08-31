// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/link.ts
import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    _hover: {
      textDecorationColor: 'gray.300',
    },
  },
  sizes: {},
  variants: {
    headerNav: {
      _hover: {
        textDecorationColor: 'gray.900',
      },
    },
  },
};
