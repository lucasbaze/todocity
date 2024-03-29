import { LevaPanel, levaStore } from 'leva';

import { useEditModeStore } from '@todocity/stores/edit-mode-store';

export function LevaContext() {
  const showing = useEditModeStore((state) => state.displayControls);
  const store = useEditModeStore((state) => state.levaStoreToDisplay);
  return (
    <LevaPanel
      hidden={!showing}
      store={store?.getVisiblePaths !== undefined ? store : levaStore}
    />
  );
}
