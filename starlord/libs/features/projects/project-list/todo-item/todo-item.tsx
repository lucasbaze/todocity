import { MouseEventHandler, useState } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconCircle, IconCircleCheck } from '@tabler/icons';
import { useFormik } from 'formik';

import { TTodoItem } from '@todocity/data/types';
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

interface ICheckBox {
  completed?: boolean;
}

function CheckBox({ completed }: ICheckBox) {
  const [checked, setChecked] = useState<boolean>(completed);

  const handleClickComplete = (e) => {
    e.stopPropagation();
    setChecked((checked) => !checked);
  };

  return (
    <Box cursor="pointer" onClick={handleClickComplete}>
      {checked ? (
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

export interface ITodoItemProps extends TTodoItem {}

export function TodoItem({ title, description, completed }: ITodoItemProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const borderColor = useColorModeValue('gray.250', 'gray.600');

  const handleClick = () => {
    if (!edit) setEdit((edit) => !edit);
  };

  const handleCancel = () => {
    setEdit(false);
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
      console.log('Values: ', values);
      // Close the edit mode
      setEdit(false);
    },
  });

  return (
    <>
      {edit ? (
        <Box
          _last={{ borderBottom: 'none' }}
          borderBottom="1px"
          borderColor={borderColor}
          cursor="pointer"
          onClick={handleClick}
          py="3"
          pr="4"
        >
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
        <Box
          _last={{ borderBottom: 'none' }}
          borderBottom="1px"
          borderColor={borderColor}
          cursor="pointer"
          onClick={handleClick}
        >
          <Flex px="4" pt="3" pb="4">
            <Box mr="2">
              <CheckBox completed={completed} />
            </Box>
            <Box>
              <Text fontWeight="semibold" lineHeight={1.1} noOfLines={2}>
                {title}
              </Text>
              {description && (
                <Text noOfLines={1} variant="description" mt="1">
                  {description}
                </Text>
              )}
            </Box>
          </Flex>
        </Box>
      )}
    </>
  );
}
