import { Badge, Box, Heading, Text } from '@todocity/ui/core';

export function ReminderSettings() {
  return (
    <Box>
      <Text variant="h3" fontWeight="bold">
        Reminders
      </Text>
      <Badge colorScheme="purple" fontSize="0.8em" size="sm">
        Coming Soon
      </Badge>
    </Box>
  );
}
