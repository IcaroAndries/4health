import { Box, Stack } from '@chakra-ui/react'
import React from 'react'

interface Props {
  title: string
  description: string
}

const Card: React.FC<Props> = function ({ title, description }) {
  return (
    <Stack
      py="1.5em"
      px="1em"
    >
      <Box
        w="3em"
        h="3em"
        borderRadius="50%"
        border="2px solid"
        borderColor="yellow.400"
        p="0.5em"
      />
    </Stack>
  )
}

export default Card
