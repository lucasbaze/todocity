import { ReactNode, useCallback } from 'react';

import { useColorModeValue, useTheme } from '@chakra-ui/react';
import { useFirestoreDocumentData } from '@react-query-firebase/firestore';
import {
  IconBattery,
  IconBattery1,
  IconBattery2,
  IconBattery3,
  IconBattery4,
  IconBuildingCommunity,
  IconFence,
  IconListCheck,
} from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import { userRef } from '@todocity/data/db';
import { Badge, Box, Flex, Icon, Text, Tooltip } from '@todocity/ui/core';

import { CountdownTimer } from './countdown/countdown';

function batteryIcon(level: number) {
  if (level >= 95) {
    return <Icon as={IconBattery4} />;
  } else if (level < 95 && level >= 75) {
    return <Icon as={IconBattery3} />;
  } else if (level < 75 && level >= 50) {
    return <Icon as={IconBattery2} />;
  } else if (level < 50 && level >= 10) {
    return <Icon as={IconBattery1} />;
  } else {
    return <Icon as={IconBattery} />;
  }
}

export interface ITopBarProps {}

export function TopBar({}: ITopBarProps) {
  const { user } = useAuth();
  const cityStatsQuery = useFirestoreDocumentData(
    ['user', user.uid],
    userRef(user.uid),
    { subscribe: true }
  );
  const { zIndices } = useTheme();
  const backgroundColor = useColorModeValue('orange.50', 'gray.900');
  const demoNotifBgColor = useColorModeValue('purple.300', 'purple.600');

  const countdownCopy = useCallback(() => {
    // There's a better way to do this, but I'm not sure at the moment
    let tooltip: string =
      'Every 15 minutes a portal opens and drops off a package';
    let body: ReactNode = null;
    if (cityStatsQuery.data?.city) {
      if (cityStatsQuery.data?.city.packages.length > 0) {
        tooltip = 'You have a package of points!';
        body = <Text fontWeight="bold">Package! 📦</Text>;
      } else if (cityStatsQuery.data?.city.powerLevel <= 0) {
        tooltip = 'No power... complete todos to bring the portal back online';
        body = <Text fontWeight="bold">No Power 😭</Text>;
      } else if (
        cityStatsQuery.data?.city.packages.length === 0 &&
        cityStatsQuery.data?.city.powerLevel > 0
      ) {
        body = <CountdownTimer />;
      } else {
        body = 'Charging...';
      }
    }
    return { tooltip, body };
  }, [cityStatsQuery?.data]);

  return (
    <Flex
      position="fixed"
      top="5"
      width="100%"
      gap={2}
      zIndex={zIndices.overlay}
    >
      <Box flex={1} />
      <Flex
        flex={3}
        boxShadow="xl"
        borderRadius={20}
        py="2"
        px="4"
        maxWidth="350px"
        height="44px"
        alignItems="center"
        backgroundColor={backgroundColor}
      >
        <Flex fontWeight="bold" gap={3}>
          <Box flex={1} alignItems="center">
            <Text fontWeight="bold">
              {cityStatsQuery.data?.city.cityName || 'Alpha City'}
            </Text>
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
                {batteryIcon(cityStatsQuery.data?.city.powerLevel)}
                {`${cityStatsQuery.data?.city.powerLevel}%`}
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
                {cityStatsQuery.data?.city.stats.completedTodos}
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
                {cityStatsQuery.data?.city.stats.lotPoints}
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
                {cityStatsQuery.data?.city.stats.cityPoints}
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
            label="TodoCity is currently in alpha. Your todo's will always be safe, but the city and game will change and expand."
            hasArrow
            offset={[0, 10]}
          >
            <Text
              fontWeight="semibold"
              variant="body"
              cursor="pointer"
              color="white"
              fontSize={14}
            >
              Version 1.0: Alpha City
            </Text>
          </Tooltip>
        </Box>
      </Flex>
      {/* Timer */}
      <Flex flex={1}>
        <Flex
          boxShadow="xl"
          borderRadius={20}
          top="5"
          py="2"
          px="4"
          height="44px"
          justifyContent="flex-start"
          alignItems="center"
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
                  {countdownCopy().tooltip}
                </Box>
              </Flex>
            }
            hasArrow
            offset={[0, 20]}
          >
            <Flex alignItems="center" cursor="pointer">
              {countdownCopy().body}
            </Flex>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
