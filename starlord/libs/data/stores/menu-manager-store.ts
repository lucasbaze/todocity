import create from 'zustand';
import { devtools } from 'zustand/middleware';

import type { TMenu } from '@todocity/data/types';

interface ICreateMenu extends Omit<TMenu, 'id'> {
  id?: string;
}

interface IMenuManager {
  activeMenus: TMenu[];
  activeMenu: TMenu;
  createMenu: (args: ICreateMenu) => void;
  destroyMenu: (id: string) => void;
  destroyAllMenus: () => void;
}

export const initialMenuManagerStore = {
  activeMenus: [],
  activeMenu: null,
};

// TODO: figure out the right type here
export const actions = (set: any, get: any) => {
  return {
    createMenu: (createMenuArgs: ICreateMenu): void => {
      set((state: IMenuManager) => {
        // if menu isn't already created, then create a new menu
        if (
          state.activeMenus.findIndex(
            (menu) => menu.id === createMenuArgs.id
          ) === -1
        ) {
          console.log('Active Menus: ', state.activeMenus);
          const newMenu = buildMenu({
            ...createMenuArgs,
            activeMenus: state.activeMenus,
          });

          return {
            ...state,
            activeMenus: [...state.activeMenus, newMenu],
          };
        } else {
          return { ...state };
        }
      });
    },
    destroyMenu: (id: string) => {
      set((state: IMenuManager) => ({
        ...state,
        activeMenus: state.activeMenus.filter((menu) => id !== menu.id),
      }));
    },
    destroyAllMenus: () => {
      set((state: IMenuManager) => ({
        ...state,
      }));
    },
  };
};

export const useMenuManagerStore = create<IMenuManager>()(
  devtools((set, get) => ({
    ...initialMenuManagerStore,
    ...actions(set, get),
  }))
);

/**
 * Action Functions used within the above actions
 * TODO: Need to add a return type for this
 */
interface IBuildMenu extends ICreateMenu {
  activeMenus: TMenu[];
}

function buildMenu({
  id,
  type,
  cssPosition,
  activeMenus,
  content,
}: IBuildMenu): TMenu {
  switch (type) {
    case 'lot':
      return {
        id,
        cssPosition,
        type,
        content,
      };
    case 'project':
      const projectPositionOffset = activeMenus.filter(
        (menu) => menu.type === 'project'
      ).length;
      return {
        id,
        cssPosition: {
          left: 2 + projectPositionOffset * 4,
          top: 2 + projectPositionOffset * 4,
        },
        type,
        content,
      };
    case 'library':
      const libraryPositionOffset = activeMenus.filter(
        (menu) => menu.type === 'library'
      ).length;
      return {
        id,
        cssPosition: {
          right: 2 + libraryPositionOffset * 4,
          top: 2 + libraryPositionOffset * 4,
        },
        type,
        content,
      };
  }
}
