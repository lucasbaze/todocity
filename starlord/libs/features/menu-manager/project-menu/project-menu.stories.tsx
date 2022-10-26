import { Meta, Story } from '@storybook/react';

import { IProjectMenuProps, ProjectMenu } from './project-menu';

export default {
  component: ProjectMenu,
  title: 'Components/ProjectMenu',
  parameters: {
    docs: {
      description: {
        component: 'ProjectMenu',
      },
    },
  },
} as Meta;

const Template: Story<IProjectMenuProps> = (args) => <ProjectMenu {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  cssPosition: { left: 5, top: 5 },
  content: {
    land: {
      size: [5, 5],
      name: 'something',
      description: 'project',
      cost: 2,
      locked: false,
    },
    lotId: 'lot-id-1',
    projectId: 'my-first-project',
  },
};
