import { HStack } from '@chakra-ui/react'
import React from 'react'

import NavLinks from './elements/NavLinks'

const NavBar: React.FC = () => {
  return (
    <HStack
      w={'100%'}
      py={'1rem'}
      px={'2rem'}
      justifyContent={'space-between'}
      backgroundColor={'#1f1f1f'}
    >
      <NavLinks />
    </HStack>
  )
}

export default NavBar
