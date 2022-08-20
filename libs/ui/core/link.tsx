import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export function Link(props: LinkProps) {
  return (
    <NextLink href={props.href || ''} passHref>
      {/* @ts-ignore */}
      <ChakraLink {...props}>{props.children}</ChakraLink>
    </NextLink>
  );
}
