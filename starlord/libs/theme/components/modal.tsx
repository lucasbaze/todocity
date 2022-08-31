// https://chakra-ui.com/docs/styled-system/theming/component-style
import type { ComponentStyleConfig } from '@chakra-ui/theme';

// https://github.com/chakra-ui/chakra-ui/issues/4581#issuecomment-900011232
export const Modal: ComponentStyleConfig = {
  variants: {
    sidebarContent: {
      overlay: {},
      dialogContainer: {
        // background: 'orange.50',
        // p: { base: '1rem', md: '0' },
      },
      dialog: {
        borderRadius: '15px',
        position: 'absolute',
        bottom: '10vh',
        backgroundColor: 'orange.50',
        overflowY: 'auto',
      },
      header: {},
      closeButton: {},
      body: {},
      footer: {},
    },
  },
  defaultProps: {},
};
