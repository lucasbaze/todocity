import { Box } from '@todocity/ui/core';

import { TodoItem } from '../todo-item/todo-item';
import { TTodoItem } from '../types';

export interface ITodoListProps {
  todos: TTodoItem[];
}

export function TodoList({ todos }: ITodoListProps) {
  return (
    <Box>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <TodoItem {...todo} />
        </Box>
      ))}
    </Box>
  );
}
