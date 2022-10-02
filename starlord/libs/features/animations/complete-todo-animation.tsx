import { useEffect } from 'react';

import { useColorModeValue } from '@chakra-ui/react';
import { IconFence } from '@tabler/icons';
import { animate, motion, useMotionValue } from 'framer-motion';

import { Box, Icon, Text } from '@todocity/ui/core';
import { usePrevious } from '@todocity/utils/hooks/use-previous';

export const AnimatedPointsAdd = ({ completed }) => {
  const previous = usePrevious(completed);
  const color = useColorModeValue('green', 'green.200');
  const opacity = useMotionValue(0);

  useEffect(() => {
    // Prevents animating on first mount
    if (completed && !previous && previous !== undefined) {
      animate(opacity, 1, { duration: 0.5, repeat: 1, repeatType: 'reverse' });
    }
  }, [completed, opacity, previous]);

  return (
    <Box
      as={motion.div}
      style={{
        position: 'absolute',
        // @ts-ignore
        opacity: opacity,
      }}
      display="flex"
      alignItems="center"
    >
      <Text textColor={color}>+2</Text>
      <Icon color={color} as={IconFence} height="5" width="5" />
    </Box>
  );
};

export const AnimatedPointsSubtract = ({ completed }) => {
  const color = useColorModeValue('red', 'red.200');
  const previous = usePrevious(completed);
  const opacity = useMotionValue(0);

  useEffect(() => {
    if (!completed && previous) {
      animate(opacity, 1, { duration: 0.5, repeat: 1, repeatType: 'reverse' });
    }
  }, [completed, opacity, previous]);

  return (
    <Box
      as={motion.div}
      style={{
        position: 'absolute',
        // @ts-ignore
        opacity: opacity,
      }}
      display="flex"
      alignItems="center"
    >
      <Text textColor={color}>-2</Text>
      <Icon as={IconFence} height="5" width="5" color={color} />
    </Box>
  );
};
