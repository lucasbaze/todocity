import { getLocalStorage } from '@todocity/utils/global/get-local-storage';

export const isGameDevToolsEnabled = (): boolean => {
  return (
    process.env.NEXT_PUBLIC_WEB_APP_ENV === 'development' &&
    getLocalStorage()?.getItem('@todocity:dev-game-tools') === 'true'
  );
};
