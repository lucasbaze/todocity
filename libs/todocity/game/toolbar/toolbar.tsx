import { useColorMode, useDisclosure, useTheme } from '@chakra-ui/react';
import {
  IconAdjustments,
  IconBox,
  IconBuildingCommunity,
  IconFence,
} from '@tabler/icons';
import { useControls } from 'leva';
import { useAuthState } from 'react-firebase-hooks/auth';
import shallow from 'zustand/shallow';

import { Button, IconButton } from '@todocity/components';
import { auth } from '@todocity/firebase';
import { useLevaStore } from '@todocity/store';
import {
  Avatar,
  Box,
  Flex,
  Grid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Tooltip,
} from '@todocity/ui';

export function Toolbar() {
  const [user] = useAuthState(auth);
  const { zIndices } = useTheme();
  const { colorMode, setColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { hidden, setHidden } = useLevaStore(
    (state) => ({
      hidden: state.hidden,
      setHidden: state.setHidden,
    }),
    shallow
  );
  useControls({
    theme: {
      value: colorMode,
      options: ['light', 'dark'],
      onChange: (value) => setColorMode(value),
    },
  });

  console.log('User: ', user);
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
        backgroundColor="black"
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
              border="3px solid black"
              cursor="pointer"
              size="lg"
              referrerPolicy="no-referrer"
              src={user?.photoURL || undefined}
            />
          </Box>
          <Flex flex={1} ml="10">
            <Box>
              <Text variant="inverseBody">
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
                label="Components: These are the building blocks of your city. Coming Soon"
                hasArrow
                offset={[20, 20]}
              >
                <IconButton
                  size="sm"
                  icon={<IconBox />}
                  aria-label="3d cube sphere icon"
                  isRound
                />
              </Tooltip>
              <Text variant="inverseBody" ml="1">
                12
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Tooltip
                label="Components: These are the building blocks of your city. Coming Soon"
                hasArrow
                offset={[20, 20]}
              >
                <IconButton
                  size="sm"
                  icon={<IconBuildingCommunity />}
                  aria-label="house and building icon"
                  isRound
                  ml="1"
                />
              </Tooltip>
              <Text variant="inverseBody" ml="1">
                12
              </Text>
            </Flex>
            <Flex alignItems="center">
              <Tooltip
                label="Components: These are the building blocks of your city. Coming Soon"
                hasArrow
                offset={[20, 20]}
              >
                <IconButton
                  size="sm"
                  icon={<IconFence />}
                  aria-label="fence icon"
                  isRound
                  ml="1"
                />
              </Tooltip>
              <Text variant="inverseBody" ml="1">
                12
              </Text>
            </Flex>
          </Flex>
          <Flex flex={1} alignItems="center" justifyContent="flex-end">
            <IconButton
              size="sm"
              icon={<IconAdjustments />}
              aria-label="fence icon"
              isRound
              onClick={() => setHidden(!hidden)}
            />
          </Flex>
        </Flex>
      </Flex>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        variant="sidebarContent"
      >
        <ModalContent>
          <Grid gridTemplateColumns="repeat(1fr, 12)" gridTemplateRows="6">
            <Box gridColumn="3 / span 8" gridRow="1" p="0.5em">
              Account
              {/* <ModalHeader>Modal Tits</ModalHeader> */}
              <ModalCloseButton />
            </Box>
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
              {/* <ModalBody display="flex">
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
							</ModalBody>
							<ModalBody display="flex">
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
								<Text fontWeight="bold" mb="1rem">
									You can scroll the content behind the modal
								</Text>
							</ModalBody> */}
              Content
            </Flex>
            <Flex gridColumn="3 / span 8" gridRow="2 / 6"></Flex>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
}
