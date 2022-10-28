import { useState } from 'react';

import {
  useFirestoreDocumentData,
  useFirestoreQueryData,
} from '@react-query-firebase/firestore';
import { IconBuildingCommunity } from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import {
  placeStructure,
  structuresQueryRef,
  unlockStructure,
  userRef,
} from '@todocity/data/db';
import type { TMenu, TStructure } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  Tooltip,
} from '@todocity/ui/core';

export interface ILibraryMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function LibraryMenu({
  id,
  cssPosition,
  onClose,
  content,
}: ILibraryMenuProps) {
  const { user } = useAuth();
  const [selected, setSelected] = useState<string | null>(null);

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

  const { setPreviewModel, removePreviewModel } = useLotsManagerStore(
    (state) => ({
      setPreviewModel: state.setPreviewModel,
      removePreviewModel: state.removePreviewModel,
    })
  );

  const structuresQuery = useFirestoreQueryData(
    ['structures'],
    structuresQueryRef(user.uid),
    { subscribe: true }
  );

  const handleSelect = (struct: TStructure) => {
    setPreviewModel(content.lotId, struct.src);
    setSelected(struct.id);
  };

  const handleClose = () => {
    removePreviewModel();
    onClose(id);
  };

  const handlePlace = async () => {
    const res = await placeStructure(user.uid, content.lotId, selected);
    onClose(id);
  };

  const handleUnlockBuilding = async (
    structId: string,
    structureCost: number
  ) => {
    const res = await unlockStructure(user.uid, structId, structureCost);
  };

  return (
    <DraggableMenu
      id={id}
      position={cssPosition}
      width="320px"
      header={
        <Box>
          <Text fontSize="20px">My Library</Text>
          <Text variant="description">
            Your library holds the buildings you can use to create new todo
            lists
          </Text>
        </Box>
      }
      body={
        <Box position="relative" mx="4" py="2">
          <Grid
            alignItems="center"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            my="2"
          >
            {structuresQuery.data?.map((struct, i) => (
              <Tooltip
                key={struct.id}
                sx={{
                  borderWidth: '2px',
                  borderColor: 'purple.600',
                  borderRadius: '10',
                }}
                label={
                  <Box width="120px" height="120px">
                    <Text fontWeight="bold">{struct.details.name}</Text>
                    <Text lineHeight="1.2">{struct.details.description}</Text>
                  </Box>
                }
                placement={i % 2 !== 0 ? 'left' : 'right'}
              >
                {struct.details.locked ? (
                  <Box
                    position="relative"
                    borderRadius={10}
                    overflow="hidden"
                    _hover={{
                      '> .locked-cover': {
                        visibility: 'visible',
                      },
                    }}
                  >
                    <Box cursor="pointer">
                      <Box
                        position="relative"
                        borderRadius={10}
                        height="135px"
                        width="135px"
                        border="2px"
                        borderColor={
                          selected === struct.id ? 'purple.600' : 'gray.300'
                        }
                        boxShadow={selected === struct.id && 'lg'}
                        overflow="hidden"
                      >
                        <Image
                          src={struct.thumbnailSrc}
                          filter="grayscale(100%)"
                          width="200px"
                          alt={struct.details.name}
                        />
                      </Box>
                    </Box>
                    <Box
                      className="locked-cover"
                      visibility="hidden"
                      display="flex"
                      position="absolute"
                      justifyContent="center"
                      alignItems="center"
                      cursor="pointer"
                      top={0}
                      right={0}
                      left={0}
                      bottom={0}
                      bg="blackAlpha.300"
                    >
                      <Button
                        variant="solid"
                        size="xs"
                        colorScheme="purple"
                        onClick={() =>
                          handleUnlockBuilding(struct.id, struct.details.cost)
                        }
                        _disabled={{
                          colorScheme: 'purple',
                          opacity: 0.8,
                          cursor: 'not-allowed',
                        }}
                        disabled={
                          cityStatsQuery?.data.cityPoints < struct.details.cost
                        }
                      >
                        Unlock: {struct.details.cost}{' '}
                        <Icon as={IconBuildingCommunity} />
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box onClick={() => handleSelect(struct)} cursor="pointer">
                    <Box
                      position="relative"
                      borderRadius={10}
                      height="135px"
                      width="135px"
                      border="2px"
                      borderColor={
                        selected === struct.id ? 'purple.600' : 'gray.300'
                      }
                      boxShadow={selected === struct.id && 'lg'}
                      overflow="hidden"
                    >
                      <Image
                        src={struct.thumbnailSrc}
                        width="200px"
                        alt={struct.details.name}
                      />
                    </Box>
                  </Box>
                )}
              </Tooltip>
            ))}
          </Grid>
        </Box>
      }
      footer={
        <>
          {selected !== null && (
            <Box bottom={0} left={0} right={0} bg="blackAlpha.400">
              <Flex alignItems="center" justifyContent="center" p="2">
                <Button
                  variant="solid"
                  colorScheme="purple"
                  size="sm"
                  onClick={handlePlace}
                >
                  Place Building
                </Button>
              </Flex>
            </Box>
          )}
        </>
      }
      onClose={handleClose}
    />
  );
}
