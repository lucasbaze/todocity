import { ReactNode } from 'react';

import {
  Box,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { IconCircleCheck, IconInfoCircle } from '@tabler/icons';

import { Card } from '@todocity/ui/components/card/card';

export interface PricingCardData {
  features: { text: string; tooltipText?: string }[];
  discount?: ReactNode;
  name: string;
  denomination?: string;
  price: string;
}

interface PricingCardProps {
  data: PricingCardData;
  icon?: React.ElementType;
  button: React.ReactElement;
  disclaimer?: ReactNode;
}

// Copied and modified from https://pro.chakra-ui.com/components/free bc I was lazy
export const PricingCard = ({
  data,
  icon,
  button,
  disclaimer,
}: PricingCardProps) => {
  const { features, price, name, discount, denomination = 'yr' } = data;
  const accentColor = useColorModeValue('purple.600', 'blue.200');

  return (
    <Box position="relative">
      <Card
        boxProps={{
          margin: { base: '0 auto' },
          pt: 16,
          width: { base: '95%' },
          position: 'relative',
        }}
      >
        <VStack spacing={6}>
          <Heading size="md" fontWeight="medium">
            {name}
          </Heading>
        </VStack>
        <Flex
          align="flex-end"
          justify="center"
          fontWeight="extrabold"
          color={accentColor}
          pt="8"
        >
          <Heading size="3xl" fontWeight="inherit" lineHeight="0.9em">
            {price}
          </Heading>
          <Text fontWeight="inherit" fontSize="2xl">
            / {denomination}
          </Text>
        </Flex>
        {discount && (
          <Flex align="flex-end" justify="center">
            {discount}
          </Flex>
        )}
        <List spacing="2" mt="10" mb="14" maxW="85%" ml="10">
          {features.map((feature, index) => (
            <ListItem fontWeight="medium" key={index}>
              <ListIcon
                fontSize="xl"
                as={IconCircleCheck}
                marginEnd={2}
                color={accentColor}
              />
              {feature.text}
              {feature.tooltipText && (
                <Tooltip
                  label={feature.tooltipText}
                  fontSize="sm"
                  hasArrow
                  placement="top"
                >
                  <span>
                    <Icon as={IconInfoCircle} ml="1" />
                  </span>
                </Tooltip>
              )}
            </ListItem>
          ))}
        </List>
      </Card>
      <Box textAlign="center" transform="translateY(-30px)">
        {button}
      </Box>
      {disclaimer && (
        <Box
          position="absolute"
          bottom="0"
          transform="translateY(24px) translateX(-50%)"
          left="50%"
          width="100%"
        >
          {disclaimer}
        </Box>
      )}
    </Box>
  );
};
