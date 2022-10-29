import { Dispatch, SetStateAction } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconInfoCircle } from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import {
  Avatar,
  Badge,
  Box,
  Flex,
  Icon,
  Text,
  Tooltip,
} from '@todocity/ui/core';

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
  const sidebarSelectedColor = useColorModeValue('gray.300', 'gray.600');

  const handleChange = (value) => {
    setSelected(value);
  };

  return (
    <Flex
      flex={3}
      direction="column"
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
          border="none"
          src={user?.photoURL || undefined}
          mb="2"
        />
        <Text fontWeight="bold" fontSize="lg">
          {user.displayName}
        </Text>
        <Flex alignItems="center" justifyContent="center" gap={1}>
          <Text>City Architect</Text>
          <Tooltip
            label={
              <Flex direction="column" mt="1">
                <Flex gap="2">
                  <Badge colorScheme="purple" fontSize="0.8em" size="sm">
                    Player Title
                  </Badge>
                </Flex>
                <Box mt="1">
                  As city architect you have certain privileges and can build
                  your city how you like. More titles and priviledges coming
                  soon...
                </Box>
              </Flex>
            }
            hasArrow
          >
            <span>
              <Icon cursor="pointer" as={IconInfoCircle} display="block" />
            </span>
          </Tooltip>
        </Flex>
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
              bg={selected === item.id && sidebarSelectedColor}
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
              bg={selected === item.id && sidebarSelectedColor}
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
