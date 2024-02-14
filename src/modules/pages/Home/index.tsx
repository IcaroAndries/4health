import { Stack } from '@chakra-ui/react'
import React from 'react'

import Hero from './components/Hero'
import NavBar from './components/NavBar'

const HomeModule: React.FC = () => {
  return (
    <Stack
      minH={'100vh'}
      w={'100vw'}
    >
      <NavBar />
      <Hero />
    </Stack>
  )
}

export default HomeModule
