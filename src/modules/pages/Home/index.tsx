'use client'
import { Stack } from '@chakra-ui/react'
import React from 'react'

import AboutCards from './components/AboutCards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'

const HomeModule: React.FC = () => {
  return (
    <Stack
      minH={'100vh'}
      w={'100%'}
      maxW={'100vw'}
      spacing="0px"
    >
      <NavBar />
      <Hero />
      <AboutCards />
      <Footer />
    </Stack>
  )
}

export default HomeModule
