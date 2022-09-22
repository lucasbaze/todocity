import { Meta, Story } from '@storybook/react';

import { ITodoItemProps, TodoItem } from './todo-item';

export default {
  component: TodoItem,
  title: 'Components/TodoItem',
  parameters: {
    docs: {
      description: {
        component: 'TodoItem',
      },
    },
  },
} as Meta;

const Template: Story<ITodoItemProps> = (args) => <TodoItem {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  title: 'My first todo',
};
