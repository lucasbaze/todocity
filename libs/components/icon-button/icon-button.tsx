import React from 'react';

import * as track from '@todocity/analytics/events/track';
import type { TButtonAnalytics } from '@todocity/analytics/types';
import {
  IconButton as TodoCityIconButton,
  IconButtonProps,
} from '@todocity/ui/core';

interface IIconButtonProps extends IconButtonProps {
  analytics: TButtonAnalytics;
}

export const IconButton = TodoCityIconButton;

export const AnalIconButton = React.forwardRef(
  ({ analytics, ...props }: IIconButtonProps, ref: any) => {
    return (
      <TodoCityIconButton
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

AnalIconButton.displayName = 'AnalIconButton';
