import { Suspense } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

import { Box, Button, Flex, Image, Text } from '@todocity/ui/core';

const CreateAccountButton = dynamic(
  () =>
    import(
      '../../../data/auth/components/create-account-button/create-account-button'
    ),
  { ssr: false, suspense: true }
);

interface IFeatureSectuionProps {
  title: string;
  description: string;
  image: React.ReactNode;
  textRight?: boolean;
}

export function FeatureSection({
  title,
  description,
  image,
  textRight,
}: IFeatureSectuionProps) {
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  return (
    <Flex
      direction={{
        base: 'column-reverse',
        md: textRight ? 'row' : 'row-reverse',
      }}
      py={{ base: '24', md: '36' }}
      px="8"
      gap={8}
    >
      <Flex width={{ md: '50%' }} position="relative">
        {image}
      </Flex>
      <Flex
        width={{ md: '50%' }}
        direction="column"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'start' }}
        pl={{ base: 0, md: 8 }}
      >
        <Text variant="h2" fontWeight="bold" mb="1">
          {title}
        </Text>
        <Text
          fontSize="24px"
          color={secondaryTextColor}
          lineHeight="1.2"
          mb="8"
        >
          {description}
        </Text>
        <Box>
          <Suspense
            fallback={
              <Button variant="primary" size="md" mb="2">
                Create Your City
              </Button>
            }
          >
            <CreateAccountButton size={{ base: 'md' }} />
          </Suspense>
        </Box>
      </Flex>
    </Flex>
  );
}
