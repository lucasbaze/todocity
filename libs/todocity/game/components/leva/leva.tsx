import { Leva } from 'leva';

import { useLevaStore } from '@todocity/store';

export function LevaContext() {
  const levaHidden = useLevaStore((state) => state.hidden);
  return <Leva hidden={levaHidden} />;
}
