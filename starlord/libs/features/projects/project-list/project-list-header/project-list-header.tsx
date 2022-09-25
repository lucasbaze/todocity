import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons';

import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@todocity/ui/core';

export interface IProjectListHeaderProps {
  title: string;
  description: string;
}

export function ProjectListHeader({
  title,
  description,
}: IProjectListHeaderProps) {
  return (
    <Box pl="2" py="1">
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize="20px">{title}</Text>
          <Text variant="description">{description}</Text>
        </Box>
        <Box cursor="pointer">
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              size="md"
              aria-label="Options"
              icon={<IconDotsVertical />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<IconPencil />}>Edit Project</MenuItem>
              <MenuItem icon={<IconTrash />} color="red.600">
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
