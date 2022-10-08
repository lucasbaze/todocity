import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type {
  TLot,
  TNewTodo,
  TProject,
  TStructure,
} from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { getUid } from '@todocity/utils/global/get-uid';

import { initialProjects } from './initial-projects';
import { structures } from './initial-structures';
import { initialLots } from './intial-lots';

interface ILotsStore {
  cityName?: string;
  setCityName: (name: string) => void;
  lots: TLot[];
  projects: TProject[];
  completedTodos: number;
  createdTodos: number;
  lotPoints: number;
  unlockedLots: number;
  cityPoints: number;
  completeTodo: (projectId: string, todoId: string) => void;
  unCompleteTodo: (projectId: string, todoId: string) => void;
  unlockLot: (lotId: string) => void;
  setPreviewModel: (lotId: string, modelId: string) => void;
  removePreviewModel: () => void;
  placeStructure: (lotId: string, modelId: string) => void;
  structures: TStructure[];
  structuresPlaced: number;
  unlockStructure: (lotId: string) => void;
  createTodoInProject: (projectId: string, todo) => void;
  updateProjectTitle: (projectId: string, projectTitle: string) => void;
  updateProjectDescription: (
    projectId: string,
    projectDescription: string
  ) => void;
  demoCompleted: boolean;
  completeDemo: () => void;
}

export const initialLotsStore = {
  cityName: getLocalStorage()?.getItem('@todocity:city-name'),
  lots: initialLots,
  projects: initialProjects,
  structures: structures,
  createdTodos: 0,
  unlockedLots: 1,
  completedTodos: 0,
  structuresPlaced: 1,
  lotPoints: 5,
  cityPoints: 1,
  demoCompleted: false,
};

// TODO: figure out the right type here
export const actions = (set: any, get: any) => {
  return {
    setCityName: (cityName: string): void => {
      getLocalStorage()?.setItem('@todocity:city-name', cityName);
      set((state: ILotsStore) => ({
        ...state,
        cityName,
      }));
    },
    completeTodo: (projectId: string, todoId: string): void => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);
        const todo = project.todos.find((todo) => todo.id === todoId);
        todo.completed = true;

        project.todos = [...project.todos];

        return {
          ...state,
          projects: projects,
          completedTodos: state.completedTodos + 1,
          lotPoints: state.lotPoints + 2,
        };
      });
    },
    // This is a duplicate of complete Todo... no bueno
    unCompleteTodo: (projectId: string, todoId: string): void => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);
        const todo = project.todos.find((todo) => todo.id === todoId);
        todo.completed = false;

        project.todos = [...project.todos];

        return {
          ...state,
          projects: projects,
          completedTodos: state.completedTodos - 1,
          lotPoints: state.lotPoints - 2,
        };
      });
    },
    unlockLot: (lotId: string): void => {
      set((state: ILotsStore) => {
        const lots = [...state.lots];
        const lot = lots.find((lot) => lot.id === lotId);
        lot.land.locked = false;
        return {
          ...state,
          lots: lots,
          unlockedLots: state.unlockedLots + 1,
          lotPoints: state.lotPoints - lot.land.cost,
        };
      });
    },
    setPreviewModel: (lotId: string, modelId: string) => {
      set((state: ILotsStore) => {
        const lots = [...state.lots];
        const lot = lots.find((lot) => lot.id === lotId);
        lot.preview = {
          src: structures.find((struct) => struct.id === modelId).src,
        };

        return {
          ...state,
          lots: lots,
        };
      });
    },
    removePreviewModel: () => {
      set((state: ILotsStore) => {
        const lots = [...state.lots];
        lots.forEach((lot) => (lot.preview = null));
        return {
          ...state,
          lots: lots,
        };
      });
    },
    placeStructure: (lotId: string, modelId: string) => {
      set((state: ILotsStore) => {
        // Get the lot to update
        const lots = [...state.lots];
        const lot = lots.find((lot) => lot.id === lotId);

        // Remove the lot preview
        lot.preview = null;

        // Grab structure
        const newStructure = {
          ...structures.find((struct) => struct.id === modelId),
        };

        // Create a new project
        const newProject: TProject = {
          id: getUid(),
          description: 'Project Description',
          title: 'New Project',
          todos: [],
        };

        // Attach the project to the structure
        newStructure.projectId = newProject.id;

        // push project to projects
        const projects = [...state.projects];
        projects.push(newProject);

        // Push a new structure onto the lot
        lot.structures.push(newStructure);

        return {
          ...state,
          lots: lots,
          projects: projects,
          structuresPlaced: state.structuresPlaced + 1,
          cityPoints: state.cityPoints + 5,
        };
      });
    },
    unlockStructure: (lotId: string) => {
      set((state: ILotsStore) => {
        const updatedStructures = [...structures];
        const structureToUnlock = updatedStructures.find(
          (struct) => struct.id === lotId
        );
        structureToUnlock.details.locked = false;

        return {
          ...state,
          cityPoints: state.cityPoints - structureToUnlock.details.cost,
          structures: updatedStructures,
        };
      });
    },
    createTodoInProject: (projectId: string, todo: TNewTodo) => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);
        project.todos = [
          ...project.todos,
          { ...todo, id: getUid(), completed: false },
        ];
        return {
          ...state,
          createdTodos: state.createdTodos + 1,
          projects: projects,
        };
      });
    },
    updateProjectTitle: (projectId: string, projectTitle: string) => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);

        project.title = projectTitle;

        return {
          ...state,
          projects: projects,
        };
      });
    },
    updateProjectDescription: (
      projectId: string,
      projectDescription: string
    ) => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);

        project.description = projectDescription;

        return {
          ...state,
          projects: projects,
        };
      });
    },
    completeDemo: () => {
      set((state: ILotsStore) => {
        return {
          ...state,
          demoCompleted: true,
        };
      });
    },
  };
};

export const useLotsManagerStore = create<ILotsStore>()(
  devtools((set, get) => ({
    ...initialLotsStore,
    ...actions(set, get),
  }))
);

/**
 * Action Functions used within the above actions
 * TODO: Need to add a return type for this
 */
