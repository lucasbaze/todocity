import type { TMenu } from '@todocity/data/types';
import { useMenuManagerStore } from '@todocity/stores/menu-manager-store';
import { Box, Text } from '@todocity/ui/core';

import { DraggableMenu } from './draggable-menu/draggable-menu';
import { LotMenu } from './lot-menu/lot-menu';

function MenuPresenter(props: TMenu) {
  const closeMenu = useMenuManagerStore((state) => state.destroyMenu);

  switch (props.type) {
    case 'lot':
      return <LotMenu {...props} onClose={(id) => closeMenu(id)} />;
    case 'project':
      return (
        <DraggableMenu
          position={props.cssPosition}
          header="Project Menu"
          body={
            <Box>
              <div>All of the todos will go here</div>
            </Box>
          }
          onClose={() => closeMenu(props.id)}
        />
      );
    case 'library':
      return (
        <DraggableMenu
          position={props.cssPosition}
          header="Library Menu"
          body={
            <Box>
              <div>Gonna look at those sweet sweet objects</div>
            </Box>
          }
          onClose={() => closeMenu(props.id)}
        />
      );
  }
}

export function MenuManager() {
  const store = useMenuManagerStore();
  console.log('Store: ', store);
  // const activeMenus = useMenuManagerStore((state) => state.activeMenus);
  // console.log('Active Menus: ', activeMenus);
  return (
    <>
      {store.activeMenus?.map((menu) => (
        <MenuPresenter key={menu.id} {...menu} />
      ))}
    </>
  );
}
