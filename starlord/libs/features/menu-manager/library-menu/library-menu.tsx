import { useState } from 'react';

import { AnalButton } from '@todocity/analytics/components/anal-button/anal-button';
import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { structures } from '@todocity/stores/initial-structures';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Box, Button, Flex, Grid, Image, Text } from '@todocity/ui/core';

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
  const { setPreviewModel, removePreviewModel, placeModel } =
    useLotsManagerStore((state) => ({
      setPreviewModel: state.setPreviewModel,
      removePreviewModel: state.removePreviewModel,
      placeModel: state.placeModel,
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
    placeModel(content.lotId, selected);
    onClose(id);
  };

  return (
    <DraggableMenu
      position={cssPosition}
      width="300px"
      header={
        <Flex justifyContent="space-between">
          <Text fontSize="20px">My Library</Text>
          <AnalButton
            variant="outline"
            colorScheme="purple"
            size="xs"
            analytics={{ buttonName: 'experiment-marketplace' }}
          >
            Marketplace
          </AnalButton>
        </Flex>
      }
      body={
        <Box position="relative" px="4">
          <Grid
            alignItems="center"
            templateColumns="repeat(2, 1fr)"
            gap={4}
            my="2"
          >
            {structures.map((struct) => (
              <Box
                key={struct.id}
                onClick={() => handleSelect(struct.id)}
                cursor="pointer"
              >
                <Box
                  position="relative"
                  borderRadius={10}
                  height="120px"
                  width="120px"
                  border="2px"
                  margin="0 auto"
                  borderColor={
                    selected === struct.id ? 'purple.600' : 'gray.300'
                  }
                  boxShadow={selected === struct.id && 'lg'}
                  overflow="hidden"
                >
                  <Image src="https://picsum.photos/200" alt={struct.name} />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="blackAlpha.400"
                  >
                    <Flex alignItems="center" justifyContent="center" p="2">
                      <Text fontWeight="bold" color="white">
                        {struct.name}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
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
