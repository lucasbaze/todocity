import { Meta, Story } from '@storybook/react';

import { createMockTodoItem } from '../mocks';
import { IProjectListProps, ProjectList } from './project-list';

export default {
  component: ProjectList,
  title: 'Components/ProjectList',
  parameters: {
    docs: {
      description: {
        component: 'TodoItem',
      },
    },
  },
} as Meta;

const Template: Story<IProjectListProps> = (args) => <ProjectList {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  todos: [...Array(7)].map(() => createMockTodoItem()),
};
