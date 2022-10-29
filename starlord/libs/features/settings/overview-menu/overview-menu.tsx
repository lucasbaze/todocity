import { useColorModeValue } from '@chakra-ui/react';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { Badge, Box, Text } from '@todocity/ui/core';

const completedTodosData = [
  {
    name: '10/29',
    completed: 2,
  },
  {
    name: '10/30',
    completed: 3,
  },
  {
    name: '10/31',
    completed: 8,
  },
  {
    name: '11/01',
    completed: 6,
  },
  {
    name: '11/02',
    completed: 8,
  },
  {
    name: '11/03',
    completed: 5,
  },
  {
    name: '11/04',
    completed: 5,
  },
];

export function OverviewMenu() {
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box>
      <Box mb="8">
        <Text variant="h3" fontWeight="bold" mb="1">
          Overview
        </Text>
        <Text variant="description" mb="1">
          See stats about your progress and your city.
        </Text>
        <Badge colorScheme="purple" fontSize="0.8em" size="sm">
          Coming Soon
        </Badge>
      </Box>
      <Box mb="8">
        <Box mb="4">
          <Text fontWeight="bold">City Productivity</Text>
          <Text color={secondaryTextColor}>Todos completed over time</Text>
        </Box>
        <Box transform="translateX(-40px)">
          <LineChart
            width={450}
            height={300}
            data={completedTodosData}
            margin={{ left: 0, right: 0 }}
          >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <Tooltip />
            <YAxis domain={[0, 10]} tickCount={10} />
            <Line type="monotone" dataKey="completed" stroke="#8884d8" />
          </LineChart>
        </Box>
      </Box>
    </Box>
  );
}
