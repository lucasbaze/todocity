import React from 'react';

import * as track from '@todocity/analytics/events/track';
import type { TButtonAnalytics } from '@todocity/analytics/types';
import { Button as TodoCityButton, ButtonProps } from '@todocity/ui/core';

interface IButtonProps extends ButtonProps {
  analytics: TButtonAnalytics;
}

export const Button = TodoCityButton;

export const AnalButton = React.forwardRef(
  ({ analytics, ...props }: IButtonProps, ref: any) => {
    return (
      <TodoCityButton
        // @ts-ignore
        ref={ref}
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
