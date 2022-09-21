import { Meta, Story } from '@storybook/react';

import { createMockTodoItem } from '../mocks';
import { ITodoListProps, TodoList } from './todo-list';

export default {
  component: TodoList,
  title: 'Components/TodoList',
  parameters: {
    docs: {
      description: {
        component: 'TodoItem',
      },
    },
  },
} as Meta;

const Template: Story<ITodoListProps> = (args) => <TodoList {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  todos: [...Array(10)].map(() => createMockTodoItem()),
};
