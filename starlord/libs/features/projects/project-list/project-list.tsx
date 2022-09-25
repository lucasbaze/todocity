import React from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconPlus } from '@tabler/icons';

import { TTodoItem } from '@todocity/data/types';
import { Box, Button } from '@todocity/ui/core';

import { TodoItem } from './todo-item/todo-item';

export interface IProjectListProps {
  todos: TTodoItem[];
}

export function ProjectList({ todos }: IProjectListProps) {
  const borderColor = useColorModeValue('gray.250', 'gray.600');
  return (
    <Box>
      <Box
        mb="4"
        maxHeight="400px"
        overflowY="auto"
        borderBottom="1px"
        borderColor={borderColor}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </Box>
      <Box pl="6">
        <Button
          colorScheme="purple"
          variant="solid"
          size="sm"
          leftIcon={<IconPlus />}
        >
          New Todo
        </Button>
      </Box>
    </Box>
  );
}
