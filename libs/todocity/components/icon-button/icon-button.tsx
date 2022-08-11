import React from 'react';
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { events, TButtonAnalytics } from '@todocity/analytics';

interface IIconButtonProps extends IconButtonProps {
  analytics: TButtonAnalytics;
}

export const IconButton = ChakraIconButton;

export const AnalIconButton = React.forwardRef(
  ({ analytics, ...props }: IIconButtonProps, ref: any) => {
    return (
      <ChakraIconButton
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
