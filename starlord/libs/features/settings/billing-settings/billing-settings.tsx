import { Box, Heading, Text } from '@todocity/ui/core';

export function BillingSettings() {
  return (
    <Box>
      <Box mb="6">
        <Text variant="h3" fontWeight="bold" mb="1">
          Billing
        </Text>
        <Text variant="description" mb="1">
          Manage your subscription and purchases.
        </Text>
      </Box>
    </Box>
  );
}
