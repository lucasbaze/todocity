import { useRef, useState } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';
import { useFirestoreDocumentMutation } from '@react-query-firebase/firestore';
import { IconCircle, IconCircleCheck } from '@tabler/icons';
import { useFormik } from 'formik';

import { projectTodoRef } from '@todocity/data/db';
import { TCriteria, TTodoItem } from '@todocity/data/types';
import {
  AnimatedPointsAdd,
  AnimatedPointsSubtract,
} from '@todocity/features/animations/complete-todo-animation';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Icon,
  Input,
  Text,
  Textarea,
} from '@todocity/ui/core';

// TODO: fix bad setState call. See console for warning in dev
interface ICheckBox {
  completed: boolean;
  setCompleted: () => void;
}

function CheckBox({ completed, setCompleted }: ICheckBox) {
  const handleClickComplete = (e) => {
    e.stopPropagation();
    setCompleted();
  };

  return (
    <Box cursor="pointer" onClick={handleClickComplete}>
      {completed ? (
        <Icon as={IconCircleCheck} h="5" w="5" />
      ) : (
        <Icon
          as={IconCircle}
          _hover={{ color: 'gray.600' }}
          color="gray.300"
          h="5"
          w="5"
        />
      )}
    </Box>
  );
}

// TODO: extract this into a separate function
// TODO: Remove the "completeDemo", Hacky
function checkCriteria(
  criteria?: TCriteria,
  completeDemo?: () => void
): boolean {
  if (!criteria) {
    return true;
  }
  switch (criteria.target) {
    case 'lot':
      const unlockedLots = useLotsManagerStore.getState().unlockedLots;
      if (unlockedLots >= criteria.value) {
        return true;
      }
      return false;
    case 'todo':
      if (criteria.state === 'created') {
        const createdTodos = useLotsManagerStore.getState().createdTodos;
        if (createdTodos >= criteria.value) {
          return true;
        }
      }
      if (criteria.state === 'completed') {
        const completedTodos = useLotsManagerStore.getState().completedTodos;
        if (completedTodos >= criteria.value) {
          // TODO: Definitely a hack, only for demo purposes
          // Core concept: Completing actions triggers other actions
          // Needs to be extracted if the functionality will be used
          completeDemo && completeDemo();
          return true;
        }
      }
      return false;
    case 'structure':
      const placedStructures = useLotsManagerStore.getState().structuresPlaced;
      if (placedStructures >= criteria.value) {
        return true;
      }
      return false;
    default:
      return true;
  }
}

export interface ITodoItemProps extends TTodoItem {
  projectId: string;
}

export function TodoItem({
  projectId,
  title,
  description,
  completed,
  criteria,
  id: todoId,
}: ITodoItemProps) {
  const toast = useToast();
  const todoContainerRef = useRef<HTMLDivElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(completed);

  const mutation = useFirestoreDocumentMutation(
    projectTodoRef(projectId, todoId),
    { merge: true }
  );

  const { completeTodo, unCompleteTodo, completeDemo } = useLotsManagerStore(
    (state) => ({
      completeTodo: state.completeTodo,
      unCompleteTodo: state.unCompleteTodo,
      completeDemo: state.completeDemo,
    })
  );
  const borderColor = useColorModeValue('gray.250', 'gray.600');

  const handleClick = () => {
    if (!edit) setEdit((edit) => !edit);

    // Wait for div to open before scrolling into view
    // Allows container to resize
    setTimeout(() => {
      todoContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }, 0);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  const handleMarkComplete = () => {
    if (checkCriteria(criteria, completeDemo)) {
      setChecked((checked) => {
        if (checked) {
          // unCompleteTodo(projectId, todoId);
          mutation.mutate({
            completed: false,
          });
        } else {
          mutation.mutate({
            completed: true,
          });
          // completeTodo(projectId, todoId);
        }

        return !checked;
      });
    } else {
      toast({
        title: 'Not yet!',
        description: 'You must do the action first!',
        status: 'error',
        position: 'top-right',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  /*
	 TODO: Move to separate component
	*/

  const formik = useFormik({
    initialValues: {
      title,
      description,
    },
    onSubmit: (values, formikHelpers) => {
      // Saving to local state. This needs to be move to data driven state
      // console.log('Values: ', values);
      mutation.mutate({
        ...values,
      });
      // Close the edit mode
      setEdit(false);
    },
  });

  return (
    <Box
      ref={todoContainerRef}
      _last={{ borderBottom: 'none' }}
      borderBottom="1px"
      borderColor={borderColor}
      cursor="pointer"
    >
      {edit ? (
        <Box py="3" pr="4">
          <form onSubmit={formik.handleSubmit}>
            <Flex direction="column">
              <Box pb="3">
                <FormControl
                  pl="26px" // WARNING: magic number from padding to match edit & non edit state ( see above )
                >
                  <Input
                    id="title"
                    name="title"
                    variant="filled"
                    fontWeight="semibold"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                  />
                </FormControl>
                <FormControl
                  pl="26px" // WARNING: magic number from padding to match edit & non edit state ( see above )
                >
                  <Textarea
                    id="description"
                    name="description"
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
                    onClick={handleCancel}
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
        </Box>
      ) : (
        <Box onClick={handleClick}>
          <Flex px="4" pt="3" pb="4" pr="16">
            <Box mr="2">
              <CheckBox completed={checked} setCompleted={handleMarkComplete} />
            </Box>
            <Box flex={1}>
              <Text
                as={checked ? 's' : undefined}
                fontWeight="semibold"
                lineHeight={1.1}
                noOfLines={2}
              >
                {title}
              </Text>
              {description && (
                <Text
                  as={checked ? 's' : undefined}
                  noOfLines={1}
                  variant="description"
                  mt="1"
                >
                  {description}
                </Text>
              )}
            </Box>
            <Box position="relative">
              <AnimatedPointsAdd completed={completed} />
              <AnimatedPointsSubtract completed={completed} />
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}
