import { useColorModeValue } from '@chakra-ui/react';
import { useFirestoreDocumentData } from '@react-query-firebase/firestore';
import { IconBuildingCommunity } from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import { userRef } from '@todocity/data/db';
import { TChallenge, TCity } from '@todocity/data/types';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Badge, Box, Flex, Icon, Text } from '@todocity/ui/core';

const challengeData: TChallenge[] = [
  {
    id: '1',
    name: 'Unlock 2 Lots',
    criteria: [
      {
        category: 'lot',
        action: 'unlocked',
        value: 2,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 3,
    },
  },
  {
    id: '2',
    name: 'Earn 20 lot points',
    criteria: [
      {
        category: 'lot',
        action: 'earned',
        value: 20,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 6,
    },
  },
  {
    id: '3',
    name: 'Complete 5 Todos',
    criteria: [
      {
        category: 'todo',
        action: 'completed',
        value: 5,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 10,
    },
  },
  {
    id: '4',
    name: 'Place 2 structures',
    criteria: [
      {
        category: 'structure',
        action: 'placed',
        value: 2,
        comparitor: 'equal',
      },
    ],
    reward: {
      category: 'city-points',
      value: 8,
    },
  },
  {
    id: '3',
    name: 'Complete 10 Todos',
    criteria: [
      {
        category: 'todo',
        action: 'completed',
        value: 10,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 12,
    },
  },
  {
    id: '3',
    name: 'Earn 20 city points',
    criteria: [
      {
        category: 'city-points',
        action: 'earned',
        value: 20,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 2,
    },
  },
  {
    id: '3',
    name: 'Unlock 4 lots',
    criteria: [
      {
        category: 'lot',
        action: 'unlocked',
        value: 4,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 7,
    },
  },
  {
    id: '3',
    name: 'Complete 25 todos',
    criteria: [
      {
        category: 'todo',
        action: 'completed',
        value: 25,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 13,
    },
  },
  {
    id: '3',
    name: 'Complete 50 todos',
    criteria: [
      {
        category: 'todo',
        action: 'completed',
        value: 50,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 15,
    },
  },
  {
    id: '3',
    name: 'Complete 100 todos',
    criteria: [
      {
        category: 'todo',
        action: 'completed',
        value: 100,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 20,
    },
  },
  {
    id: '1',
    name: 'Unlock 10 Lots',
    criteria: [
      {
        category: 'lot',
        action: 'unlocked',
        value: 10,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 4,
    },
  },
  {
    id: '1',
    name: 'Place 10 structure',
    criteria: [
      {
        category: 'structure',
        action: 'placed',
        value: 10,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 8,
    },
  },
  {
    id: '1',
    name: 'Unlock 25 Lots',
    criteria: [
      {
        category: 'lot',
        action: 'unlocked',
        value: 25,
        comparitor: 'greater_than',
      },
    ],
    reward: {
      category: 'city-points',
      value: 30,
    },
  },
];

interface IChallengeRowProps {
  challenge: TChallenge;
  stats: TCity['stats'];
}

function ChallengeRow({ challenge, stats }: IChallengeRowProps) {
  const borderColor = useColorModeValue('gray.250', 'gray.600');

  // TODO: Refactor entirely. This doesn't account for multiple criteria, comparitor values, or rewards
  const calcWidth = () => {
    switch (challenge.criteria[0].category) {
      case 'lot':
        switch (challenge.criteria[0].action) {
          case 'unlocked':
            return (stats.unlockedLots / challenge.criteria[0].value) * 100;
          case 'earned':
            return (stats.lotPoints / challenge.criteria[0].value) * 100;
        }
      case 'structure':
        switch (challenge.criteria[0].action) {
          case 'placed':
            return (stats.structuresPlaced / challenge.criteria[0].value) * 100;
        }
      case 'todo':
        switch (challenge.criteria[0].action) {
          case 'completed':
            return (stats.completedTodos / challenge.criteria[0].value) * 100;
        }
        return '10%';
      case 'city-points':
        switch (challenge.criteria[0].action) {
          case 'earned':
            return (stats.cityPoints / challenge.criteria[0].value) * 100;
        }
        return '10%';
    }
  };

  const width = calcWidth();

  return (
    <Box position="relative" height="40px">
      <Box
        position="absolute"
        width={width >= 100 ? '100%' : `${width}%`}
        top={0}
        left={0}
        bottom={0}
        bg="blackAlpha.50"
      />
      <Flex
        alignItems="center"
        borderBottom="1px"
        borderColor={borderColor}
        p="2"
      >
        <Box flex={1}>
          <Text>{challenge.name}</Text>
        </Box>
        <Flex alignItems="center">
          <Icon as={IconBuildingCommunity} />{' '}
          <Text>{challenge.reward.value}</Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export function ChallengesMenu() {
  const { user } = useAuth();
  const cityStatsQuery = useFirestoreDocumentData(
    ['user', user.uid],
    userRef(user.uid),
    {
      subscribe: true,
    },
    {
      select: (data) => data.city.stats,
    }
  );

  return (
    <Box width="100%">
      <Box mb="8">
        <Text variant="h3" fontWeight="bold" mb="1">
          Challenges
        </Text>
        <Text variant="description" mb="1">
          Gain extra points for completing certain levels
        </Text>
        <Badge colorScheme="purple" fontSize="0.8em" size="sm">
          Coming Soon
        </Badge>
      </Box>
      <Box>
        {challengeData.map((challenge) => (
          <ChallengeRow
            key={challenge.id}
            challenge={challenge}
            stats={cityStatsQuery.data}
          />
        ))}
      </Box>
    </Box>
  );
}
