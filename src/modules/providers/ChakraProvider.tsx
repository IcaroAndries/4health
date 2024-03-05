'use client';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import { CacheProvider } from '@chakra-ui/next-js';

import { mainTheme } from '../themes/mainTheme';

interface Props {
  children: React.ReactNode
}

const Provider: React.FC<Props> = ({ children }) => (
  <CacheProvider>
    <ChakraProvider theme={mainTheme}>
      {children}
    </ChakraProvider>
  </CacheProvider>
);

export default Provider;
