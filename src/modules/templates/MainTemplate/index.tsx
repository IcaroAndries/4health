import { Grid, Stack } from '@chakra-ui/react'
import React from 'react'

import SideBar from './elements/SideBar'

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Grid
      w="100%"
      minH='100vw'
      bgColor="primary.900"
      gridTemplateColumns={'15vw 1fr'}
    >
      <SideBar />
      <Stack
        w='100%'
        h='100%'
        align='center'
        justify='center'
      >
        {children}
      </Stack>
    </Grid >
  )
}

export default MainTemplate
