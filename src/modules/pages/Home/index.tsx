import { Stack } from '@chakra-ui/react'
import React from 'react'

import NavBar from './components/NavBar'

const HomeModule: React.FC = () => {
  return (
    <Stack
      minH={'100vh'}
      w={'100vw'}
    >
      <NavBar />
    </Stack>
  )
}

export default HomeModule
