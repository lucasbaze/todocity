import React, { useState } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconPlus } from '@tabler/icons';
import { useFormik } from 'formik';
import { useHotkeys } from 'react-hotkeys-hook';
import * as Yup from 'yup';

import { TTodoItem } from '@todocity/data/types';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Textarea,
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
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      createTodoInProject(projectId, values);
      formikHelpers.resetForm();
      setEdit(false);
    },
  });

  const handleCancel = () => {
    setEdit(false);
  };

  const handleSubmit = () => {
    formik.submitForm();
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
      <Box px="6">
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
                    placeholder="My Todo"
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
                    placeholder="description"
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
