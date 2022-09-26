import React, { useState } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconPlus } from '@tabler/icons';
import { useFormik } from 'formik';

import { TTodoItem } from '@todocity/data/types';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Textarea,
} from '@todocity/ui/core';

import { TodoItem } from './todo-item/todo-item';

export interface IProjectListProps {
  projectId: string;
  todos: TTodoItem[];
}

export function ProjectList({ projectId, todos }: IProjectListProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const createTodoInProject = useLotsManagerStore(
    (state) => state.createTodoInProject
  );
  const borderColor = useColorModeValue('gray.250', 'gray.600');

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: (values, formikHelpers) => {
      createTodoInProject(projectId, values);
      formikHelpers.resetForm();
      setEdit(false);
    },
  });

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
      <Box px="6">
        {edit ? (
          <form onSubmit={formik.handleSubmit}>
            <Flex direction="column">
              <Box mb="3" border="1px" borderColor="gray.300" borderRadius="5">
                <FormControl>
                  <Input
                    id="title"
                    name="title"
                    variant="filled"
                    placeholder="My Todo"
                    fontWeight="semibold"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </FormControl>
                <FormControl>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="description"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </FormControl>
              </Box>
              <Flex alignItems="center" justifyContent="flex-end" gap="3">
                <Box>
                  <Button
                    size="xs"
                    type="button"
                    colorScheme="gray"
                    variant="solid"
                    // onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
                <Box alignSelf="flex-end">
                  <Button
                    size="xs"
                    type="submit"
                    colorScheme="purple"
                    variant="solid"
                  >
                    Save
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </form>
        ) : (
          <Button
            colorScheme="purple"
            variant="solid"
            size="sm"
            leftIcon={<IconPlus />}
            onClick={() => setEdit(true)}
          >
            New Todo
          </Button>
        )}
      </Box>
    </Box>
  );
}
