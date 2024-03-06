import {
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

import SideMenu from './elements/SideMenu';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { vw } = useResponsiveSize();

  return (
    <Stack
      w="100%"
      h="100%"
      minH="100vw"
      bgColor="whiteAlpha.400"
    >
      <SideMenu />
      <Stack
        w="100%"
        h="100%"
        align="center"
        justify="center"
        spacing={vw('60px')}
      >
        {/* still unused box */}
        <Box />
        <Flex pl={vw('300px')}>
          {children}
        </Flex>
      </Stack>
    </Stack>
  );
};
export default MainTemplate;
