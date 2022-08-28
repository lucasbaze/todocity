import { Leva, levaStore, useStoreContext } from 'leva';

import { useLevaStore } from '@todocity/stores/displayStore';

export function LevaContext() {
  const levaHidden = useLevaStore((state) => state.hidden);
  const store = useStoreContext();
  console.log('Leva Store: ', store, levaStore.getData());
  return <Leva hidden={levaHidden} />;
}
