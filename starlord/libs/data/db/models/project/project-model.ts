import { collection, doc, setDoc, updateDoc } from 'firebase/firestore';

import { projectRef } from '@todocity/data/db';
import { TProject } from '@todocity/data/types';

import { db } from '../../config/db';

export interface IProjectModel {
  project: Partial<TProject>;
  createProject(params: Partial<TProject>): Promise<IProjectModel>;
  updateProject(
    projectId: string,
    values: Partial<TProject>
  ): Promise<IProjectModel>;
}

export class ProjectModel implements IProjectModel {
  project: Partial<TProject>;

  constructor() {
    this.project = null;
  }

  createProject = async ({
    title,
    description,
    ownerId,
    incompleteTodosCount,
  }: Partial<TProject>) => {
    const newProject: Partial<TProject> = {
      ownerId,
      title: title || 'New Project 🤘',
      description: description || 'Set your project description...',
      incompleteTodosCount: incompleteTodosCount || 0,
    };

    try {
      console.log('Attempting to add projects');
      const projectRef = doc(collection(db, 'projects'));
      await setDoc(projectRef, newProject);

      this.project = { ...newProject, id: projectRef.id };
    } catch (error) {
      console.error('Failed to create new project: ', error);
    }

    return this;
  };

  updateProject = async (
    projectId: string,
    values: Record<string, unknown>
  ) => {
    try {
      console.log('Attempting to update project: ', projectId, values);
      await updateDoc(projectRef(projectId), values);
      console.log('Updated project: ', projectId, values);
      return this;
    } catch (error) {
      console.error('Failed to update project: ', projectId);
    }
  };
}
