import { useColorMode } from '@chakra-ui/react';

import { Box, BoxProps } from '../../core';

export interface ICardProps {
  children: React.ReactNode;
  boxProps?: BoxProps;
}

export function Card({ children, boxProps }: ICardProps) {
  const { colorMode } = useColorMode();
  return (
    <Box
      py="6"
      border="1px solid #e2e2e2"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      borderRadius="2xl"
      boxShadow="2xl"
      {...boxProps}
    >
      {children}
    </Box>
  );
}
