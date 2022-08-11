import React from 'react';
import {
  IconButton as TodoCityIconButton,
  IconButtonProps,
} from '@todocity/ui';
import { events, TButtonAnalytics } from '@todocity/analytics';

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
