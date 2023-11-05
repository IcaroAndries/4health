import { Grid, Stack, HStack } from '@chakra-ui/react'
import React from 'react'

const TopBar: React.FC = ({ children }) => {
  return (
    <Grid>
      <Stack>
        <HStack>
        </HStack>
        {children}
      </Stack>
    </Grid>
  )
}

export default TopBar
