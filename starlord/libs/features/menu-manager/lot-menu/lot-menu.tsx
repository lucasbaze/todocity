import { useFirestoreDocumentData } from '@react-query-firebase/firestore';
import { IconFence } from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import { unlockLot, userRef } from '@todocity/data/db';
import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { Box, Button, Flex, Icon, Text, Tooltip } from '@todocity/ui/core';

export interface ILotMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function LotMenu({ id, cssPosition, content, onClose }: ILotMenuProps) {
  const { user } = useAuth();
  const cityStatsQuery = useFirestoreDocumentData(
    ['user', user.uid],
    userRef(user.uid),
    {
      subscribe: true,
    },
    {
      select: (data) => data.city.stats,
    }
  );

  const handleUnlock = async () => {
    if (cityStatsQuery.data?.lotPoints >= content.land.cost) {
      const res = await unlockLot(user.uid, id, content.land.cost);
      onClose(id);
    }
  };

  return (
    <DraggableMenu
      id={id}
      position={cssPosition}
      width="300px"
      header={
        <Box>
          <Text fontSize="20px">{content.land.name}</Text>
          <Text variant="description">{content.land.description}</Text>
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
                {content.land.cost}
                <Icon as={IconFence} />
              </Text>
            </Text>
          </Flex>
          <Box>
            <Flex justifyContent="flex-end" alignItems="center">
              <Tooltip
                isDisabled={cityStatsQuery.data?.lotPoints >= content.land.cost}
                label="You do not have enough lot points"
              >
                <Box>
                  <Button
                    colorScheme="purple"
                    variant="solid"
                    size="xs"
                    onClick={handleUnlock}
                    disabled={
                      cityStatsQuery.data?.lotPoints < content.land.cost
                    }
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
