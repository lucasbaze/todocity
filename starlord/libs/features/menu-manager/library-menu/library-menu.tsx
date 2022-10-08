import { useState } from 'react';

import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { structures } from '@todocity/stores/initial-structures';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Button,
  Flex,
  Grid,
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
  const [selected, setSelected] = useState<string | null>(null);
  const { setPreviewModel, removePreviewModel, placeStructure } =
    useLotsManagerStore((state) => ({
      setPreviewModel: state.setPreviewModel,
      removePreviewModel: state.removePreviewModel,
      placeStructure: state.placeStructure,
    }));

  const handleSelect = (modelId: string) => {
    setPreviewModel(content.lotId, modelId);
    setSelected(modelId);
  };

  const handleClose = () => {
    removePreviewModel();
    onClose(id);
  };

  const handlePlace = () => {
    placeStructure(content.lotId, selected);
    onClose(id);
  };

  // const stru

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
          {/* <AnalButton
            variant="outline"
            colorScheme="purple"
            size="xs"
            analytics={{ buttonName: 'experiment-marketplace' }}
          >
            Marketplace
          </AnalButton> */}
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
            {structures.map((struct, i) => (
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
                <Box onClick={() => handleSelect(struct.id)} cursor="pointer">
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
