import { HStack, Image } from '@chakra-ui/react'
import React from 'react'

import NavLinks from './elements/NavLinks'

const NavBar: React.FC = () => {
  return (
    <HStack
      w={'100%'}
      py={'1rem'}
      px={'15rem'}
      justifyContent={'space-between'}
      backgroundColor={'#1f1f1f'}
    >
      <Image
        alt="logo image"
        src="/light.png"
        w='2em'
      />
      <NavLinks />
    </HStack>
  )
}

export default NavBar
