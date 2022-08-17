import { useColorMode, useDisclosure, useTheme } from '@chakra-ui/react';
import {
  IconAdjustments,
  IconBox,
  IconBuildingCommunity,
  IconFence,
} from '@tabler/icons';
import { useControls } from 'leva';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Button, IconButton } from '@todocity/components';
import { auth } from '@todocity/firebase';
import {
  Avatar,
  Box,
  Flex,
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
              border="2px"
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
            />
          </Flex>
        </Flex>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalContent display="flex">
          <ModalHeader>Modal Tits</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex">
            <Text fontWeight="bold" mb="1rem">
              You can scroll the content behind the modal
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
