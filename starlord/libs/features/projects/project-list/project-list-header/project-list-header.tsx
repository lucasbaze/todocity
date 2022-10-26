import { useToast } from '@chakra-ui/react';
import { IconDotsVertical, IconPencil, IconTrash } from '@tabler/icons';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@todocity/ui/core';

export interface IProjectListHeaderProps {
  id: string;
  title: string;
  description: string;
  handleUpdateProject: (value: Record<string, string>) => void;
}

export function ProjectListHeader({
  title,
  description,
  handleUpdateProject,
}: IProjectListHeaderProps) {
  const toast = useToast();
  const updateProjectTitle = useLotsManagerStore(
    (state) => state.updateProjectTitle
  );

  const handleClick = () => {
    toast({
      title: 'Coming Soon!',
      status: 'info',
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    });
  };

  const handleUpdateTitle = (e) => {
    handleUpdateProject({ title: e.target.value });
  };

  return (
    <Box pl="2" py="1">
      <Flex justifyContent="space-between">
        <Box>
          <Editable defaultValue={title}>
            <EditablePreview fontSize="20px" />
            <EditableInput fontSize="20px" onBlur={handleUpdateTitle} />
          </Editable>
          <Text variant="description">{description}</Text>
        </Box>
        <Box cursor="pointer">
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              size="md"
              aria-label="Options"
              icon={<IconDotsVertical height="18px" width="18px" />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<IconPencil />} onClick={handleClick}>
                Edit Project
              </MenuItem>
              <MenuItem
                icon={<IconTrash />}
                color="red.600"
                onClick={handleClick}
              >
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}
