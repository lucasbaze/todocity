import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type {
  TLot,
  TLotPreview,
  TPackage,
  TProject,
  TStructure,
} from '@todocity/data/types';

import { initialLots } from './initial-lots';
import { initialProjects } from './initial-projects';
import { structures } from './initial-structures';

interface ILotsStore {
  countdownStart: number;
  packages: TPackage[];
  powerLevel: number;
  lots: TLot[];
  projects: TProject[];
  completedTodos: number;
  createdTodos: number;
  lotPoints: number;
  unlockedLots: number;
  cityPoints: number;
  setPreviewModel: (lotId: string, modelId: string) => void;
  lotPreview: TLotPreview;
  removePreviewModel: () => void;
  structures: TStructure[];
  structuresPlaced: number;
  demoCompleted: boolean;
  completeDemo: () => void;
}

export const initialLotsStore = {
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
