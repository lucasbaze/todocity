// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/tooltip.ts
import type { ComponentStyleConfig } from '@chakra-ui/theme';
import { cssVar, mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const $bg = cssVar('tooltip-bg');
const $arrowBg = cssVar('popper-arrow-bg');

export const Tooltip: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => {
    const bg = mode('orange.50', 'gray.900')(props);
    return {
      color: mode('gray.900', 'white')(props),
      // Haven't looking into CssVar, simply modified example from above
      [$bg.variable]: `colors.${bg}`,
      bg: [$bg.reference],
      [$arrowBg.variable]: [$bg.reference],
      py: 2,
      px: 3,
      borderRadius: '6px',
    };
  },
};
