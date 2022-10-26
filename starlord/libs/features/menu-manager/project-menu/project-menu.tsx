import { useEffect, useState } from 'react';

import {
  useFirestoreDocumentData,
  useFirestoreQueryData,
} from '@react-query-firebase/firestore';
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
import { firestoreConverter } from '@todocity/data/db';
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
  const projectDocRef = doc(db, 'projects', id);
  const projectTodosQueryRef = query(
    collection(doc(db, 'projects', id), 'todos').withConverter(
      firestoreConverter<TTodoItem>()
    )
  );
  const projectQuery = useFirestoreDocumentData(
    ['project', id],
    projectDocRef,
    { subscribe: true }
  );
  const projectTodosQuery = useFirestoreQueryData<TTodoItem>(
    ['project-todos', id],
    projectTodosQueryRef,
    { subscribe: true }
  );

  const handleClose = () => {
    onClose(id);
  };

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
          title={projectQuery.data?.title}
          description={projectQuery.data?.description}
        />
      }
      body={
        <Box pb="4">
          <ProjectList
            projectId={content.projectId}
            todos={projectTodosQuery?.data || []}
          />
        </Box>
      }
      onClose={handleClose}
    />
  );
}
