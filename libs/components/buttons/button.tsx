import React from 'react';

import { events } from '@todocity/analytics/events';
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

AnalButton.displayName = 'AnalButton';