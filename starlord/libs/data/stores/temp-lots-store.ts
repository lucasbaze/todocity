import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type { TLot, TProject } from '@todocity/data/types';

import { initialProjects } from './initial-projects';
import { structures } from './initial-structures';
import { initialLots } from './intial-lots';

interface ILotsStore {
  lots: TLot[];
  projects: TProject[];
  completedTodos: number;
  lotPoints: number;
  cityPoints: number;
  completeTodo: () => void;
  unlockLot: (lotId: string) => void;
  setPreviewModel: (lotId: string, modelId: string) => void;
  removePreviewModel: () => void;
  placeModel: (lotId: string, modelId: string) => void;
}

export const initialLotsStore = {
  lots: initialLots,
  projects: initialProjects,
  completedTodos: 0,
  lotPoints: 18,
  // lotPoints: 7,
  cityPoints: 3,
};

// TODO: figure out the right type here
export const actions = (set: any, get: any) => {
  return {
    completeTodo: (): void => {
      set((state: ILotsStore) => ({
        ...state,
        lotPoints: state.lotPoints + 2,
      }));
    },
    unlockLot: (lotId: string): void => {
      set((state: ILotsStore) => {
        const lots = [...state.lots];
        const lot = lots.find((lot) => lot.id === lotId);
        lot.land.locked = false;
        return {
          ...state,
          lots: lots,
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
    placeModel: (lotId: string, modelId: string) => {
      set((state: ILotsStore) => {
        const lots = [...state.lots];
        const lot = lots.find((lot) => lot.id === lotId);
        lot.preview = null;
        lot.structures.push(structures.find((struct) => struct.id === modelId));

        return {
          ...state,
          lots: lots,
          cityPoints: state.cityPoints + 5,
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
