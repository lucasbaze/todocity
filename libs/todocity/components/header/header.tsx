import { Text, Flex } from '@todocity/components';
import Link from 'next/link';
import { LightDarkButton } from '@todocity/components';

export function Header() {
  return (
    <Flex p="2" alignItems="center">
      <Text variant="h1" flex="1">
        TODOCITY
      </Text>
      <Flex alignItems="center" gap="12">
        <Link href="/pricing">Early Pricing</Link>
        <LightDarkButton />
      </Flex>
    </Flex>
  );
}
