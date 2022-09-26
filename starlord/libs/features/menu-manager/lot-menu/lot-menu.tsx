import { IconFence } from '@tabler/icons';

import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Box, Button, Flex, Icon, Text, Tooltip } from '@todocity/ui/core';

export interface ILotMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function LotMenu({ id, cssPosition, content, onClose }: ILotMenuProps) {
  const { lotPoints, unlockLot } = useLotsManagerStore((state) => ({
    lotPoints: state.lotPoints,
    unlockLot: state.unlockLot,
  }));

  console.log('Lots Points: ', lotPoints, unlockLot);

  const handleUnlock = () => {
    if (lotPoints >= content.cost) {
      unlockLot(content.lotId);
      onClose(id);
    }
  };

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
        <Box p="4">
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
              <Tooltip
                isDisabled={lotPoints >= content.cost}
                label="You do not have enough lot points"
              >
                <Box>
                  <Button
                    colorScheme="purple"
                    variant="solid"
                    size="xs"
                    onClick={handleUnlock}
                    disabled={lotPoints < content.cost}
                  >
                    Unlock
                  </Button>
                </Box>
              </Tooltip>
            </Flex>
          </Box>
        </Box>
      }
      onClose={() => onClose(id)}
    />
  );
}
