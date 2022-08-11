import { Text, Flex, Box } from '@todocity/ui';
import Link from 'next/link';
import { LightDarkButton } from '@todocity/components';

export function Header() {
  return (
    <Flex p="2" alignItems="center">
      <Box flex="1">
        <Link href="/">
          <Text variant="h1" cursor="pointer">
            TODOCITY
          </Text>
        </Link>
      </Box>
      <Flex alignItems="center" gap="12">
        <Link href="/pricing">Early Pricing</Link>
        <LightDarkButton />
      </Flex>
    </Flex>
  );
}
