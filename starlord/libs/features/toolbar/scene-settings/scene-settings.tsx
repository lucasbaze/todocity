import { IconTools } from '@tabler/icons';
import shallow from 'zustand/shallow';

import { AnalIconButton } from '@todocity/analytics/components/anal-icon-button/anal-icon-button';
import { eventTriggers } from '@todocity/analytics/events/constants';
import { useEditModeStore } from '@todocity/stores/edit-mode-store';

// TODO: Use chakra cli to generate usable types
interface ISceneSettingsProps {}

export function SceneSettings({}: ISceneSettingsProps) {
  const { displayControls, setDisplayControls } = useEditModeStore(
    (state) => ({
      displayControls: state.displayControls,
      setDisplayControls: state.setDisplayControls,
    }),
    shallow
  );

  return (
    <AnalIconButton
      icon={<IconTools />}
      variant="ghost"
      onClick={() => setDisplayControls(!displayControls)}
      aria-label="scene settings button"
      size="sm"
      isRound
      analytics={{
        buttonName: eventTriggers.SCENE_SETTINGS,
      }}
    />
  );
}
