import { Dispatch, SetStateAction } from 'react';

import { useColorModeValue } from '@chakra-ui/react';

import { useAuth } from '@todocity/auth';
import { Avatar, Box, Flex, Text } from '@todocity/ui/core';

export enum ESettingsMenuItems {
  Overview = 'overview',
  Challenges = 'challenges',
  Collectables = 'collectables',
  CitySettings = 'city-settings',
  Profile = 'profile',
  Billing = 'billing',
  Referrals = 'referrals',
  Reminders = 'reminders',
  Feedback = 'feedback',
}

const cityMenuItems = [
  {
    id: ESettingsMenuItems.Overview,
    displayTitle: 'Overview',
  },
  {
    id: ESettingsMenuItems.Challenges,
    displayTitle: 'Challenges',
  },
  {
    id: ESettingsMenuItems.Collectables,
    displayTitle: 'Collectables',
  },
  // {
  //   id: ESettingsMenuItems.CitySettings,
  //   displayTitle: 'Settings',
  // },
];

const accountMenuItems = [
  {
    id: ESettingsMenuItems.Referrals,
    displayTitle: 'Referrals',
  },
  {
    id: ESettingsMenuItems.Billing,
    displayTitle: 'Billing',
  },
  {
    id: ESettingsMenuItems.Feedback,
    displayTitle: 'Feedback',
  },
  {
    id: ESettingsMenuItems.Profile,
    displayTitle: 'Profile',
  },
];

interface ISettingsMenuProps {
  selected: ESettingsMenuItems;
  setSelected: Dispatch<SetStateAction<ESettingsMenuItems>>;
}

export function SettingsMenu({ selected, setSelected }: ISettingsMenuProps) {
  const { user } = useAuth();
  const sidebarBackgroundColor = useColorModeValue('gray.100', 'gray.700');

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Flex
      flex={3}
      direction="column"
      // p={{ base: '3em 1em 1em', md: '1em' }}
      // minHeight={{ md: '300px' }}
      backgroundColor={sidebarBackgroundColor}
      borderRight="1px solid #D6D6D6"
    >
      {/* User Avatar */}
      <Box textAlign="center" pt="4" pb="10">
        <Avatar
          cursor="pointer"
          size="lg"
          variant="outline"
          referrerPolicy="no-referrer"
          src={user?.photoURL || undefined}
        />
        <Text>City Mayor</Text>
        <Text>{user.displayName}</Text>
      </Box>

      {/* City Menu Options */}
      <Box pb="8">
        <Text fontWeight="bold" fontSize="sm" pl="8">
          CITY
        </Text>
        <Box>
          {cityMenuItems.map((item) => (
            <Box
              key={item.displayTitle}
              cursor="pointer"
              py="6px"
              pl="8"
              bg={selected === item.id && 'gray.300'}
              onClick={() => handleChange(item.id)}
            >
              {item.displayTitle}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Account Menu Options */}
      <Box pb="8">
        <Text fontWeight="bold" fontSize="sm" pl="8">
          ACCOUNT
        </Text>
        <Box>
          {accountMenuItems.map((item) => (
            <Box
              key={item.displayTitle}
              cursor="pointer"
              py="6px"
              pl="8"
              bg={selected === item.id && 'gray.300'}
              onClick={() => handleChange(item.id)}
            >
              {item.displayTitle}
            </Box>
          ))}
        </Box>
      </Box>
    </Flex>
  );
}
