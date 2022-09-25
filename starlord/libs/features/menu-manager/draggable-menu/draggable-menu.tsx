import { useState } from 'react';

import { useColorMode, useColorModeValue, useTheme } from '@chakra-ui/react';
import { IconCaretDown, IconDots, IconX } from '@tabler/icons';
import { AnimatePresence, motion, useDragControls } from 'framer-motion';

import { CSSPositionOffsets } from '@todocity/data/types';
import { Box, Divider, Flex, Icon } from '@todocity/ui/core';

export interface IDraggableMenuProps {
  position: CSSPositionOffsets;
  header: React.ReactNode;
  body: React.ReactNode;
  onClose: () => void;
  width?: string;
}

/**
 * Generic wrapper component used to create draggable menus for
 * lot menus, todo menus, etc...
 */
export function DraggableMenu({
  position,
  header,
  body,
  onClose,
  width = '250px',
}: IDraggableMenuProps) {
  const [isOpen, setOpen] = useState<boolean>(true);
  const [dragging, setDragging] = useState<boolean>(false);

  const { zIndices } = useTheme();
  const iconFill = useColorModeValue('black', 'white');
  const headerBackgroundColor = useColorModeValue('gray.200', 'gray.950');
  const backgroundColor = useColorModeValue('orange.50', 'gray.900');

  const dragControls = useDragControls();

  const startDrag = (e) => {
    dragControls.start(e);
  };

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
  };

  const collapseContent = () => {
    setOpen(!isOpen);
  };

  return (
    <Box
      as={motion.div}
      drag
      dragElastic={0}
      dragMomentum={false}
      dragControls={dragControls}
      dragListener={false}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      position="fixed"
      left={position.left}
      right={position.right}
      top={position.top}
      bottom={position.bottom}
      zIndex={zIndices.overlay}
      width={width}
      userSelect="none"
      borderRadius="20px"
      boxShadow="xl"
    >
      <Box>
        <Flex
          bg={headerBackgroundColor}
          py="1"
          px="4"
          borderTopRadius="20px"
          alignItems="center"
        >
          <Icon
            as={IconCaretDown}
            cursor="pointer"
            onClick={collapseContent}
            transition="transform 350ms ease, color 300ms, fill 300ms"
            fill={iconFill}
            transform={isOpen ? '' : 'rotate(-90deg)'}
            _hover={{
              color: 'gray.600',
              fill: 'gray.600',
            }}
          />
          <Flex
            flex={1}
            onPointerDown={startDrag}
            cursor={dragging ? 'grabbing' : 'grab'}
            userSelect="none"
            justifyContent="center"
            transition="color 300ms"
            _hover={{
              color: 'gray.600',
            }}
          >
            <Flex direction="column">
              <Icon as={IconDots} transform="translateY(5px)" />
              <Icon as={IconDots} transform="translateY(-5px)" />
            </Flex>
          </Flex>
          <Icon
            as={IconX}
            cursor="pointer"
            onClick={onClose}
            transition="color 300ms"
            _hover={{
              color: 'gray.600',
            }}
          />
        </Flex>
      </Box>
      <Box>
        <Box
          px="4"
          py="3"
          mb="-1"
          bg={backgroundColor}
          userSelect="text"
          borderBottomRadius={isOpen ? '0' : '20px'}
        >
          {header}
        </Box>
      </Box>
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <Divider />
            <Box
              as={motion.section}
              bg={backgroundColor}
              borderBottomRadius="20px"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              overflow="hidden"
              transitionDuration="0.5"
              transitionTimingFunction="linear"
            >
              {/* Padding here ensures animation isn't jumpy */}
              <Box px="4" py="3">
                {body}
              </Box>
            </Box>
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
