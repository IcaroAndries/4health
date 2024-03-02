import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

const NavLinks: React.FC = () => {
  return (
    <HStack
      textColor='white'
      fontSize={'1.5em'}
      fontWeight='700'
      spacing={'2em'}
    >
      <Text>Home</Text>
      <Text>About</Text>
      <Text>Contact</Text>
    </HStack>
  )
}

export default NavLinks
