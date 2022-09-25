import { IconFence } from '@tabler/icons';

import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { Box, Button, Flex, Icon, Text } from '@todocity/ui/core';

export interface ILotMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function LotMenu({ id, cssPosition, content, onClose }: ILotMenuProps) {
  return (
    <DraggableMenu
      position={cssPosition}
      width="300px"
      header={
        <Box>
          <Text fontSize="20px">{content.name}</Text>
          <Text variant="description">{content.description}</Text>
        </Box>
      }
      body={
        <>
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
                {content.cost}
                <Icon as={IconFence} />
              </Text>
            </Text>
          </Flex>
          <Box>
            <Flex justifyContent="flex-end" alignItems="center">
              <Button
                colorScheme="purple"
                variant="solid"
                size="xs"
                // onClick={}
                disabled={content.locked}
              >
                Unlock
              </Button>
            </Flex>
          </Box>
        </>
      }
      onClose={() => onClose(id)}
    />
  );
}
