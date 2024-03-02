'use client'
import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

import NavLinks from './elements/NavLinks'

const NavBar: React.FC = () => {
  const onTop: boolean = window.scrollY > 65

  return (
    <HStack
      w={'100%'}
      py={onTop ? '1.5em' : '1em'}
      px={'15rem'}
      justifyContent={'space-between'}
      backgroundColor={'#1f1f1f'}
    >
      <Image
        alt="logo image"
        src="/light.png"
        w='2em'
      />
      <NavLinks onTop={onTop} />
    </HStack>
  )
}

export default NavBar
