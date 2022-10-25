import { useEffect, useState } from 'react';

import { useFirestoreQueryData } from '@react-query-firebase/firestore';
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

import { AnalButton } from '@todocity/analytics/components/anal-button/anal-button';
import { getUserProjects } from '@todocity/data/db';
import type { TMenu } from '@todocity/data/types';
import { TTodoItem } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { ProjectList } from '@todocity/features/projects/project-list/project-list';
import { ProjectListHeader } from '@todocity/features/projects/project-list/project-list-header/project-list-header';
import { structures } from '@todocity/stores/initial-structures';
import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Box, Button, Flex, Grid, Image, Text } from '@todocity/ui/core';

import { db } from '../../../data/db/config/db';
export interface IProjectMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function ProjectMenu({
  id,
  cssPosition,
  onClose,
  content,
}: IProjectMenuProps) {
  const queryRef = query(
    collection(doc(db, 'projects', 'zJggSZG1l6BOf5XRRwuB'), 'todos')
  );
  const { isLoading, isError, data } = useFirestoreQueryData(
    ['todos', id],
    queryRef,
    {
      subscribe: true,
    }
  );

  const projects = useLotsManagerStore((state) => state.projects);
  const selectedProject = projects.find(
    (project) => project.id === content.projectId
  );

  const handleClose = () => {
    onClose(id);
  };
  console.log('Query Data: ', isLoading, isError, data);

  // useEffect(() => {
  //   async function projects() {
  //     const { unsubscribe, todos, error } = await getProjectTodos({
  //       projectId: 'zJggSZG1l6BOf5XRRwuB',
  //     });
  //     console.log('Project Todos: ', unsubscribe, todos, error);
  //     // const res = await getUserProjects({
  //     //   userId: 'tucjHLGbuV79kseVuVqV2QpB94Mc',
  //     // });
  //     // console.log('User Projects Res: ', res);
  //   }
  //   projects();
  // }, []);

  return (
    <DraggableMenu
      id={id}
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
          id={id}
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
