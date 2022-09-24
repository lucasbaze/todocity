import { Meta, Story } from '@storybook/react';

import { ILotMenuProps, LotMenu } from './lot-menu';

export default {
  component: LotMenu,
  title: 'Components/LotMenu',
  parameters: {
    docs: {
      description: {
        component: 'TodoItem',
      },
    },
  },
} as Meta;

const Template: Story<ILotMenuProps> = (args) => <LotMenu {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  name: 'Lot 420',
  description: 'Your neighbors might smell funny...',
  cost: 34,
  locked: false,
};
