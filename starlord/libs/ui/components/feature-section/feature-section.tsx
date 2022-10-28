import { Suspense } from 'react';

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
  textRight?: boolean;
}

export function FeatureSection({ title, description }: IFeatureSectuionProps) {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} py="32" px="8" gap={8}>
      <Flex flex={1}>
        <Image
          src="https://picsum.photos/id/250/250/250"
          aria-label="something"
        />
      </Flex>
      <Flex direction="column" flex={1} justifyContent="center">
        <Text variant="h2" fontWeight="bold" mb="1">
          {title}
        </Text>
        <Text fontSize="24px" color="gray.600" lineHeight="1" mb="8">
          {description}
        </Text>
        <Box>
          <Suspense
            fallback={
              <Button variant="primary" size="xl" mb="2">
                Get Early Access*
              </Button>
            }
          >
            <CreateAccountButton
              ctaText="Get Early Access*"
              size={{ base: 'md' }}
            />
          </Suspense>
        </Box>
      </Flex>
    </Flex>
  );
}
