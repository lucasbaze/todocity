import { collection, doc, setDoc } from 'firebase/firestore';

import { TProject } from '@todocity/data/types';

import { db } from '../../config/db';

export interface IProjectModel {
  project: Partial<TProject>;
  createProject(params: Partial<TProject>): Promise<IProjectModel>;
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
  }: Partial<TProject>) => {
    const newProject: Partial<TProject> = {
      title,
      description,
      ownerId,
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
}
