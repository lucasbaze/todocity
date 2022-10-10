import { Badge, Box, Heading, Text } from '@todocity/ui/core';

export function OverviewMenu() {
  return (
    <Box>
      <Text variant="h3" fontWeight="bold">
        Overview
      </Text>
      <Badge colorScheme="purple" fontSize="0.8em" size="sm">
        Coming Soon
      </Badge>
    </Box>
  );
}
