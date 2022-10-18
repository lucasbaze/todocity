import { useState } from 'react';
import { useEffect } from 'react';

import { IconClock } from '@tabler/icons';

import { useLotsManagerStore } from '@todocity/stores/temp-lots-store';
import { Icon, Text } from '@todocity/ui/core';
import { useCountdown } from '@todocity/utils/hooks/use-countdown';
import { usePrevious } from '@todocity/utils/hooks/use-previous';

export function CountdownTimer() {
  const [timerComplete, setTimerComplete] = useState(false);
  const { countdownStart, createPackage } = useLotsManagerStore((state) => ({
    countdownStart: state.countdownStart,
    createPackage: state.createPackage,
  }));
  const previousTime = usePrevious(countdownStart);
  const [minutes, seconds] = useCountdown(countdownStart);

  useEffect(() => {
    if (minutes + seconds < 0 && !timerComplete) {
      createPackage();
      setTimerComplete(true);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    if (countdownStart !== previousTime) {
      setTimerComplete(false);
    }
  }, [countdownStart, previousTime]);

  return (
    <>
      <Icon as={IconClock} mr="1" />
      <Text fontWeight="bold">
        {minutes + seconds < 0 ? (
          '0:00'
        ) : (
          <>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</>
        )}
      </Text>
    </>
  );
}
