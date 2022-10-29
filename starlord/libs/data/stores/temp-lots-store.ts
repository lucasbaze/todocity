import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type { TLotPreview } from '@todocity/data/types';

interface ILotsStore {
  lotPreview: TLotPreview;
  setPreviewModel: (lotId: string, modelId: string) => void;
  removePreviewModel: () => void;
  demoCompleted: boolean;
  completeDemo: () => void;
}

export const initialLotsStore = {
  lotPreview: null,
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
