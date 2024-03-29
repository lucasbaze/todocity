import {
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  useTheme,
  useToast,
} from '@chakra-ui/react';
import { Icon3dCubeSphere, IconListCheck, IconStars } from '@tabler/icons';

import { AnalIconButton } from '@todocity/analytics/components/anal-icon-button/anal-icon-button';
import { eventTriggers } from '@todocity/analytics/events/constants';
import { useAuth } from '@todocity/auth';
import { LightDarkButton } from '@todocity/features/light-dark-button/light-dark-button';
import { Avatar, Badge, Box, Flex, Text, Tooltip } from '@todocity/ui/core';

import { SettingsModal } from '../settings/settings-modal';

export function Toolbar() {
  const { user } = useAuth();
  const { zIndices } = useTheme();
  const toast = useToast();
  const backgroundColor = useColorModeValue('orange.50', 'gray.900');
  const { isOpen, onOpen, onClose } = useDisclosure();
  // 615px is a magic number on what looks good for current toolbar size
  const [isLargerThan615] = useMediaQuery('(min-width: 615px)');

  const toolbarContainerStyles = () => {
    if (isLargerThan615) {
      return {
        left: '50%',
        bottom: '10',
        transform: 'translateX(-50%)',
        boxShadow: 'xl',
        borderRadius: 20,
        padding: 2,
      };
    } else {
      return {
        left: '0',
        right: '0',
        bottom: '0',
        p: '1',
      };
    }
  };

  const handleToolbarClick = () => {
    toast({
      title: 'Coming Soon!',
      status: 'info',
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Flex
        {...toolbarContainerStyles()}
        position="fixed"
        zIndex={zIndices.overlay}
        backgroundColor={backgroundColor}
      >
        <Flex
          position="relative"
          minWidth={isLargerThan615 ? '450px' : '100%'}
          alignItems="center"
        >
          {isLargerThan615 ? (
            <Tooltip
              label={
                <Flex direction="column" mt="1">
                  <Flex gap="2">
                    <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                      Settings
                    </Badge>
                  </Flex>
                  <Box mt="1">Manage your city and your account</Box>
                </Flex>
              }
              hasArrow
            >
              <Box
                position="absolute"
                left="-25px"
                top="50%"
                transform="translateY(-50%)"
              >
                <Avatar
                  onClick={onOpen}
                  cursor="pointer"
                  size="lg"
                  variant="outline"
                  referrerPolicy="no-referrer"
                  src={user?.photoURL || undefined}
                />
              </Box>
            </Tooltip>
          ) : (
            <Flex flex={1} alignItems="center" justifyContent="flex-start">
              <Avatar
                onClick={onOpen}
                cursor="pointer"
                size="md"
                variant="outline"
                referrerPolicy="no-referrer"
                src={user?.photoURL || undefined}
              />
            </Flex>
          )}
          {isLargerThan615 && (
            <Flex flex={1} ml="10">
              <Box>
                <Text variant="body">
                  {new Date().toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
              </Box>
            </Flex>
          )}
          <Flex alignItems="center" justifyContent="center" flex={3} gap={3}>
            <Flex alignItems="center">
              <Tooltip
                label={
                  <Flex direction="column" mt="1">
                    <Flex gap="2">
                      <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                        Today&apos;s Todos
                      </Badge>
                    </Flex>
                    <Box mt="1">See and manage the Todo&apos;s for today</Box>
                  </Flex>
                }
                hasArrow
                offset={[0, 20]}
              >
                <AnalIconButton
                  size="sm"
                  icon={<IconListCheck />}
                  aria-label="Check list"
                  isRound
                  variant="ghost"
                  onClick={handleToolbarClick}
                  analytics={{ buttonName: eventTriggers.TOOlBAR_TODOS }}
                />
              </Tooltip>
              {/* {isLargerThan615 && (
                <Text variant="body" ml="1">
                  10
                </Text>
              )} */}
            </Flex>
            {isLargerThan615 ? (
              <>
                <Flex alignItems="center">
                  <Tooltip
                    label={
                      <Flex direction="column" mt="1">
                        <Flex gap="2">
                          <Badge
                            colorScheme="purple"
                            fontSize="0.8em"
                            size="sm"
                          >
                            Marketplace
                          </Badge>
                        </Flex>
                        <Box mt="1">
                          Collect structures to build your city like buildings,
                          trees, and more...
                        </Box>
                      </Flex>
                    }
                    hasArrow
                    offset={[0, 20]}
                  >
                    <AnalIconButton
                      size="sm"
                      icon={<Icon3dCubeSphere />}
                      aria-label="3d cube sphere icon"
                      isRound
                      variant="ghost"
                      onClick={handleToolbarClick}
                      analytics={{
                        buttonName: eventTriggers.TOOlBAR_COMPONENTS,
                      }}
                    />
                  </Tooltip>
                  {/* <Text variant="body" ml="1">
                    12
                  </Text> */}
                </Flex>
                <Flex alignItems="center">
                  <Tooltip
                    label={
                      <Flex direction="column" mt="1">
                        <Flex gap="2">
                          <Badge
                            colorScheme="purple"
                            fontSize="0.8em"
                            size="sm"
                          >
                            Today&apos;s Challenges
                          </Badge>
                        </Flex>
                        <Box mt="1">
                          Complete Challenges for extra lot points and city
                          points
                        </Box>
                      </Flex>
                    }
                    hasArrow
                    offset={[0, 20]}
                  >
                    <AnalIconButton
                      size="sm"
                      icon={<IconStars />}
                      aria-label="stars"
                      isRound
                      variant="ghost"
                      ml="1"
                      onClick={handleToolbarClick}
                      analytics={{
                        buttonName: eventTriggers.TOOlBAR_CITY_POINTS,
                      }}
                    />
                  </Tooltip>
                  {/* <Text variant="body" ml="1">
                    12
                  </Text> */}
                </Flex>
                {/* <Flex alignItems="center">
                  <Tooltip
                    label={
                      <Flex direction="column" mt="1">
                        <Flex gap="2">
                          <Badge
                            colorScheme="purple"
                            fontSize="0.8em"
                            size="sm"
                          >
                            Coming Soon
                          </Badge>
                        </Flex>
                        <Box mt="1">
                          Lot points let you unlock new locations and places to
                          build.
                        </Box>
                      </Flex>
                    }
                    hasArrow
                    offset={[20, 20]}
                  >
                    <AnalIconButton
                      size="sm"
                      icon={<IconFence />}
                      aria-label="fence icon"
                      isRound
                      variant="ghost"
                      ml="1"
                      analytics={{
                        buttonName: eventTriggers.TOOLBAR_LOT_POINTS,
                      }}
                    />
                  </Tooltip>
                  <Text variant="body" ml="1">
                    12
                  </Text>
                </Flex> */}
              </>
            ) : (
              <Flex alignItems="center">
                <Tooltip
                  label={
                    <Flex direction="column" mt="1">
                      <Flex gap="2">
                        <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                          Coming Soon
                        </Badge>
                      </Flex>
                      <Box mt="1">
                        Buy, build, and collect buildings and other assets to
                        grow your city.
                      </Box>
                    </Flex>
                  }
                  hasArrow
                  offset={[20, 20]}
                >
                  <AnalIconButton
                    size="sm"
                    icon={<Icon3dCubeSphere />}
                    aria-label="3d cube sphere"
                    isRound
                    variant="ghost"
                    ml="1"
                    analytics={{ buttonName: eventTriggers.TOOLBAR_LOT_POINTS }}
                  />
                </Tooltip>
              </Flex>
            )}
          </Flex>
          <Flex flex={1} alignItems="center" justifyContent="flex-end">
            <Tooltip label={'Toggle Day / Night'} hasArrow offset={[0, 20]}>
              <span>
                <LightDarkButton size="sm" variant="ghost" isRound={true} />
              </span>
            </Tooltip>
            {/* <Tooltip label={'Toggle Edit Mode'} hasArrow offset={[0, 20]}>
              <span>
                <SceneSettings />
              </span>
            </Tooltip> */}
          </Flex>
        </Flex>
      </Flex>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
