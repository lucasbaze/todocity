import create, { StoreApi } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';

interface ILevaStore {
  hidden: boolean;
  setHidden: (value: boolean) => void;
}

export const initialLevaStore = {
  hidden: true,
};

// TODO: figure out the right type here
export const actions = (set: any, get: any) => {
  return {
    setHidden: (hidden: boolean) => {
      set((state: ILevaStore) => ({
        ...state,
        hidden: hidden,
      }));
    },
  };
};

export const useLevaStore = create<ILevaStore>()(
  devtools(
    persist((set, get) => ({
      ...initialLevaStore,
      ...actions(set, get),
    }))
  )
);
