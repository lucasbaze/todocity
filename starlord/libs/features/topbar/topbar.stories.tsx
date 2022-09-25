import { Meta, Story } from '@storybook/react';

import { ITopBarProps, TopBar } from './topbar';

export default {
  component: TopBar,
  title: 'Components/TopBar',
  parameters: {
    docs: {
      description: {
        component: 'TopBar',
      },
    },
  },
} as Meta;

const Template: Story<ITopBarProps> = (args) => <TopBar {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  cityName: 'Demo City',
};
