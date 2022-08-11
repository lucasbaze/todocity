import { useColorMode } from '@chakra-ui/react';
import { Box } from '../chakra/chakra';

export interface ICardProps {
  children: React.ReactNode;
}

export function Card({ children }: ICardProps) {
  const { colorMode } = useColorMode();
  return (
    <Box
      py="6"
      border="1px solid #838180"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      borderRadius="2xl"
      boxShadow="xl"
    >
      {children}
    </Box>
  );
}
