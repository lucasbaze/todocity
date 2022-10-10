import { useState } from 'react';

import {
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@todocity/ui/core';

import { AccountSettings } from './account-settings/account-settings';
import { BillingSettings } from './billing-settings/billing-settings';
import { ChallengesMenu } from './challenges-menu/challenges-menu';
import { CitySettingsMenu } from './city-settings/city-settings';
import { CollectablesMenu } from './collectables-menu/collectables-menu';
import { Feedback } from './feedback/feedback';
import { OverviewMenu } from './overview-menu/overview-menu';
import { ReferralsSettings } from './referrals-settings/referrals-settings';
import { ReminderSettings } from './reminder-settings/reminder-settings';
import {
  ESettingsMenuItems,
  SettingsMenu,
} from './settings-menu/settings-menu';

interface ISettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialState?: ESettingsMenuItems;
}

function settingsContent(section: ESettingsMenuItems) {
  switch (section) {
    case ESettingsMenuItems.Overview:
      return <OverviewMenu />;
    case ESettingsMenuItems.Challenges:
      return <ChallengesMenu />;
    case ESettingsMenuItems.Collectables:
      return <CollectablesMenu />;
    case ESettingsMenuItems.CitySettings:
      return <CitySettingsMenu />;
    case ESettingsMenuItems.Billing:
      return <BillingSettings />;
    case ESettingsMenuItems.Profile:
      return <AccountSettings />;
    case ESettingsMenuItems.Feedback:
      return <Feedback />;
    case ESettingsMenuItems.Referrals:
    default:
      return <ReferralsSettings />;
  }
}

export function SettingsModal({
  isOpen,
  onClose,
  initialState,
}: ISettingsModalProps) {
  const [selectedSection, setSelectedSection] = useState<ESettingsMenuItems>(
    initialState || ESettingsMenuItems.Referrals
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: 'full', md: '3xl' }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent
        position="absolute"
        bottom={{ md: '10vh' }}
        pb="0"
        borderRadius={15}
        overflow="hidden"
      >
        <ModalCloseButton />
        <Flex direction={{ base: 'column', md: 'row' }} height={{ md: '65vh' }}>
          <SettingsMenu
            selected={selectedSection}
            setSelected={setSelectedSection}
          />
          <Flex flex={7} pt="4" px="16" overflowY="auto">
            {settingsContent(selectedSection)}
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
