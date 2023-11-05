'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { mainTheme } from '../themes/mainTheme'
import React from 'react'

export function Provider ({
  children
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <CacheProvider>
      <ChakraProvider theme={mainTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
