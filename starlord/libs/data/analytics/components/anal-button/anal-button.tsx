import React from 'react';

import * as track from '@todocity/analytics/events/track';
import type { TButtonAnalytics } from '@todocity/analytics/types';
import { Button, ButtonProps } from '@todocity/ui/core';

interface IButtonProps extends ButtonProps {
  analytics: TButtonAnalytics;
}

export const AnalButton = React.forwardRef(
  ({ analytics, ...props }: IButtonProps, ref: any) => {
    return (
      <Button
        // @ts-ignore
        ref={ref}
        variant="primary"
        {...props}
        onClick={(event) => {
          if (props.onClick) {
            props.onClick(event);
            track.buttonClick(analytics.buttonName, analytics.params);
          }
        }}
      />
    );
  }
);

AnalButton.displayName = 'AnalButton';
