import React from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconPlus } from '@tabler/icons';

import { Box, Button } from '@todocity/ui/core';

import { TTodoItem } from '../types';
import { ProjectListHeader } from './project-list-header/project-list-header';
import { TodoItem } from './todo-item/todo-item';

export interface IProjectListProps {
  todos: TTodoItem[];
}

export function ProjectList({ todos }: IProjectListProps) {
  const borderColor = useColorModeValue('gray.250', 'gray.600');
  return (
    <Box>
      <Box pl="6" pb="4" borderBottom="1px" borderColor={borderColor}>
        <ProjectListHeader title="Header" description="Description" />
      </Box>
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
