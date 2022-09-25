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
      header={
        <ProjectListHeader
          title={selectedProject.title}
          description={selectedProject.description}
        />
      }
      body={<ProjectList todos={selectedProject.todos} />}
      onClose={handleClose}
    />
  );
}
