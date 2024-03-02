import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  onTop: boolean
}
const NavLinks: React.FC<Props> = ({ onTop }) => {

  return (
    <HStack
      textColor='white'
      fontSize={onTop ? '2em' : '1.5em'}
      fontWeight='700'
      spacing={onTop ? '3em' : '2em'}
    >
      <Text>Home</Text>
      <Text>About</Text>
      <Text>Contact</Text>
    </HStack>
  )
}

export default NavLinks
