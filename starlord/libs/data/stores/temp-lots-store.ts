import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type { TLot } from '@todocity/data/types';

import { initialLots } from './intial-lots';

interface ILotsStore {
  lots: TLot[];
  completedTodos: number;
  lotPoints: number;
  cityPoints: number;
  completeTodo: () => void;
  unlockLot: (lotId: string) => void;
}

export const initialLotsStore = {
  lots: initialLots,
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
