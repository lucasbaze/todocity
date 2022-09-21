import { IconCircle, IconCircleCheck } from '@tabler/icons';

import { Box, Flex, Icon, Text } from '@todocity/ui/core';

import { TTodoItem } from '../types';

interface ICheckBox {
  completed?: boolean;
}

function CheckBox({ completed }: ICheckBox) {
  return (
    <Box cursor="pointer">
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

export interface ITodoItemProps extends TTodoItem {}

export function TodoItem({ title, description, completed }: ITodoItemProps) {
  return (
    <Box>
      <Flex borderTop="1px" borderColor="gray.250" px="4" py="3">
        <Box mr="2">
          <CheckBox completed={completed} />
        </Box>
        <Box>
          <Text fontWeight="semibold" lineHeight={1.1} noOfLines={2}>
            {title}
          </Text>
          {description && (
            <Text noOfLines={1} fontSize="14" color="gray.700" mt="1">
              {description}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
