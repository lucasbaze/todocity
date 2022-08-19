import { Leva } from 'leva';

import { useLevaStore } from '@todocity/stores/displayStore';

export function LevaContext() {
  const levaHidden = useLevaStore((state) => state.hidden);
  return <Leva hidden={levaHidden} />;
}
