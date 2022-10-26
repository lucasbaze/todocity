import {
  useFirestoreDocumentData,
  useFirestoreDocumentMutation,
  useFirestoreQueryData,
} from '@react-query-firebase/firestore';

import { projectRef, projectTodosRef } from '@todocity/data/db';
import type { TMenu } from '@todocity/data/types';
import { DraggableMenu } from '@todocity/features/menu-manager/draggable-menu/draggable-menu';
import { ProjectList } from '@todocity/features/projects/project-list/project-list';
import { ProjectListHeader } from '@todocity/features/projects/project-list/project-list-header/project-list-header';
import { Box, Image } from '@todocity/ui/core';

export interface IProjectMenuProps extends TMenu {
  onClose: (id: string) => void;
}

export function ProjectMenu({
  id,
  cssPosition,
  onClose,
  content,
}: IProjectMenuProps) {
  const projectQuery = useFirestoreDocumentData(
    ['project', id],
    projectRef(id),
    {
      subscribe: true,
    }
  );
  const projectTodosQuery = useFirestoreQueryData(
    ['project-todos', id],
    projectTodosRef(id),
    { subscribe: true }
  );
  const mutation = useFirestoreDocumentMutation(projectRef(id), {
    merge: true,
  });

  const handleClose = () => {
    onClose(id);
  };

  const handleUpdateProject = (values) => {
    mutation.mutate({
      ...values,
    });
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
        <>
          {projectQuery.data?.title ? (
            <ProjectListHeader
              id={id}
              title={projectQuery.data?.title}
              description={projectQuery.data?.description}
              handleUpdateProject={handleUpdateProject}
            />
          ) : null}
        </>
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
