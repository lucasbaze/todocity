import { useState } from 'react';
import { useEffect } from 'react';

import { IconClock } from '@tabler/icons';

import { useAuth } from '@todocity/auth';
import { createPackage } from '@todocity/data/db';
import { Icon, Text } from '@todocity/ui/core';
import { useCountdown } from '@todocity/utils/hooks/use-countdown';

/**
 * This is currently "controlled" through the mount / dismount of the topbar component
 * Super ugly, but it works
 */
export function CountdownTimer() {
  const { user } = useAuth();
  const [startTime] = useState(Date.now() + 10000);
  const [timerComplete, setTimerComplete] = useState(false);

  const [minutes, seconds] = useCountdown(startTime);

  useEffect(() => {
    if (minutes + seconds < 0 && !timerComplete) {
      createPackage(user.uid);
      setTimerComplete(true);
    }
  }, [minutes, seconds, timerComplete]);

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
