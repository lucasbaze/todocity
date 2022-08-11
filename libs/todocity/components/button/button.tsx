import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
import { events, TButtonAnalytics } from '@todocity/analytics';

interface IButtonProps extends ButtonProps {
  analytics: TButtonAnalytics;
}

export const Button = ChakraButton;

export const AnalButton = React.forwardRef(
  ({ analytics, ...props }: IButtonProps, ref: any) => {
    return (
      <ChakraButton
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
