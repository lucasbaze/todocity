import { Meta, Story } from '@storybook/react';

import { ILibraryMenuProps, LibraryMenu } from './library-menu';

export default {
  component: LibraryMenu,
  title: 'Components/LibraryMenu',
  parameters: {
    docs: {
      description: {
        component: 'LibraryMenu',
      },
    },
  },
} as Meta;

const Template: Story<ILibraryMenuProps> = (args) => <LibraryMenu {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  id: '1',
  onClose: () => alert('closing'),
  type: 'library',
  cssPosition: {
    left: 5,
    top: 5,
  },
};
