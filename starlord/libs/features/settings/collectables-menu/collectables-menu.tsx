import { Toast } from 'libs/game/hocs/toast';

import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from '@todocity/ui/core';

export function CollectablesMenu() {
  return (
    <Box width="100%">
      <Box mb="8">
        <Text variant="h3" fontWeight="bold" mb="1">
          Collectables
        </Text>
        <Text variant="description" mb="1">
          Unlock special NFT backed structures you can use in your city.
        </Text>
        <Badge colorScheme="purple" fontSize="0.8em" size="sm">
          Coming Soon
        </Badge>
      </Box>
      <Box pb="8">
        <Toast>
          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            gridTemplateRows="auto"
            gap={4}
          >
            {[...new Array(21)].map((i) => (
              <Box
                key={i}
                gridColumn="auto"
                height="135px"
                bg="white"
                borderRadius={8}
                overflow="hidden"
                borderWidth="2px"
                borderColor="gray.300"
                cursor="pointer"
              >
                <Image
                  src="./static/images/amazon-package.png"
                  width="200px"
                  alt="mysetry-object"
                />
              </Box>
            ))}
          </Grid>
        </Toast>
      </Box>
    </Box>
  );
}
