import { useColorModeValue, useTheme } from '@chakra-ui/react';
import { IconBuildingCommunity, IconFence, IconListCheck } from '@tabler/icons';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Badge, Box, Flex, Icon, Text, Tooltip } from '@todocity/ui/core';

export interface ITopBarProps {
  cityName: string;
}

export function TopBar({ cityName }: ITopBarProps) {
  const { completedTodos, lotPoints, cityPoints } = useLotsManagerStore(
    (state) => ({
      completedTodos: state.completedTodos,
      lotPoints: state.lotPoints,
      cityPoints: state.cityPoints,
    })
  );
  const { zIndices } = useTheme();
  const backgroundColor = useColorModeValue('orange.50', 'gray.900');

  return (
    <Flex
      left="50%"
      top="5"
      transform="translateX(-50%)"
      boxShadow="xl"
      borderRadius={20}
      py="2"
      px="4"
      position="fixed"
      minWidth="300px"
      height="44px"
      alignItems="center"
      zIndex={zIndices.overlay}
      backgroundColor={backgroundColor}
    >
      <Box flex={1} alignItems="center">
        <Text fontWeight="bold">{cityName}</Text>
      </Box>
      <Flex fontWeight="bold" flex={1} justifyContent="flex-end" gap={3}>
        <Box>
          <Tooltip
            label={
              <Flex direction="column" mt="1">
                <Flex gap="2">
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                    Completed
                  </Badge>
                </Flex>
                <Box mt="1">Total todos completed today</Box>
              </Flex>
            }
            hasArrow
            offset={[0, 20]}
          >
            <Flex alignItems="center" cursor="pointer">
              <Icon as={IconListCheck} />
              {completedTodos}
            </Flex>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            label={
              <Flex direction="column" mt="1">
                <Flex gap="2">
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                    Lot Points
                  </Badge>
                </Flex>
                <Box mt="1">Used to unlock more lots</Box>
              </Flex>
            }
            hasArrow
            offset={[0, 20]}
          >
            <Flex alignItems="center" cursor="pointer">
              <Icon as={IconFence} />
              {lotPoints}
            </Flex>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip
            label={
              <Flex direction="column" mt="1">
                <Flex gap="2">
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                    City Points
                  </Badge>
                </Flex>
                <Box mt="1">Used to grow your city</Box>
              </Flex>
            }
            hasArrow
            offset={[0, 20]}
          >
            <Flex alignItems="center" cursor="pointer">
              <Icon as={IconBuildingCommunity} />
              {cityPoints}
            </Flex>
          </Tooltip>
        </Box>
      </Flex>
    </Flex>
  );
}
