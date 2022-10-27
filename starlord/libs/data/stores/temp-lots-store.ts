import { string } from 'yup/lib/locale';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import { placeStructure, unlockStructure } from '@todocity/data/db';
import type {
  TLot,
  TLotPreview,
  TNewTodo,
  TPackage,
  TProject,
  TStructure,
} from '@todocity/data/types';
import { getLocalStorage } from '@todocity/utils/global/get-local-storage';
import { getUid } from '@todocity/utils/global/get-uid';

import { initialLots } from './initial-lots';
import { initialProjects } from './initial-projects';
import { structures } from './initial-structures';

interface ILotsStore {
  cityName?: string;
  countdownStart: number;
  setCityName: (name: string) => void;
  packages: TPackage[];
  createPackage: () => void;
  openPackage: (id: string) => void;
  powerLevel: number;
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
  lotPreview: TLotPreview;
  removePreviewModel: () => void;
  placeStructure: (userId: string, lotId: string, structureId: string) => void;
  structures: TStructure[];
  structuresPlaced: number;
  unlockStructure: (userId: string, structureId: string) => void;
  createTodoInProject: (projectId: string, todo) => void;
  demoCompleted: boolean;
  completeDemo: () => void;
}

export const initialLotsStore = {
  cityName: getLocalStorage()?.getItem('@todocity:city-name'),
  countdownStart: Date.now() + 5 * 60000,
  powerLevel: 50,
  packages: [],
  lots: initialLots,
  projects: initialProjects,
  structures: structures,
  lotPreview: null,
  createdTodos: 0,
  unlockedLots: 1,
  completedTodos: 0,
  structuresPlaced: 1,
  lotPoints: 15,
  cityPoints: 3,
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
    createPackage: (): void => {
      set((state: ILotsStore) => {
        // Generate new package
        let newCityPoints = 0;
        let newLotPoints = 0;
        if (Math.random() > 0.5) {
          // prettier-ignore
          newCityPoints = Math.round(state.structures.length * Math.random() * state.powerLevel / 100) + 1;
        } else {
          // prettier-ignore
          newLotPoints = Math.round(state.structures.length * Math.random() + state.completedTodos / 10) + 1;
        }
        // prettier-ignore
        const newPackage: TPackage = { id: getUid(), lotPoints: newLotPoints, cityPoints: newCityPoints};

        const newPowerLevel = () => {
          const powerReduction = Math.max(newCityPoints, newLotPoints);

          if (state.powerLevel - powerReduction < 0) {
            return 0;
          } else {
            return state.powerLevel - powerReduction;
          }
        };

        return {
          ...state,
          packages: [newPackage],
          powerLevel: newPowerLevel(),
        };
      });
    },
    openPackage: (id: string): void => {
      set((state: ILotsStore) => {
        const openedPackage = state.packages.find(
          (pointPackage) => pointPackage.id === id
        );

        return {
          ...state,
          countdownStart: Date.now() + 5 * 60000,
          cityPoints: (state.cityPoints += openedPackage.cityPoints),
          lotPoints: (state.lotPoints += openedPackage.lotPoints),
          packages: [],
        };
      });
    },
    completeTodo: (projectId: string, todoId: string): void => {
      set((state: ILotsStore) => {
        const projects = [...state.projects];
        const project = projects.find((project) => project.id === projectId);
        const todoIndex = project.todos.findIndex((todo) => todo.id === todoId);
        project.todos[todoIndex].completed = true;
        // const updatedTodo = { ...project.todos[todoIndex] };
        // updatedTodo.completed = true;

        // // Sort completed todo to the bottom
        // project.todos.splice(todoIndex, 1);
        // project.todos.push(updatedTodo);

        project.todos = [...project.todos];

        return {
          ...state,
          projects: projects,
          powerLevel: Math.min(100, state.powerLevel + 10),
          completedTodos: state.completedTodos + 1,
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
          powerLevel: Math.min(100, state.powerLevel - 10),
          completedTodos: state.completedTodos - 1,
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
    setPreviewModel: (lotId: string, previewSrc: string) => {
      set((state: ILotsStore) => {
        const preview = {
          lotId,
          src: previewSrc,
        };

        return {
          ...state,
          lotPreview: preview,
        };
      });
    },
    removePreviewModel: () => {
      set((state: ILotsStore) => {
        return {
          ...state,
          lotPreview: null,
        };
      });
    },
    placeStructure: (userId: string, lotId: string, structureId: string) => {
      set((state: ILotsStore) => {
        placeStructure(userId, lotId, structureId);

        return {
          ...state,
          lotPreview: null,
          structuresPlaced: state.structuresPlaced + 1,
          cityPoints: state.cityPoints + 5,
        };
      });
    },
    unlockStructure: (userId: string, structureId: string) => {
      set((state: ILotsStore) => {
        unlockStructure(userId, structureId);

        return {
          ...state,
          // TODO: Update the cityState
          // cityPoints: state.cityPoints - structureToUnlock.details.cost,
          // structures: updatedStructures,
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
