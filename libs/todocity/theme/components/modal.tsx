// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';

// https://github.com/chakra-ui/chakra-ui/issues/4581#issuecomment-900011232
export const Modal: ComponentStyleConfig = {
  variants: {
    contactForm: {
      overlay: {},
      dialogContainer: {
        background: 'orange.50',
        p: { base: '1rem', md: '0' },
      },
      dialog: {
        // maxW: '800px',
        // px: { base: '1rem', md: '6rem' },
        // py: { base: '2rem', md: '3rem' },
        // my: 0,
        // bg: 'blackAlpha.700',
        // borderRadius: '0',
      },
      header: {
        // fontSize: '40px',
        // fontWeight: 400,
        // color: 'white',
      },
      closeButton: {
        // top: 8,
        // insetEnd: 8,
        // color: 'brand.green.hover',
        // fontSize: '20px',
        // zIndex: 2,
        // _focus: { boxShadow: 'none' },
        // _hover: { color: 'brand.green.active' },
      },
      footer: {
        // justifyContent: 'flex-start',
      },
    },
  },
  defaultProps: {},
};
