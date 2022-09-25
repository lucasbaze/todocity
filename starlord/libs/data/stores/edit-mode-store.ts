import { levaStore as defaultLevaStore } from 'leva';
import create, { StoreApi } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import shallow from 'zustand/shallow';

// TODO: really need to think about how this is going to work
// These controls might show hide the controls, but doesn't decided "which" controls
// to display
// i.e. on the game scene, the game has a leva menu, and the object has a leva menu, how can I
// render multiple of them at the same time?
// https://codesandbox.io/s/leva-3d-9i4h8

interface IEditModeStore {
  displayControls: boolean;
  setDisplayControls: (value: boolean) => void;
  levaStoreToDisplay: typeof defaultLevaStore | null;
  setLevaStoreToDisplay: (value: typeof defaultLevaStore) => void;
}

export const initialEditModeStore = {
  displayControls: false,
  levaStoreToDisplay: null,
};

// TODO: figure out the right type here
export const actions = (set: any, get: any) => {
  return {
    setDisplayControls: (display: boolean) => {
      set((state: IEditModeStore) => ({
        ...state,
        displayControls: display,
      }));
    },
    setLevaStoreToDisplay: (levaStore: typeof defaultLevaStore) => {
      set((state: IEditModeStore) => ({
        ...state,
        levaStoreToDisplay: levaStore,
      }));
    },
  };
};

export const useEditModeStore = create<IEditModeStore>()(
  devtools(
    persist((set, get) => ({
      ...initialEditModeStore,
      ...actions(set, get),
    }))
  )
);
