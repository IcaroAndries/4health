import { Grid, Stack } from '@chakra-ui/react';
import React from 'react';

import useResponsiveSize from 'modules/_shared/hooks/use-responsive-size';

import SideBar from './elements/SideBar';
import TopMenu from './elements/TopMenu';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { vw } = useResponsiveSize();

  return (
    <Grid
      w="100%"
      minH="100vw"
      bgColor="whiteAlpha.400"
      gridTemplateColumns="auto 1fr"
    >
      <SideBar />
      <Stack
        w="100%"
        h="100%"
        align="center"
        justify="center"
        spacing={vw('60px')}
      >
        <TopMenu />
        {children}
      </Stack>
    </Grid>
  );
};
export default MainTemplate;
