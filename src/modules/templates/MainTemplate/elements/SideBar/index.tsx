import { Stack, Text } from '@chakra-ui/react'
import useResponsiveSize from 'modules/shared/hooks/ResponsiveSize'
import React from 'react'

const SideBar: React.FC = () => {
  const { vw } = useResponsiveSize()

  return (
    <Stack
      w='100%'
      h="100%"
      bgColor='gray.800'
    >
      <Stack
        p={vw('25px')}
        align='center'
        justify='center'
        textColor='red.500'
      >
        <Text
          fontSize={vw('50px')}
          fontWeight='500'
        >
          Logo
        </Text>
      </Stack>
      <Stack>

      </Stack>
    </Stack>
  )
}

export default SideBar
