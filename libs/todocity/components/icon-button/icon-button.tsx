import React from 'react';

import { events } from '@todocity/analytics/events';
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
            window.dataLayer.push({
              event: events.BUTTON_CLICK,
              button_name: analytics.buttonName,
              ...analytics.params,
            });
          }
        }}
      />
    );
  }
);

AnalIconButton.displayName = 'AnalIconButton';
