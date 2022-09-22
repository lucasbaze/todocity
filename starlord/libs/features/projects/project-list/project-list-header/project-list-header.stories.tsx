import { Meta, Story } from '@storybook/react';

import {
  IProjectListHeaderProps,
  ProjectListHeader,
} from './project-list-header';

export default {
  component: ProjectListHeader,
  title: 'Components/ProjectListHeader',
  parameters: {
    docs: {
      description: {
        component: 'TodoItem',
      },
    },
  },
} as Meta;

const Template: Story<IProjectListHeaderProps> = (args) => (
  <ProjectListHeader {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  title: 'My First Todo List',
  description: 'This is for partying',
};
