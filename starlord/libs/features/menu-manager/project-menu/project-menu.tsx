import { useState } from 'react';

import { AnalButton } from '@todocity/analytics/components/anal-button/anal-button';
import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { ProjectList } from '@todocity/features/projects/project-list/project-list';
import { ProjectListHeader } from '@todocity/features/projects/project-list/project-list-header/project-list-header';
import { structures } from '@todocity/stores/initial-structures';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Box, Button, Flex, Grid, Image, Text } from '@todocity/ui/core';

export interface IProjectMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function ProjectMenu({
  id,
  cssPosition,
  onClose,
  content,
}: IProjectMenuProps) {
  const projects = useLotsManagerStore((state) => state.projects);
  const selectedProject = projects.find(
    (project) => project.id === content.projectId
  );

  const handleClose = () => {
    onClose(id);
  };

  return (
    <DraggableMenu
      position={cssPosition}
      width="400px"
      headerAccent={
        <Box
          position="absolute"
          top="-10"
          left="-10"
          borderRadius="99em"
          overflow="hidden"
        >
          <Image
            src={content.structureThumbnailUrl}
            width="80px"
            height="80px"
            alt="image"
          />
        </Box>
      }
      header={
        <ProjectListHeader
          title={selectedProject.title}
          description={selectedProject.description}
        />
      }
      body={
        <Box pb="4">
          <ProjectList
            projectId={content.projectId}
            todos={selectedProject.todos}
          />
        </Box>
      }
      onClose={handleClose}
    />
  );
}
