import type { TMenu } from '@todocity/data/types';
import { LibraryMenu } from '@todocity/features/menu-manager/library-menu/library-menu';
import { ProjectMenu } from '@todocity/features/menu-manager/project-menu/project-menu';
import { useMenuManagerStore } from '@todocity/stores/menu-manager-store';

import { LotMenu } from './lot-menu/lot-menu';

function MenuPresenter(props: TMenu) {
  const closeMenu = useMenuManagerStore((state) => state.destroyMenu);

  switch (props.type) {
    case 'lot':
      return <LotMenu {...props} onClose={(id) => closeMenu(id)} />;
    case 'project':
      return <ProjectMenu {...props} onClose={(id) => closeMenu(id)} />;
    case 'library':
      return <LibraryMenu {...props} onClose={(id) => closeMenu(id)} />;
  }
}

export function MenuManager() {
  const activeMenus = useMenuManagerStore((state) => state.activeMenus);
  return (
    <>
      {activeMenus?.map((menu) => (
        <MenuPresenter key={menu.id} {...menu} />
      ))}
    </>
  );
}
