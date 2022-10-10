import React from 'react';

import { useToast } from '@chakra-ui/react';

export interface IToastProps {
  children: JSX.Element;
}

export const Toast = ({ children }: IToastProps) => {
  const toast = useToast();

  const handleToast = () => {
    toast({
      title: 'Coming Soon!',
      status: 'info',
      position: 'top',
      duration: 2000,
      isClosable: true,
    });
  };

  return <mesh onClick={handleToast}>{children}</mesh>;
};
