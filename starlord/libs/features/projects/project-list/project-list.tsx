import React, { useRef, useState } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconEraser, IconPlus } from '@tabler/icons';
import { useFormik } from 'formik';
import { useHotkeys } from 'react-hotkeys-hook';
import * as Yup from 'yup';

import { useAuth } from '@todocity/auth';
import { clearCompletedTodos, createTodo } from '@todocity/data/db';
import { TTodoItem } from '@todocity/data/types';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Textarea,
  Tooltip,
} from '@todocity/ui/core';

import { TodoItem } from './todo-item/todo-item';

const validationSchema = Yup.object({
  title: Yup.string().required('Todo title is required'),
  description: Yup.string(),
});

export interface IProjectListProps {
  projectId: string;
  todos: TTodoItem[];
}

export function ProjectList({ projectId, todos }: IProjectListProps) {
  const { user } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const borderColor = useColorModeValue('gray.250', 'gray.600');

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      await createTodo(user.uid, projectId, values);
      formikHelpers.resetForm();
      setEdit(false);
      setTimeout(() => {
        containerRef?.current?.scrollTo({
          top: containerRef?.current.scrollHeight,
        });
      }, 10);
    },
  });

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSubmit = () => {
    formik.submitForm();
  };

  const handleClearCompletedTodos = async () => {
    if (todos.some((todo) => todo.completed)) {
      await clearCompletedTodos(projectId);
    }
  };

  const ref = useHotkeys(
    'cmd+return',
    (e, handler) => {
      handleSubmit();
    },
    { enableOnTags: ['TEXTAREA', 'INPUT'] }
  );

  return (
    <Box>
      <Box
        ref={containerRef}
        mb="4"
        maxHeight="400px"
        overflowY="auto"
        borderBottom="1px"
        borderColor={borderColor}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} projectId={projectId} {...todo} />
        ))}
      </Box>
      <Box px="4">
        {edit ? (
          <form onSubmit={(e) => e.preventDefault()}>
            <Flex direction="column">
              <FormControl
                isInvalid={formik.errors.title && formik.touched.title}
              >
                <Box
                  mb="3"
                  border="1px"
                  borderColor="gray.300"
                  borderRadius="5"
                >
                  <Input
                    id="title"
                    name="title"
                    variant="filled"
                    placeholder="Todo title..."
                    fontWeight="semibold"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    // isInvalid={formik.errors.title && formik.touched.title}
                  />
                  <Textarea
                    // TODO: Figure out this type properly
                    // @ts-ignore
                    ref={ref}
                    id="description"
                    name="description"
                    placeholder="Todo description..."
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    isInvalid={false}
                  />
                </Box>
                {formik.errors.title && (
                  <FormErrorMessage>{formik.errors.title}</FormErrorMessage>
                )}
              </FormControl>
              <Flex alignItems="center" justifyContent="flex-end" gap="3">
                <Box>
                  <Button
                    size="xs"
                    type="button"
                    colorScheme="gray"
                    variant="solid"
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
                <Box alignSelf="flex-end">
                  <Button
                    size="xs"
                    onClick={handleSubmit}
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
          <Flex gap={2}>
            <Box flex={1}>
              <Button
                colorScheme="purple"
                variant="solid"
                size="sm"
                leftIcon={<IconPlus />}
                onClick={() => setEdit(true)}
              >
                New Todo
              </Button>
            </Box>
            <Tooltip label="Clear all completed todos">
              <span>
                <IconButton
                  aria-label="erase"
                  variant="ghost"
                  size="md"
                  disabled={todos.some((todo) => !todo.completed)}
                  icon={<IconEraser />}
                  onClick={handleClearCompletedTodos}
                />
              </span>
            </Tooltip>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
