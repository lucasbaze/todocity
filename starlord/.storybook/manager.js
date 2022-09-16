import { addons } from '@storybook/addons';

import { collapseAll } from './custom';
import theme from './theme';

addons.setConfig({
  theme,
  sidebar: {
    collapsedRoots: collapseAll,
  },
});
