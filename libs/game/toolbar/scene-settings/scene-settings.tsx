import { IconTools } from '@tabler/icons';
import shallow from 'zustand/shallow';

import { eventTriggers } from '@todocity/analytics/events/constants';
import { AnalIconButton } from '@todocity/components/anal-icon-button/anal-icon-button';
import { useLevaStore } from '@todocity/stores/displayStore';

// TODO: Use chakra cli to generate usable types
interface ISceneSettingsProps {}

export function SceneSettings({}: ISceneSettingsProps) {
  const { hidden, setHidden } = useLevaStore(
    (state) => ({
      hidden: state.hidden,
      setHidden: state.setHidden,
    }),
    shallow
  );

  return (
    <AnalIconButton
      icon={<IconTools />}
      variant="ghost"
      onClick={() => setHidden(!hidden)}
      aria-label="scene settings button"
      size="sm"
      isRound
      analytics={{
        buttonName: eventTriggers.SCENE_SETTINGS,
      }}
    />
  );
}
