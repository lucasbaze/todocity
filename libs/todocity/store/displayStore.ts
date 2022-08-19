import create, { StoreApi } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';

// TODO: really need to think about how this is going to work
// These controls might show hide the controls, but doesn't decided "which" controls
// to display
// i.e. on the game scene, the game has a leva menu, and the object has a leva menu, how can I
// render multiple of them at the same time?
// https://codesandbox.io/s/leva-3d-9i4h8

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
