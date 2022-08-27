import { useColorMode, useDisclosure, useTheme } from '@chakra-ui/react';
import { IconBox, IconBuildingCommunity, IconFence } from '@tabler/icons';
import { signOut } from 'firebase/auth';
import { auth } from 'libs/firebase/client-app';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { eventTriggers } from '@todocity/analytics/events/constants';
import * as track from '@todocity/analytics/events/track';
import { AnalIconButton } from '@todocity/components/anal-icon-button/anal-icon-button';
import { LightDarkButton } from '@todocity/components/light-dark-button/light-dark-button';
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Modal,
  ModalCloseButton,
  ModalContent,
  Text,
  Tooltip,
} from '@todocity/ui/core';

export function Toolbar() {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const { zIndices } = useTheme();
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    await signOut(auth);
    track.logout();
    router.push('/');
  };

  // TODO: Theme and use Leva for controls. Removing for now as there aren't enough controls yet.
  // const { hidden, setHidden } = useLevaStore(
  //   (state) => ({
  //     hidden: state.hidden,
  //     setHidden: state.setHidden,
  //   }),
  //   shallow
  // );
  // useControls({
  //   theme: {
  //     value: colorMode,
  //     options: ['light', 'dark'],
  //     onChange: (value) => setColorMode(value),
  //   },
  // });

  return (
    <>
      <Flex
        position="fixed"
        left="50%"
        bottom="10"
        transform="translateX(-50%)"
        boxShadow="xl"
        borderRadius={20}
        opacity={0.9}
        padding={2}
        zIndex={zIndices.overlay}
        backgroundColor={colorMode === 'dark' ? 'gray.900' : 'orange.50'}
      >
        <Flex position="relative" minWidth="500px" alignItems="center">
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
          <Flex alignItems="center" justifyContent="center" flex={3} gap={3}>
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
                      Components are the building blocks of your city including
                      buildings, trees, and more...
                    </Box>
                  </Flex>
                }
                hasArrow
                offset={[20, 20]}
              >
                <AnalIconButton
                  size="sm"
                  icon={<IconBox />}
                  aria-label="3d cube sphere icon"
                  isRound
                  variant="ghost"
                  analytics={{ buttonName: eventTriggers.TOOlBAR_COMPONENTS }}
                />
              </Tooltip>
              <Text variant="body" ml="1">
                12
              </Text>
            </Flex>
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
                      City points let you buy more buildings, trees, etc... to
                      build your city
                    </Box>
                  </Flex>
                }
                hasArrow
                offset={[20, 20]}
              >
                <AnalIconButton
                  size="sm"
                  icon={<IconBuildingCommunity />}
                  aria-label="house and building icon"
                  isRound
                  variant="ghost"
                  ml="1"
                  analytics={{ buttonName: eventTriggers.TOOlBAR_CITY_POINTS }}
                />
              </Tooltip>
              <Text variant="body" ml="1">
                12
              </Text>
            </Flex>
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
                  analytics={{ buttonName: eventTriggers.TOOLBAR_LOT_POINTS }}
                />
              </Tooltip>
              <Text variant="body" ml="1">
                12
              </Text>
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="center" justifyContent="flex-end">
            <LightDarkButton size="sm" variant="ghost" isRound={true} />
          </Flex>
        </Flex>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        variant="sidebarContent"
      >
        <ModalContent>
          <ModalCloseButton />
          <Grid gridTemplateColumns="repeat(1fr, 12)" gridTemplateRows="6">
            <Flex
              gridColumn="1 / span 1"
              gridRow="1 / span 5"
              direction="column"
              p="0.5em"
              minHeight="300px"
              backgroundColor="gray.100"
              borderRight="1px solid #D6D6D6"
            >
              <Box>Account</Box>
              <Box>Referrals</Box>
              <Box>Billing</Box>
              <Box>Reminders</Box>
              <Box>Notifications</Box>
              <Flex flex={1} direction="column" justifyContent="flex-end">
                <Box onClick={handleLogout}>Logout</Box>
              </Flex>
            </Flex>
            <Box gridColumn="2 / span 8" gridRow="1 / span 5" p="0.5em">
              <Heading>Account</Heading>
              <Text>Content</Text>
            </Box>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
}
