import { Dispatch, SetStateAction, useState } from 'react';

import { useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { useAuth } from '@todocity/auth';
import {
  Box,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  Select,
  Stack,
} from '@todocity/ui/core';

import { AccountSettings } from './account-settings/account-settings';
import { BillingSettings } from './billing-settings/billing-settings';
import { Feedback } from './feedback/feedback';
import { Help } from './help/help';
import { NotificationSettings } from './notification-settings/notification-settings';
import { ReferralsSettings } from './referrals-settings/referrals-settings';
import { ReminderSettings } from './reminder-settings/reminder-settings';

enum ESettingsMenuItems {
  Account = 'account',
  Billing = 'billing',
  Notifications = 'notifications',
  Referrals = 'referrals',
  Reminders = 'reminders',
  Feedback = 'feedback',
  Help = 'help',
}

interface ISettingsMenuProps {
  selected: ESettingsMenuItems;
  setSelected: Dispatch<SetStateAction<ESettingsMenuItems>>;
}

function SettingsMenu({ selected, setSelected }: ISettingsMenuProps) {
  const router = useRouter();
  const { logout } = useAuth();
  const sidebarBackgroundColor = useColorModeValue('gray.100', 'gray.700');
  const [isLargerThan500] = useMediaQuery('(min-width: 767px)');

  const handleLogout = async () => {
    await logout();
    router.push('/logout');
  };

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Flex
      flex={2}
      direction="column"
      p={{ base: '3em 1em 1em', md: '1em' }}
      minHeight={{ md: '300px' }}
      backgroundColor={sidebarBackgroundColor}
      borderRight="1px solid #D6D6D6"
    >
      {isLargerThan500 ? (
        <>
          <Stack spacing="2">
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Account && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Account)}
            >
              Account
            </Box>
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Referrals && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Referrals)}
            >
              Referrals
            </Box>
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Billing && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Billing)}
            >
              Billing
            </Box>
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Reminders && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Reminders)}
            >
              Reminders
            </Box>
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Notifications && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Notifications)}
            >
              Notifications
            </Box>
            <Box
              cursor="pointer"
              textDecoration={
                selected === ESettingsMenuItems.Feedback && 'underline'
              }
              onClick={() => handleChange(ESettingsMenuItems.Feedback)}
            >
              Feedback
            </Box>
          </Stack>
          <Flex flex={1} direction="column" justifyContent="flex-end">
            <Box
              onClick={handleLogout}
              cursor="pointer"
              color="red.400"
              _hover={{ textDecoration: 'underline' }}
            >
              Logout
            </Box>
          </Flex>
        </>
      ) : (
        <Select size="md" onChange={(e) => handleChange(e.target.value)}>
          <option value="account">Account</option>
          <option value="referrals">Referrals</option>
          <option value="billing">Billing</option>
          <option value="reminders">Reminders</option>
          <option value="notifications">Notifications</option>
          <option value="feedback">Feedback</option>
          <option value="help">Help</option>
        </Select>
      )}
    </Flex>
  );
}

interface ISettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function settingsContent(section: ESettingsMenuItems) {
  switch (section) {
    case ESettingsMenuItems.Billing:
      return <BillingSettings />;
    case ESettingsMenuItems.Notifications:
      return <NotificationSettings />;
    case ESettingsMenuItems.Reminders:
      return <ReminderSettings />;
    case ESettingsMenuItems.Referrals:
      return <ReferralsSettings />;
    case ESettingsMenuItems.Feedback:
      return <Feedback />;
    case ESettingsMenuItems.Help:
      return <Help />;
    case ESettingsMenuItems.Account:
    default:
      return <AccountSettings />;
  }
}

export function SettingsModal({ isOpen, onClose }: ISettingsModalProps) {
  const [selectedSection, setSelectedSection] = useState<ESettingsMenuItems>(
    ESettingsMenuItems.Account
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', md: '2xl' }}
      closeOnOverlayClick={false}
    >
      <ModalContent position="absolute" bottom={{ md: '10vh' }}>
        <ModalCloseButton />
        <Flex direction={{ base: 'column', md: 'row' }}>
          <SettingsMenu
            selected={selectedSection}
            setSelected={setSelectedSection}
          />
          <Flex
            flex={7}
            py="0.5em"
            px="1em"
            overflowY="auto"
            height={{ md: '60vh' }}
          >
            {settingsContent(selectedSection)}
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
