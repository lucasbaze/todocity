import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from '@todocity/ui/core';

export function CitySettingsMenu() {
  return (
    <Box>
      <Box mb="8">
        <Text variant="h3" fontWeight="bold" mb="1">
          City Settings
        </Text>
        <Text variant="description" mb="1">
          Adjust settings related to how your city functions
        </Text>
        <Badge colorScheme="purple" fontSize="0.8em" size="sm">
          Coming Soon.
        </Badge>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Time zone</FormLabel>
          <Text variant="description">
            Can affect how timers and internal clocks work
          </Text>
          <Select>
            <option value="MST">MST</option>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}
