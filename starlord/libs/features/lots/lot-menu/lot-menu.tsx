import { IconFence } from '@tabler/icons';

import { Box, Button, Divider, Flex, Icon, Text } from '@todocity/ui/core';

import { TLand } from '../../../game/types';

export interface ILotMenuProps
  extends Pick<TLand, 'cost' | 'description' | 'name' | 'locked'> {}

export function LotMenu({ name, description, cost, locked }: ILotMenuProps) {
  return (
    <Box>
      <Box pb="4">
        <Box pb="4">
          <Text fontSize="20px">{name}</Text>
          <Text variant="description">{description}</Text>
        </Box>
        <Flex alignItems="center">
          <Text display="flex" variant="description" alignItems="center">
            Price:
            <Text
              variant="disclaimer"
              fontWeight="semibold"
              display="flex"
              alignItems="center"
              ml="1"
            >
              {cost}
              <Icon as={IconFence} />
            </Text>
          </Text>
        </Flex>
      </Box>
      <Divider mb="2" />
      <Box>
        <Flex justifyContent="flex-end" alignItems="center">
          <Button
            colorScheme="purple"
            variant="solid"
            size="xs"
            disabled={locked}
          >
            Unlock
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
