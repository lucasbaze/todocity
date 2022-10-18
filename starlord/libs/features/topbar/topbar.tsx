import { useColorModeValue, useTheme } from '@chakra-ui/react';
import {
  IconBattery2,
  IconBuildingCommunity,
  IconFence,
  IconListCheck,
} from '@tabler/icons';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Badge, Box, Flex, Icon, Text, Tooltip } from '@todocity/ui/core';

import { CountdownTimer } from './countdown/countdown';

export interface ITopBarProps {}

export function TopBar({}: ITopBarProps) {
  const { cityName, completedTodos, lotPoints, cityPoints, powerLevel } =
    useLotsManagerStore((state) => ({
      cityName: state.cityName,
      completedTodos: state.completedTodos,
      lotPoints: state.lotPoints,
      cityPoints: state.cityPoints,
      powerLevel: state.powerLevel,
    }));
  const { zIndices } = useTheme();
  const backgroundColor = useColorModeValue('orange.50', 'gray.900');
  const demoNotifBgColor = useColorModeValue('purple.300', 'purple.600');

  return (
    <>
      <Flex
        left="50%"
        top="5"
        transform="translateX(-50%)"
        boxShadow="xl"
        borderRadius={20}
        py="2"
        px="4"
        position="fixed"
        minWidth="350px"
        height="44px"
        alignItems="center"
        zIndex={zIndices.overlay}
        backgroundColor={backgroundColor}
      >
        <Flex fontWeight="bold" gap={3}>
          <Box flex={1} alignItems="center">
            <Text fontWeight="bold">{cityName || 'Demo City'}</Text>
          </Box>
          <Box>
            <Tooltip
              label={
                <Flex direction="column" mt="1">
                  <Flex gap="2">
                    <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                      Power Level
                    </Badge>
                  </Flex>
                  <Box mt="1" maxWidth="200px">
                    More power means better packages
                  </Box>
                </Flex>
              }
              hasArrow
              offset={[0, 20]}
            >
              <Flex alignItems="center" cursor="pointer">
                <Icon as={IconBattery2} />
                {`${powerLevel}%`}
              </Flex>
            </Tooltip>
          </Box>
        </Flex>
        <Flex fontWeight="bold" flex={1} justifyContent="flex-end" gap={3}>
          <Box>
            <Tooltip
              label={
                <Flex direction="column" mt="1">
                  <Flex gap="2">
                    <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                      Completed Todos
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
                  <Box mt="1" maxWidth="200px">
                    Used to buy structures and grow your city
                  </Box>
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
        {/* Demo Disclaimer */}
        <Box
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          borderBottomRadius="20px"
          width="200px"
          top="44px"
          boxShadow="xl"
          textAlign="center"
          bg={demoNotifBgColor}
        >
          <Tooltip
            label="TodoCity is currently under construction. You will be notified about your early access!"
            hasArrow
            offset={[0, 10]}
          >
            <Text fontWeight="semibold" variant="body" cursor="pointer">
              Demo City
            </Text>
          </Tooltip>
        </Box>
        <Flex
          boxShadow="xl"
          borderRadius={20}
          py="2"
          px="4"
          position="absolute"
          right="-100"
          minWidth="90px"
          height="44px"
          alignItems="center"
          zIndex={zIndices.overlay}
          backgroundColor={backgroundColor}
        >
          <Tooltip
            label={
              <Flex direction="column" mt="1">
                <Flex gap="2">
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                    Portal Timer
                  </Badge>
                </Flex>
                <Box mt="1" maxWidth="240px">
                  Every 5 minutes a portal opens and drops off a package of
                  points
                </Box>
              </Flex>
            }
            hasArrow
            offset={[0, 20]}
          >
            <Flex alignItems="center" cursor="pointer">
              <CountdownTimer />
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </>
  );
}
